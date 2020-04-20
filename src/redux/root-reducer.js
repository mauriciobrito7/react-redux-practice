// combinar los reducers
import { combineReducers } from "redux";

import coachReducer from "./coach/coach.reducer";

// reducer raiz
/*vamos a crear nuestro stado con todos los reducers */
export default combineReducers({
    coach: coachReducer,
});