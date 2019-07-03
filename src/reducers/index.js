import { combineReducers } from "redux";
// import authentication from "./authentication.reducer";
// import registration from "./registration.reducer";
// import users from "./users.reducer";
// import alert from "./alert.reducer";
import location from "./location";
import theme from "./theme";

export default combineReducers({ location, theme });

// export default combineReducers({ authentication }); // , registration, users, alert
//export default combineReducers({ authentication });
