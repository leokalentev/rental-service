import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { AppRoute, CITIES_LOCATION } from '../../const';
import { CityOffer } from '../../types/offer';

type CitiesListProps = {
  selectedCity?: CityOffer;
};

export function CitiesList({ selectedCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => dispatch(changeCity(city))}
        >
          <Link
            to={AppRoute.Main}
            className={`locations__item-link tabs__item ${
              city.name === selectedCity?.name ? 'tabs__item--active' : ''
            }`}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
