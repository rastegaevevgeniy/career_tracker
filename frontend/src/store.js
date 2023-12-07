import { createStore } from 'redux';
import modalReducer from './reducer';

const store = createStore(modalReducer);

export default store;