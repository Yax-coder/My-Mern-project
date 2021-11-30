import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_PROFILE, LOGOUT } from "./types";
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

// load user

export const url = 'http://localhost:5000/api'

// Load User
export const loadUser = () => async dispatch => {
     if (localStorage.token) {
          setAuthToken(localStorage.token);
     }

     try {
          const res = await axios.get(`${url}/auth`);

          dispatch({
               type: USER_LOADED,
               payload: res.data
          });
     } catch (err) {
          dispatch({
               type: AUTH_ERROR
          });

     }
};

// reg user
export const register = ({ name, email, password }) => async dispatch => {
     const config = {
          headers: {
               "Content-Type": "application/json"
          }
     }
     const body = JSON.stringify({ name, email, password })
     try {
          const res = await axios.post(`${url}/users`, body, config);
          dispatch({
               type: REGISTER_SUCCESS,
               payload: res.data
          })
          dispatch(loadUser());
     } catch (err) {
          const errors = err.response.data.errors;
          if (errors) {
               errors.forEach(err => dispatch(setAlert(`${err.msg}`, 'bg-red-100 border-red-400')))
          }
          dispatch({
               type: REGISTER_FAIL
          })
     }
}

// Login User
export const login = (email, password) => async dispatch => {
     const config = {
          headers: {
               'Content-Type': 'application/json'
          }
     };

     const body = JSON.stringify(email, password);

     try {
          const res = await axios.post(`${url}/auth`, body, config);

          dispatch({
               type: LOGIN_SUCCESS,
               payload: res.data
          });

          dispatch(loadUser());
     } catch (err) {
          const errors = err.response.data.errors;

          if (errors) {
               errors.forEach(err => dispatch(setAlert(`${err.msg}`, 'bg-red-100 border-red-400')))
          }

          dispatch({
               type: LOGIN_FAIL
          });
     }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
     dispatch({ type: CLEAR_PROFILE });
     dispatch({ type: LOGOUT });
};