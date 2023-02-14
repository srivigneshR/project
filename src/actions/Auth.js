import axios from "axios";
import { returnErrors } from "./Alerts";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from '../constants/index';

// Helpers 
import history from "../helpers/history";

const API_URL = process.env.API_URL;

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios
        .get(`${API_URL}/auth/user`, configHeaders(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: AUTH_ERROR,
            });

        });
};

export const register = ({ email, password }) => (dispatch) => {
    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // Body
    const body = JSON.stringify({ email, password });

    axios
        .post(`${API_URL}/auth/register`, body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });

            dispatch(loadUser());
            history.push("/");
        })
        .catch((error) => {
            error.response.data.errors.forEach(err => {
                dispatch(
                    returnErrors(err.msg, error.response.status, 'error')
                );
            })

            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

export const login = ({ email, password }) => (dispatch) => {
    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // Body
    const body = JSON.stringify({ email, password });

    axios
        .post(`${API_URL}/auth/login`, body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            dispatch(loadUser());
            history.push("/");
        })
        .catch((error) => {
            error.response.data.errors.forEach(err => {
                dispatch(
                    returnErrors(err.msg, error.response.status, 'error')
                );
            })

            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
    });

    history.push("/");
};



export const configHeaders = (getState) => {
    // Token
    const token = getState().auth.token;

    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};
