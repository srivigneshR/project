import { GET_POSTS, POST_LOADING, ADD_POST, DELETE_POST } from "../constants/index";

const initState = {
    posts: [],
    isLoading: false
};

export default function (state = initState, action) {
    const { type, payload } = action;
    switch (type) {

        case POST_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case GET_POSTS:
            return {
                posts: [...payload],
                isLoading: false
            }

        case ADD_POST:
            return state;

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post._id !== payload._id)]
            }

        default:
            return state;
    }
}
