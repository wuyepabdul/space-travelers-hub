import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAction } from '../store/rockets/rockets';
import FetchMission from '../store/missions/missionsAPI';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!rockets) {
      dispatch(getRocketsAction());
    }
  }, []);

  useEffect(() => {
    if (!missions) {
      dispatch(FetchMission());
    }
  }, []);

  return (
    <section className="my-profile inner-padding">
      <div className="missions-container">
        <h1>My Missions</h1>
        <ul className="list-container">
          {missions
            && missions
              .filter((mission) => mission.reserved)
              .map((picked) => (
                <li key={picked.mission_id}>{picked.mission_name}</li>
              ))}
        </ul>
      </div>
      <div className="rockets-container">
        <h1>My Rockets</h1>
        <ul className="list-container">
          {rockets
            && rockets
              .filter((rocket) => rocket.reserved)
              .map((filtered) => (
                <li key={filtered.id}>{filtered.rocket_name}</li>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
