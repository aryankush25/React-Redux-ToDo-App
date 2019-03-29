import { applyMiddleware, createStore } from "redux";
import todos from "../reducers/reducers.js";
import logger from "redux-logger";

export const store = createStore(todos, applyMiddleware(logger));
