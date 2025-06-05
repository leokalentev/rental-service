import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
};

export function CitiesCard({
  id,
  title,
  type,
  price,
  isPremium,
  previewImage,
  rating,
}: CitiesCardProps): JSX.Element {
  const [, setOfferId] = useState<string>("");

  const ratingPercent = `${(Math.round(rating) / 5) * 100}%`;
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <article
      className="cities__card place-card"
      data-id={id}
      onMouseOver={() => setOfferId(id)}
      onMouseOut={() => setOfferId("")}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <Link to={`${AppRoute.Offer}/${id}`}>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
      </Link>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{capitalizedType}</p>
      </div>
    </article>
  );
}
