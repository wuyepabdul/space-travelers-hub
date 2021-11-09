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

const LeaveMissions = (missionId) => ({
  type: LEAVE_MISSIONS,
  payload: missionId,
});

const MissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state.concat(action.payload)];
    case JOIN_MISSIONS:
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    case LEAVE_MISSIONS:
      const leaveState = state.map((mission) => {
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      console.log(leaveState);
      return leaveState;
    default:
      return state;
  }
};

export {
  GetMissions, JoinMissions, LeaveMissions, MissionReducer,
};
