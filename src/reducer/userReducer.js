import { UserActionType } from "service/actionType";

const initialState = {
  data: "",
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case UserActionType.updateUserDetails:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
