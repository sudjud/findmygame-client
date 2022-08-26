import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPlaygrounds } from '../../features/playgroundSlice';

const Playground = () => {
 const {id} = useParams();
 const dispatch = useDispatch();
 const plays = useSelector((state) => state.playground.playgrounds);
 const playground = useSelector((state) => state.playground.find((item) => item._id === id))

 useEffect(() => {
  dispatch(fetchPlaygrounds());
 }, [dispatch])
  return (
    <div>
      {id}
    </div>
  );
};

export default Playground;