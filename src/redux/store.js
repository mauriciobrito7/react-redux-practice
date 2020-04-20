// funciones para crear store y aplicar middleware
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlwares = [logger];
/*Recibe dos parametros
-Función reductora
-Middlewares
*/
const store = createStore(rootReducer, applyMiddleware(...middlwares));

export default store;