import { useParams } from "react-router-dom";
import { FullOffer } from "../../types/offer";
import { Logo } from "../../components/logo/logo";
import NotFoundPage from "../not-found-page/not-found-page";
import { CommentForm } from "../../components/comment-form/comment-form";

type OfferProps = {
  offers: FullOffer[];
};

export function OfferPage({ offers }: OfferProps): JSX.Element {
  const params = useParams<{ id: string }>();
  const offerId = params.id ?? "";
  const offer = offers.find((item) => item.id === offerId);

  if (!offer) {
    return <NotFoundPage />;
  }

  const ratingPercent = `${(Math.round(offer.rating) / 5) * 100}%`;
  const capitalizedType =
    offer.type.charAt(0).toUpperCase() + offer.type.slice(1);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Offer" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: ratingPercent }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizedType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedroom{offer.bedrooms > 1 ? "s" : ""}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max&nbsp;{offer.maxAdults} adult
                  {offer.maxAdults > 1 ? "s" : ""}
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&#47;&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper user__avatar-wrapper ${
                      offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                    }`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {offer.description.split("\n").map((p) => (
                    <p className="offer__text" key={p}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews&nbsp;&middot;&nbsp;
                  <span className="reviews__amount">0</span>
                </h2>
                <CommentForm />
              </section>
            </div>
          </div>
        </section>

        <section className="offer__map map"></section>
      </main>
    </div>
  );
}
