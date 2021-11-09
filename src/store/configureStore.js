import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketsReducer from './rockets/rockets';
import { MissionReducer } from './missions/missionsReducer';

const reducers = combineReducers({
  rockets: rocketsReducer,
  missions: MissionReducer,
});

const middlwares = [thunk];

const configureStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlwares)),
);

export default configureStore;
