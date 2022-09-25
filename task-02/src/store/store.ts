import { applyMiddleware, createStore } from 'redux';
import { rootReduser } from '../reducers/index';
import thank from 'redux-thunk';

export const store = createStore(rootReduser, applyMiddleware(thank))