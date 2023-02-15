import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import convert from 'convert-units';
import getDetails from '../../redux/actions/getDetails';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PokemonDetails.module.scss';

// gen1 pokedex weight format: 15.0 lb
const convertWeight = (hectogram) => {
  const hectogramToKilogram = 10;
  return `${Math.round(
    convert(hectogram / hectogramToKilogram)
      .from('kg')
      .to('lb'),
  ).toFixed(1)} lb`;
};

const formatHeight = (feet) => {
  const [integerFeet, fractionFeet] = feet.split('.');
  const inches = Math.round(
    convert(Number(fractionFeet) / 100)
      .from('ft')
      .to('in'),
  );
  const doubleDigits = 10;
  const formattedInches = inches < doubleDigits ? `0${inches}` : `${inches}`;
  const oneFoot = 12;
  const areInchesOneFoot = Number(formattedInches) === oneFoot;
  const displayInches = areInchesOneFoot ? '00' : formattedInches;
  const displayFeet = areInchesOneFoot ? Number(integerFeet) + 1 : integerFeet;
  return `${displayFeet}' ${displayInches}"`;
};

// gen1 pokedex height format: 7' 04";
const convertHeight = (decimeters) => {
  const meterToDecimeter = 10;
  const feet = convert(decimeters / meterToDecimeter)
    .from('m')
    .to('ft-us')
    .toFixed(2);
  return formatHeight(feet);
};

const zeroFill = (number) => {
  const maxIntegerDigits = -3;
  return `00${number}`.slice(maxIntegerDigits);
};

function PokemonDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { details, isLoading } = useSelector((state) => state.detailsReducer);
  useEffect(() => {
    dispatch(getDetails(name));
  }, [name]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={ styles.container }>
      <Header />
      <section className={ styles['pokedex-container'] }>
        <div className={ styles['image-container'] }>
          <img
            className={ styles['pokemon-image'] }
            src={ details.pictureUrl }
            alt={ `${details.name} generation one sprite` }
          />
          <span>
            <span className={ styles.bold }>No.</span>
            {` ${zeroFill(details.number)}`}
          </span>
        </div>
        <div className={ styles['data-container'] }>
          <span>{details.name?.toUpperCase()}</span>
          <span>
            {details?.genus
              ?.replace('Pokémon', '')
              ?.replace(' ', '')
              ?.toUpperCase()}
          </span>
          <span>
            <span className={ styles.bold }>{'HT '}</span>
            {convertHeight(details.height)}
          </span>
          <span>
            <span className={ styles.bold }>{'WT '}</span>
            {convertWeight(details.weight)}
          </span>
        </div>
        <div className={ styles['text-container'] }>
          <p>{details.flavorText}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PokemonDetails;
