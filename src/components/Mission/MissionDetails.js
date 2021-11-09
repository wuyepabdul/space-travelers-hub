import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { JoinMissions, LeaveMissions } from '../../store/missions/missionsReducer';

const MissionDetails = () => {
  const MissionStore = useSelector((store) => store.missions);

  const dispatch = useDispatch();

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
        <button className="statusButton" type="button">
          NOT A MEMBER
        </button>
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
            className="joinButton"
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
