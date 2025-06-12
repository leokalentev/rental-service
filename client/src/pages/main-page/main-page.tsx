import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { CityOffer, OffersList } from '../../types/offer';
import { getOffersListByCity, sortOffersByType } from '../../utils';
import { Logo } from '../../components/logo/logo';
import { CitiesList } from '../../components/cities-list/cities-list';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import Map from '../../components/map/map';
import SortOptions from '../../components/sort-options/sort-options';
import { SortOffer } from '../../types/sort';

export function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city)!;
  const allOffers = useAppSelector((state) => state.offers);

  const selectedCityOffers = getOffersListByCity(selectedCity.name, allOffers);
  const rentalOffersCount = selectedCityOffers.length;

  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
  const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

  const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(undefined);
  const handleCardHover = (offer: OffersList) => setSelectedOffer(offer);
  const handleCardLeave = () => setSelectedOffer(undefined);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              
              <b className="places__found">
                {rentalOffersCount} place{rentalOffersCount !== 1 && 's'} to stay in {selectedCity.name}
              </b>
              <SortOptions
                activeSorting={activeSort}
                onChange={(newSorting) => setActiveSort(newSorting)}
              />
              <CitiesCardList
                offersList={sortedOffers}
                onCardHover={handleCardHover}
                onCardLeave={handleCardLeave}
              />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={selectedCity}
                  offers={sortedOffers}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
