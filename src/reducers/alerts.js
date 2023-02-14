import { CLEAR_ERRORS, GET_ERRORRS } from '../constants/index';

const initState = {
    message: null,
    status: null,
    type: null
}

export default function (state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ERRORRS:
            return {
                message: payload.message,
                status: payload.status,
                type: payload.type
            }

        case CLEAR_ERRORS:
            return {
                message: null,
                status: null,
                type: null
            };

        default:
            return state;
    }
}
