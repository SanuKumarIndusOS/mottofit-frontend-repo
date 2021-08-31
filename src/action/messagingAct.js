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
  getState
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
  } = getState().messagingReducer;

  let tempPastSessions = [...pastSessions];
  let tempUpcomingSessions = [...upcomingSessions];
  let tempInvitedSessions = [...invitedSessions];
  let tempAdminSession = [...adminMessages];
  let tempRequestedSessions = [...requestedSessions];
  let tempUserMessages = [...userMessages];
  let tempTrainerMessages = [...trainerMessages];
  const currentPastSessions = handleChannelMessage(
    tempPastSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentUpcomingSessions = handleChannelMessage(
    tempUpcomingSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentRequestedSessions = handleChannelMessage(
    tempRequestedSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentInvitedSessions = handleChannelMessage(
    tempInvitedSessions,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );

  const currentAdminSessions = handleChannelMessage(
    tempAdminSession,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentUserMessages = handleChannelMessage(
    tempUserMessages,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentTrainerMessages = handleChannelMessage(
    tempTrainerMessages,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
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
  author
) => {
  let tempChannelData = [...channelData].map((data) => {
    let CurrentChannelData = { ...data };

    if (data?.channelId === currentMesasgedChannelId) {
      if (!Object.keys(CurrentChannelData).includes("message"))
        CurrentChannelData["message"] = {};

      CurrentChannelData["message"]["body"] = currentMesasge;
      CurrentChannelData["message"]["date_updated"] = new Date().toISOString();
      CurrentChannelData["message"]["from"] = author;
    }

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

export const updateMessageUnReadCount = (payload) => (
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
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
