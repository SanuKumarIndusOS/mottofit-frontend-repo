import { MessagingActionType } from "../service/actionType";

export const updatePersonTyping = (payload) => (dispatch, getState) => {
  const { typingMembers } = getState().messagingDetails;
  const { type, participant } = payload;
  let { identity } = participant.state;
  let tempMembers = typingMembers;

  if (type === "typingStarted") {
    if (!typingMembers.includes(identity)) {
      tempMembers = [...typingMembers, identity];

      dispatch({
        type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
        payload: { typingMembers: [...tempMembers] },
      });
    }
  } else if (type === "typingEnded") {
    if (typingMembers.includes(identity)) {
      tempMembers = [...typingMembers].filter((person) => person !== identity);
      dispatch({
        type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
        payload: { typingMembers: [...tempMembers] },
      });
    }
  }
};
