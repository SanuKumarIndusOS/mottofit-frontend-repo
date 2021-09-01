import { MessagingActionType } from "../service/actionType";
import ChatClientInstance from "../helpers/Messaging";
import { TrainerApi } from "service/apiVariables";

export const updatePersonTyping = (payload) => (dispatch, getState) => {
  const { typingMembers, currentChannelMembers } = getState().messagingReducer;
  const { type, participant } = payload;
  let { identity } = participant.state;
  let tempMembers = typingMembers;

  const currentLoggedInUser = localStorage.getItem("user-id");

  const currentChatItemOwner =
    currentChannelMembers.filter(
      ({ userIdenity }) => userIdenity === identity
    )[0] || {};

  let currentPerson = currentChatItemOwner?.userName || identity;

  if (type === "typingStarted") {
    // console.log(typingMembers, identity);

    if (!typingMembers.includes(currentPerson)) {
      tempMembers = [...typingMembers, currentPerson];

      dispatch({
        type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
        payload: { typingMembers: [...tempMembers] },
      });
    }
  } else if (type === "typingEnded") {
    // console.log(typingMembers, currentPerson);
    if (typingMembers.includes(currentPerson)) {
      tempMembers = [...typingMembers].filter(
        (person) => person !== currentPerson
      );
      dispatch({
        type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
        payload: { typingMembers: [...tempMembers] },
      });
    }
  }
};

export const resetChannelDetails = () => (dispatch) => {
  dispatch({
    type: MessagingActionType.RESET_CHANNEL_DETAILS,
  });
};

export const updateMessagingDetails = (payload) => (dispatch) => {
  dispatch({
    type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
    payload,
  });
};

export const updateGlobalMessagingDetails = (message) => (
  dispatch,
  getState,
  { api }
) => {
  const currentMesasgedChannelId = message?.channel?.sid;
  const currentMesasge = message?.state?.body;
  const currentMesasgeAuthor = message?.state?.author;
  const {
    pastSessions,
    upcomingSessions,
    adminMessages,
    invitedSessions,
    requestedSessions,
    userMessages,
    trainerMessages,
    activeChannel,
  } = getState().messagingReducer;

  let tempPastSessions = [...pastSessions];
  let tempUpcomingSessions = [...upcomingSessions];
  let tempInvitedSessions = [...invitedSessions];
  let tempAdminSession = [...adminMessages];
  let tempRequestedSessions = [...requestedSessions];
  let tempUserMessages = [...userMessages];
  let tempTrainerMessages = [...trainerMessages];

  // updating unread action callback
  const updateUnReadCountCb = (payload, currentTab) =>
    updateMessageUnReadCount(payload, currentTab)(dispatch, getState, { api });

  const currentPastSessions = handleChannelMessage(
    tempPastSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );
  const currentUpcomingSessions = handleChannelMessage(
    tempUpcomingSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );
  const currentRequestedSessions = handleChannelMessage(
    tempRequestedSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );
  const currentInvitedSessions = handleChannelMessage(
    tempInvitedSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );

  const currentAdminSessions = handleChannelMessage(
    tempAdminSession,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );
  const currentUserMessages = handleChannelMessage(
    tempUserMessages,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );
  const currentTrainerMessages = handleChannelMessage(
    tempTrainerMessages,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor,
    activeChannel,
    updateUnReadCountCb
  );

  let payload = {
    pastSessions: currentPastSessions,
    upcomingSessions: currentUpcomingSessions,
    requestedSessions: currentRequestedSessions,
    adminMessages: currentAdminSessions,
    userMessages: currentUserMessages,
    trainerMessages: currentTrainerMessages,
    invitedSessions: currentInvitedSessions,
  };

  let messageLeftDOMs = document.getElementsByClassName("message_left");
  [...messageLeftDOMs]?.forEach((dom) => dom?.scrollTo(0, 0));
  dispatch({
    type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
    payload,
  });
};

export const initClientDispatch = (channelSID, callback) => (
  dispatch,
  getState
) => {
  dispatch({
    type: MessagingActionType.UPDATE_CLIENT_INSTANCE,
    payload: new ChatClientInstance(dispatch, getState, channelSID, callback),
  });
};

export const unSubscribeFromChannel = () => (dispatch, getState) => {
  const { chatClientInstance } = getState().messagingReducer;

  chatClientInstance && chatClientInstance.unSubscribeChannel();
};

export const unSubscribeFromClient = () => (dispatch, getState) => {
  const { chatClientInstance } = getState().messagingReducer;

  chatClientInstance && chatClientInstance.removeChatClient();
};

const handleChannelMessage = (
  channelData,
  currentMesasgedChannelId,
  currentMesasge,
  author,
  activeChannel,
  updateUnReadCountCb
) => {
  let tempChannelData = [...channelData].map((data) => {
    let CurrentChannelData = { ...data };

    if (data?.channelId === currentMesasgedChannelId) {
      if (!Object.keys(CurrentChannelData).includes("message"))
        CurrentChannelData["message"] = {};

      CurrentChannelData["message"]["body"] = currentMesasge;
      CurrentChannelData["message"]["date_updated"] = new Date().toISOString();
      CurrentChannelData["message"]["from"] = author;

      console.log(CurrentChannelData);

      let currentUserId = localStorage.getItem("user-id");

      const isCurrentUserAuthor = author === currentUserId;

      if (!isCurrentUserAuthor) {
        // console.log(CurrentChannelData, activeChannel);

        // Check whether user is currently active on the messaged channel
        const isChannelActive =
          CurrentChannelData.channelId === activeChannel.sid;

        if (isChannelActive) {
          let payload = {
            channelSid: activeChannel.sid,
            unRead: 0,
            userId: currentUserId,
          };

          let currentPathname = window.location.pathname;

          let currentTabTitle = "";

          if (currentPathname.includes("admins")) {
            currentTabTitle = currentPathname.split("/")[3] || "";
          } else {
            currentTabTitle = currentPathname.split("/")[4] || "";
          }

          updateUnReadCountCb(payload, currentTabTitle);

          // updateMessageUnReadCount()();
        } else {
          CurrentChannelData["unReadCount"] =
            (CurrentChannelData["unReadCount"] || 0) + 1;
        }

        // console.log(isChannelActive);
      } else {
        // make the message unread by default
        // const tempMembers = [...(CurrentChannelData.members || [])].map(
        //   (data) => ({
        //     ...data,
        //     unReadCount:
        //       data.userId !== author
        //         ? (data.unReadCount || 0) + 1
        //         : data.unReadCount,
        //   })
        // );
        // CurrentChannelData["members"] = [...tempMembers];
      }
    }

    console.log(CurrentChannelData);

    return { ...CurrentChannelData };
  });

  // console.log(tempChannelData, channelData);

  tempChannelData = tempChannelData.sort((channel1, channel2) => {
    return (
      new Date(channel2?.message?.date_updated || 1950) -
      new Date(channel1?.message?.date_updated || 1950)
    );
  });

  return [...tempChannelData];
};

export const updateMessageUnReadCount = (payload, currentTab) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    // api()
    const { updateUnReadCount } = TrainerApi;

    updateUnReadCount.body = payload;

    api({ ...updateUnReadCount })
      .then((data) => {
        console.log(data);
        let sessionTypeData = {
          invited: "invitedSessions",
          upcoming: "upcomingSessions",
          past: "pastSessions",
          admin: "adminMessages",
          requested: "requestedSessions",
          user: "userMessages",
          trainer: "trainerMessages",
        };

        let currentTabDataTitle = sessionTypeData[currentTab];

        const { messagingReducer } = getState();

        let currentTabData = [...(messagingReducer[currentTabDataTitle] || [])];

        console.log(payload, currentTab);

        if (currentTabData?.length > 0) {
          let messageReceivedData = currentTabData.map((channelData) => {
            let tempChannelData = { ...channelData };
            if (channelData?.channelId === payload.channelSid) {
              tempChannelData["unReadCount"] =
                payload.unRead !== 0
                  ? parseInt(tempChannelData["unReadCount"] || 0) + 1
                  : payload.unRead;
            }

            return tempChannelData;
          });

          let reduxData = {
            [currentTabDataTitle]: [...messageReceivedData],
          };

          // console.log(messageReceivedData);

          dispatch({
            type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
            payload: reduxData,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
