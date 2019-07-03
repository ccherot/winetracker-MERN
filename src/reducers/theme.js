export default function theme(state = "darkblue", action) {
  switch (action.type) {
    case "CHANGE_THEME":
      console.log("reducers > theme > CHANGE_THEME: ", action.payload);
      return action.payload;
    default:
      return state;
  }
}
