import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAction } from '../store/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  const loadRockets = () => {
    dispatch(getRocketsAction());
  };
  useEffect(() => {
    loadRockets();
  }, []);

  return (
    <section>
      {rockets && rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <div className="rocket-img">
            <img src={rocket.flickr_images[0]} alt="rocket" />
          </div>
          <div className="rocket-info">
            <h1>{rocket.rocket_name}</h1>
            <p>{rocket.description}</p>
            <div className="button-div">
              <button type="button">Reserve Rocket</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
