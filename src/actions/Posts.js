import axios from 'axios';
import { GET_POSTS, POST_LOADING, ADD_POST, DELETE_POST } from '../constants/index';
import { returnErrors } from './Alerts'

// Helpers 
import history from '../helpers/history'

const API_URL = process.env.API_URL;

export const getPosts = () => (dispatch) => {

    axios.get(`${API_URL}/posts`).then((res) => {
        dispatch({ type: POST_LOADING });
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    })
        .catch((error) => {
            error.response.data.errors.forEach(err => {
                dispatch(
                    returnErrors(err.msg, error.response.status, 'error')
                );
            })
        });
};


export const addPosts = (post) => (dispatch) => {
    const { title, content } = post;

    const body = {
        title, content
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    axios.post(`${API_URL}/posts`, JSON.stringify(body), { headers }).then(res => {
        dispatch({
            type: ADD_POST
        })
        history.push("/posts");
    }).catch(error => {
        error.response.data.errors.forEach(err => {
            dispatch(
                returnErrors(err.msg, error.response.status, 'error')
            );
        })
    });
}


export const deletePost = (postId) => (dispatch) => {
    axios.delete(`${API_URL}/posts/${postId}`).then(res => {
        dispatch({
            type: DELETE_POST,
            payload: res.data.post._id
        })
        dispatch(getPosts());
    });
}




