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
  });

  return (
    <section className="my-profile inner-padding">
      <div>
        <h1>My Missions</h1>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <ul className="list-container">
          {rockets && rockets.map((rocket) => (<li key={rocket.id} className="list-item">{rocket.rocket_name}</li>))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
