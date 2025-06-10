export type ReviewData = {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  rating: number;       
  comment: string;
  date: string;          
};

type ReviewProps = {
  review: ReviewData;
};

export function Review({ review }: ReviewProps): JSX.Element {
  const dateObj = new Date(review.date);
  const formattedDate = dateObj.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  const ratingPercent = `${(Math.round(review.rating) / 5) * 100}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}