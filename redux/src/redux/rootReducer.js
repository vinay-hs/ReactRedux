import { combineReducers  } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";
import userReducer from "./user/userReducer"

const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:IcecreamReducer,
    user:userReducer
})
export default rootReducer