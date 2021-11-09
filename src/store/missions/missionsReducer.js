import { combineReducers } from 'redux';

/* eslint-disable no-case-declarations */
const GET_MISSIONS = 'space-trevelers-hub/missions/GET_MISSIONS';
const JOIN_MISSIONS = 'space-trevelers-hub/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'space-trevelers-hub/missions/LEAVE_MISSIONS';

const initialState = [];

const GetMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const JoinMissions = (missionId) => ({
  type: JOIN_MISSIONS,
  payload: missionId,
});

const LeaveMissions = (payload) => ({
  type: LEAVE_MISSIONS,
  payload,
});

const MissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state.concat(action.payload)];
    case JOIN_MISSIONS:
      console.log(combineReducers);
      const newState = state.missions.map((mission) => {
        // if (mission.mission_id !== action.payload) { return mission; }
        // return { ...mission, reserved: true };
        console.log(mission);
        return state;
      });
      console.log(newState);
      return state;
    case LEAVE_MISSIONS:
      return [...state.filter((mission) => mission.mission_id !== action.payload.mission_id)];
    default:
      return state;
  }
};

export {
  GetMissions, JoinMissions, LeaveMissions, MissionReducer,
};
