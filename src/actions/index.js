import firebase from "firebase";
import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types";

export const emailChanged = text => {
  return {
    // Action is a plain javascript object that returns object
    // that has a type property of string
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: user
        });
      });
  };
};
