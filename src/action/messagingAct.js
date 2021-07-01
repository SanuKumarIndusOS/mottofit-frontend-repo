import { MessagingActionType } from "../service/actionType";
import ChatClientInstance from "../helpers/Messaging";

export const updatePersonTyping = (payload) => (dispatch, getState) => {
  const { typingMembers, currentChannelMembers } = getState().messagingReducer;
  const { type, participant } = payload;
  let { identity } = participant.state;
  let tempMembers = typingMembers;

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
    individualMessages,
    socialMessages,
    adminMessages,
  } = getState().messagingReducer;

  let tempIndividualClient = [...individualMessages];
  let tempSocialGroup = [...socialMessages];
  let tempAdminList = [...adminMessages];
  const currentIndividualChannel = handleChannelMessage(
    tempIndividualClient,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentSocialChannel = handleChannelMessage(
    tempSocialGroup,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );
  const currentAdminChannel = handleChannelMessage(
    tempAdminList,
    currentMesasgedChannelId,
    currentMesasge,
    currentMesasgeAuthor
  );

  let currentAllChannel = [
    ...individualMessages,
    ...socialMessages,
    ...adminMessages,
  ].sort((channel1, channel2) => {
    return (
      new Date(channel2?.message?.date_updated || 1950) -
      new Date(channel1?.message?.date_updated || 1950)
    );
  });

  let payload = {
    individualMessages: currentIndividualChannel,
    socialMessages: currentSocialChannel,
    adminMessages: currentAdminChannel,
    allMessages: currentAllChannel,
  };

  let messageLeftDOMs = document.getElementsByClassName("message_left");
  [...messageLeftDOMs]?.forEach((dom) => dom?.scrollTo(0, 0));
  dispatch({
    type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
    payload,
  });
};

export const initClientDispatch = (callback) => (dispatch, getState) => {
  dispatch({
    type: MessagingActionType.UPDATE_CLIENT_INSTANCE,
    payload: new ChatClientInstance(dispatch, getState, callback),
  });
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
