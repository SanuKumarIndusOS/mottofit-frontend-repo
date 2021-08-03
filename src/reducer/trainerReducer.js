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
  key:{}
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case TrainerActionType.updateTrainerDetails:
      return {
        ...state,
        ...payload,
      };
    case TrainerActionType.searchKey:
      return {
        ...state,
         key: payload,
      };

    default:
      return state;
  }
};
