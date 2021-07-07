import { MessagingActionType } from "../service/actionType";

const initialState = {
  clientData: {},
  activeChannel: {},
  activeChannelMessages: [],
  typingMembers: [],
  chatClientInstance: null,
  currentChannelMembers: [],
  channelData: {},
  pastSessions: [],
  upcomingSessions: [],
  adminMessages: [],
  invitedSessions: [],
  isLoading: false,
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case MessagingActionType.UPDATE_CLIENT_INSTANCE:
      return {
        ...state,
        chatClientInstance: payload,
      };
    case MessagingActionType.INITIALIZE_CLIENT:
      return {
        ...state,
        clientData: payload,
      };
    case MessagingActionType.UPDATE_CHANNEL_DETAILS:
      return {
        ...state,
        activeChannel: payload,
      };
    case MessagingActionType.UPDATE_MESSAGE_DETAILS:
      return {
        ...state,
        activeChannelMessages: !!state.activeChannelMessages
          ? [...state.activeChannelMessages, payload]
          : [payload],
      };
    case MessagingActionType.UPDATE_MESSAGING_DETAILS:
      return {
        ...state,
        ...payload,
      };
    case MessagingActionType.RESET_CHANNEL_DETAILS:
      return {
        ...state,
        activeChannel: {},
        activeChannelMessages: [],
        typingMembers: [],
        currentChannelMembers: [],
        channelData: {},
      };
    default:
      return state;
  }
};
