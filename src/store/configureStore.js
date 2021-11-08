import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketsReducer from './rockets/rockets';

const reducers = combineReducers({
  rockets: rocketsReducer,
});

const middlwares = [thunk, logger];

const configureStore = createStore(
  reducers,
  applyMiddleware(composeWithDevTools(...middlwares)),
);

export default configureStore;
