export const emailChanged = text => {
  return {
    // Action is a plain javascript object that returns object
    // that has a type property of string
    type: "email_changed",
    payload: text
  };
};
