import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types";

export const emailChanged = text => {
  return {
    // Action is a plain javascript object that returns object
    // that has a type property of string
    type: EMAIL_CHANGED,
    payload: text
  };
};
