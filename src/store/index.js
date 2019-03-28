import {createStore} from 'redux';
import todos from '../reducers/reducers.js';


export const store = createStore(
    todos
);