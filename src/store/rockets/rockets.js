/* eslint-disable no-case-declarations */
import axios from 'axios';

const GET_ROCKETS = 'space-trevelers-hub/rockets/GET_ROCKETS';
const SET_ROCKETS = 'space-travelers-hub/rockets/SET_ROCKETS';
const SET_RESERVES = 'space-travelers-hub/rockets/SET_RESERVES';
const ERROR_ROCKETS = 'space-travelers-hub/rockets/ERROR_ROCKETS';

const initialState = { rockets: null };

export const getRocketsAction = () => async (dispatch) => {
  const baseUrl = 'https://api.spacexdata.com/v3/rockets';
  try {
    dispatch({ type: GET_ROCKETS });
    const newRocketList = [];
    const { data } = await axios.get(`${baseUrl}`);
    data.map((item) => {
      const rocketObj = {
        id: item.id,
        rocket_name: item.rocket_name,
        description: item.description,
        flickr_images: item.flickr_images[0],
      };
      return newRocketList.push(rocketObj);
    });
    dispatch({ type: SET_ROCKETS, payload: newRocketList });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};

export const setReserveAction = (rocketId) => (dispatch) => {
  try {
    dispatch({ type: SET_RESERVES, payload: rocketId });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};

export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS:
      return state;
    case SET_ROCKETS:
      return { ...state, rockets: action.payload };
    case SET_RESERVES:
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets: newState };
    default:
      return state;
  }
}
