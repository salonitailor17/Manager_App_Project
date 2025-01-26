import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import { taskListReducer } from './reducers/app/taskReducer';

const rootReducer = combineReducers({
  taskListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
