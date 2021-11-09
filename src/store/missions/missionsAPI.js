import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const FetchMission = async () => {
  const missionAPIData = [];
  const response = await axios.get(baseURL);
  const responseData = response.data;

  responseData.map((item) => {
    const missionObj = {
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    };

    return missionAPIData.push(missionObj);
  });
  return missionAPIData;
};

export default FetchMission;
