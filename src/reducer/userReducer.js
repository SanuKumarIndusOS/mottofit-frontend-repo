import { UserActionType } from "service/actionType";

const initialState = {
  data: "",
  sessionData: {},
  bookingData: {},
  selectedTrainerData: {},
  selectedTimes: [],
  defaulCardDetails: {},
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case UserActionType.updateUserDetails:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
