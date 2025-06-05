import { FavoritesByCity } from "../../types/favorite";
import { FavoriteCard } from "../favorite-card/favorite-card";

type FavoriteCardListProps = {
  favoritesByCity: FavoritesByCity[];
};

export function FavoriteCardList({
  favoritesByCity,
}: FavoriteCardListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {favoritesByCity.map(({ city, offers }) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <FavoriteCard
                key={offer.id}
                id={offer.id}
                title={offer.title}
                type={offer.type}
                price={offer.price}
                rating={offer.rating}
                isPremium={offer.isPremium}
                previewImage={offer.previewImage}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
