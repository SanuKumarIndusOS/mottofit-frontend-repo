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

export const initClientDispatch = () => (dispatch, getState) => {
  dispatch({
    type: MessagingActionType.UPDATE_CLIENT_INSTANCE,
    payload: new ChatClientInstance(dispatch, getState),
  });
};
