const GET_MISSIONS = 'space-trevelers-hub/missions/GET_MISSIONS';

const initialState = [];

const GetMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const MissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state.concat(action.payload)];
    default:
      return state;
  }
};

export { GetMissions, MissionReducer };
