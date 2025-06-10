import { Review, ReviewData } from '../review/review';

type ReviewsListProps = {
  reviews: ReviewData[];
};

export function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews&nbsp;&middot;&nbsp;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((rv) => (
          <Review key={rv.id} review={rv} />
        ))}
      </ul>
    </section>
  );
}
