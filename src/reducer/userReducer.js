import { UserActionType } from "service/actionType";

const initialState = {
  data: "",
  sessionData: {},
  bookingData: {},
  selectedTrainerData: {},
  selectedTimes: [],
  defaulCardDetails: {},
  submittedData: {},
  currentAcceptedInvitationId: "",
  nextAction: null,
  isModelOpen: false,
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case UserActionType.updateUserDetails:
      return {
        ...state,
        ...payload,
      };
    case UserActionType.restUserDetails:
      return {
        data: "",
        sessionData: {},
        bookingData: {},
        selectedTrainerData: {},
        selectedTimes: [],
        defaulCardDetails: {},
      };
    default:
      return state;
  }
};
