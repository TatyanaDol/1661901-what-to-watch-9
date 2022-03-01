import {ReviewData} from '../../moks/films';

type ReviewProps = {
    review: ReviewData;

  }

function Review({review}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{review.reviewAuthor}</cite>
          <time className="review__date" dateTime="2016-12-24">{review.reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}


export default Review;


