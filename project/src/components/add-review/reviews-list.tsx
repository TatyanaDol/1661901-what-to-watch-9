

import {ReviewData} from '../../moks/films';
import Review from './review';

type ReviewsListProps = {
    reviews: ReviewData[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {

  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => <Review key={review.reviewId} review={review} />)}
    </div>
  );

}

export default ReviewsList;

