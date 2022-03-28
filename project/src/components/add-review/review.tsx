import { ReviewData } from '../../types/film';

type ReviewProps = {
    review: ReviewData;

  }

function Review({review}: ReviewProps): JSX.Element {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{new Date(review.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}


export default Review;


