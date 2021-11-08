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
    <div>
      {rockets && rockets.map((rocket) => (
        <li key={rocket.id}>
          {rocket.description}
          {' '}
          <br />
          <br />
          <br />
        </li>

      ))}
      {/* {rockets ? console.log('rockets', rockets) : console.log('no rockets', rockets)} */}
    </div>
  );
};

export default Rockets;
