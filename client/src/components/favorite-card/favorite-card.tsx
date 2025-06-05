type FavoriteCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium?: boolean;
  previewImage: string;
};

export function FavoriteCard({
  id,
  title,
  type,
  price,
  rating,
  isPremium = false,
  previewImage,
}: FavoriteCardProps): JSX.Element {
  const ratingPercent = `${(Math.round(rating) / 5) * 100}%`;
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <article className="favorites__card place-card" data-id={id}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>

      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>

        <p className="place-card__type">{capitalizedType}</p>
      </div>
    </article>
  );
}
