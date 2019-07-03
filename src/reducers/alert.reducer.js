import alertConstants from "../constants/alert.constants";

export default function alert(state = {}, action) {
  // if (!action) return state;
  // console.log("alert.reducer > state is $1 and actioan is $2", state, action); // eslint-disable-line no-console
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: "alert-success",
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: "alert-danger",
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
