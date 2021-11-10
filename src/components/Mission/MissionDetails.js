import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FetchMission from '../../store/missions/missionsAPI';
import { GetMissions, JoinMissions, LeaveMissions } from '../../store/missions/missionsReducer';

const MissionDetails = () => {
  const MissionStore = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    FetchMission()
      .then((response) => dispatch(GetMissions(response)));
  }, []);

  const handleJoinMission = (id) => {
    dispatch(JoinMissions(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(LeaveMissions(id));
  };

  const details = MissionStore.map((mission) => (
    <tr key={mission.mission_id}>
      <td className="missionName">{mission.mission_name}</td>
      <td className="missionDescription">{mission.description}</td>
      <td className="missionStatus">
        {!mission.reserved ? (
          <button className="statusButton" type="button">NOT A MEMBER</button>
        ) : (
          <button className="activeStatusButton" type="button"> ACTIVE MEMBER</button>
        )}
      </td>
      <td className="missionJoin">
        {!mission.reserved ? (
          <button
            onClick={() => handleJoinMission(mission.mission_id)}
            type="button"
            className="joinButton"
          >
            Join Mission
          </button>
        ) : (
          <button
            onClick={() => handleLeaveMission(mission.mission_id)}
            type="button"
            className="leaveButton"
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <tbody>
      {details}
    </tbody>
  );
};

export default MissionDetails;
