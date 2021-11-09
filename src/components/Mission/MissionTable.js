import { missionDetails, columns } from './MissionsDetails';

const MissionTable = () => {
  const details = missionDetails.map((mission) => (
    <tr key={mission.id}>
      <td className="missionName">{mission.mission}</td>
      <td className="missionDescription">{mission.description}</td>
      <td className="missionStatus">
        <button className="statusButton" type="button">NOT A MEMBER</button>
      </td>
      <td className="missionJoin">
        <button type="button" className="joinButton">Join Mission</button>
      </td>
    </tr>
  ));

  return (
    <table className="mission-table">
      <tr>
        {columns.map((column) => (
          <th key={column.accessor} className={column.name}>
            {column.Header}
          </th>
        ))}
      </tr>
      {details}
    </table>
  );
};

export default MissionTable;
