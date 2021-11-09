import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAction } from '../store/rockets/rockets';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets) {
      dispatch(getRocketsAction());
    }
  }, []);

  return (
    <section className="my-profile inner-padding">
      <div className="missions-container">
        <h1>My Missions</h1>
        <ul className="list-container">
          <li>mission</li>
          <li>mission</li>
          <li>mission</li>
        </ul>
      </div>
      <div className="rockets-container">
        <h1>My Rockets</h1>
        <ul className="list-container">
          {rockets
            && rockets
              .filter((rocket) => rocket.reserved)
              .map((filtered) => (<li key={filtered.id}>{filtered.rocket_name}</li>))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
