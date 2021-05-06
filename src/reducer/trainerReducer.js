import { TrainerActionType } from "service/actionType";

const initialState = {
  query: {
    location: "",
    date: "",
    trainingType: "",
    availability: "",
  },
  details: {},
  data: {},
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case TrainerActionType.updateTrainerDetails:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
