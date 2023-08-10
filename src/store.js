import { createStore } from 'redux';
import todoReducer from './redux/reducers';

const store = createStore(todoReducer);

export default store;
