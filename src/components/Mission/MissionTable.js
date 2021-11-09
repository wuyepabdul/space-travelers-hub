import React from 'react';
import MissionDetails from './MissionDetails';

const MissionTable = () => {
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
      <MissionDetails />
    </table>
  );
};

export default MissionTable;
