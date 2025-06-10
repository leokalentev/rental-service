import { OffersList } from '../../types/offer';
import { CitiesCard } from '../cities-card/cities-card';

export type CitiesCardListProps = {
  offersList: OffersList[];
  onCardHover?: (offer: OffersList) => void;
  onCardLeave?: () => void;
};

export function CitiesCardList({
  offersList,
  onCardHover,
  onCardLeave,
}: CitiesCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => onCardHover?.(offer)}
          onMouseLeave={onCardLeave}
        >
          <CitiesCard
            id={offer.id}
            title={offer.title}
            type={offer.type}
            price={offer.price}
            previewImage={offer.previewImage}
            isPremium={offer.isPremium}
            rating={offer.rating}
          />
        </div>
      ))}
    </div>
  );
}