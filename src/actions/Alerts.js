import { GET_ERRORRS, CLEAR_ERRORS } from "../constants/index";

export const returnErrors = (message, status, type) => {
    return {
        type: GET_ERRORRS,
        payload: {
            message,
            status,
            type
        }
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};
