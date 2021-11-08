import axios from 'axios';

const GET_ROCKETS = 'space-trevelers-hub/rockets/GET_ROCKETS';
const SET_ROCKETS = 'space-travelers-hub/rockets/SET_ROCKETS';
const ERROR_ROCKETS = 'space-travelers-hub/rockets/ERROR_ROCKETS';

const initialState = [];

export const getRocketsAction = () => async (dispatch) => {
  const baseUrl = 'https://api.spacexdata.com/v3/rockets';
  try {
    dispatch({ type: GET_ROCKETS });
    const rockets = await axios.get(`${baseUrl}`);
    console.log(rockets);
    dispatch({ type: SET_ROCKETS, payload: rockets });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};

export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS:
      return state;
    case SET_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
}
