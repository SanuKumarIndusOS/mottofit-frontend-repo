import {
    TrainerCaptureActionType,
    TrainerCaptureSetupActionType,
} from "service/actionType";

const initialState = {
    query: {
        location: "",
        date: "",
        trainingType: "",
        availability: "",
    },
    details: {},
    cardData: {},
    setupData: {},
};

export default (state = ({}, initialState), { type, payload }) => {
    switch (type) {
        case TrainerCaptureActionType.CAPTURE_TRAINER_CARD:
            return { ...state, cardData: payload };
        case TrainerCaptureSetupActionType.CAPTURE_TRAINER_SETUP:
            return { ...state, setupData: payload };

        default:
            return state;
    }
};
