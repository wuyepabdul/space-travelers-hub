import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FetchMission from '../../store/missions/missionsAPI';
import { GetMissions } from '../../store/missions/missionsReducer';

const MissionTable = () => {
  const MissionStore = useSelector((store) => store.MissionReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    FetchMission()
      .then((response) => dispatch(GetMissions(response)));
  }, []);

  const details = MissionStore.map((mission) => (
    <tr key={mission.mission_id}>
      <td className="missionName">{mission.mission_name}</td>
      <td className="missionDescription">{mission.description}</td>
      <td className="missionStatus">
        <button className="statusButton" type="button">NOT A MEMBER</button>
      </td>
      <td className="missionJoin">
        <button type="button" className="joinButton">Join Mission</button>
      </td>
    </tr>
  ));

  const columns = [
    {
      Header: 'Mission',
      accessor: 'mission',
      name: 'mission-title',
    },
    {
      Header: 'Description',
      accessor: 'description',
      name: 'mission-description',
    },
    {
      Header: 'Status',
      accessor: 'status',
      name: 'mission-status',
    },
    {
      Header: ' ',
      accessor: 'join',
      name: 'mission-join',
    },
  ];

  return (
    <table className="mission-table">
      <tbody>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className={column.name}>
              {column.Header}
            </th>
          ))}
        </tr>
      </tbody>
      <tbody>
        {details}
      </tbody>
    </table>
  );
};

export default MissionTable;
