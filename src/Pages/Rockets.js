import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAction, setReserveAction } from '../store/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  const loadRockets = () => {
    dispatch(getRocketsAction());
  };
  useEffect(() => {
    loadRockets();
  }, []);

  const setReserve = (id) => {
    dispatch(setReserveAction(id));
  };

  return (
    <section className="inner-padding">
      {rockets && rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <div className="rocket-img">
            <img src={rocket.flickr_images} alt="rocket" />
          </div>
          <div className="rocket-info">
            <h1>{rocket.rocket_name}</h1>
            <p>{rocket.description}</p>
            <div className="button-div">
              <button className={!rocket.reserved ? 'reserve-btn' : 'cancel-reserve-btn'} onClick={() => setReserve(rocket.id)} type="button">{!rocket.reserved ? 'Reserve' : 'Cancel Reserve'}</button>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
