import alertConstants from "../constants/alert.constants";

function success(message) {
  return { type: alertConstants.SUCCESS, payload: message };
}

function error(message) {
  return {
    type: alertConstants.ERROR,
    payload: new Error(message),
    error: true
  };
}

function clear(message) {
  return { type: alertConstants.CLEAR, payload: message };
}
const alertActions = {
  success,
  error,
  clear
};

export default alertActions;
