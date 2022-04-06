
import { ReviewData } from '../../types/film';
import Review from '../review/review';

type ReviewsListProps = {
    reviews: ReviewData[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {

  if(reviews.length > 1) {

    const firstColReviews = [...reviews];

    const centerIndex = Math.trunc(reviews.length/ 2);

    const secondColReviews  = firstColReviews.splice(centerIndex);

    return (
      <>
        <div className="film-card__reviews-col">
          {firstColReviews.map((review) => <Review key={review.id} review={review} />)}
        </div>
        <div className="film-card__reviews-col">
          {secondColReviews.map((review) => <Review key={review.id} review={review} />)}
        </div>
      </>
    );
  }

  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </div>

  );

}

export default ReviewsList;

