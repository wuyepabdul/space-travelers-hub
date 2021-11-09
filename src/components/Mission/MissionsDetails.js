const missionDetails = [
  {
    id: 1,
    mission: 'Thaicom',
    description:
      'The Missions section displays a list of current missions along with their brief description and participation status.There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.',
    status: false,
    join: false,
  },
  {
    id: 2,
    mission: 'Telstar',
    description:
      'The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.',
    status: true,
    join: false,
  },
  {
    id: 3,
    mission: 'Iridium Next',
    description:
      'The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.',
    status: false,
    join: false,
  },
];

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

export { missionDetails, columns };
