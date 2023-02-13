import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getDetails from '../../redux/actions/getDetails';
import Header from '../../components/Header/Header';

function PokemonDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { details, isLoading } = useSelector(
    (state) => state.detailsReducer,
  );
  useEffect(() => {
    dispatch(getDetails(name));
  }, [name]);
  if (isLoading) { return <div>Loading...</div>; }
  console.log(details);
  return (
    <div>
      <Header />
      <div>
        Hello World
      </div>
    </div>
  );
}

export default PokemonDetails;
