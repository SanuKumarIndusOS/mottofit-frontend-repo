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
  key:{},
  searchFilterParams:{}
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case TrainerActionType.updateTrainerDetails:
      return {
        ...state,
        ...payload,
      };
    case TrainerActionType.trainerSearchFilters:
      return {
        ...state,
        searchFilterParams: payload,
      };

    default:
      return state;
  }
};
