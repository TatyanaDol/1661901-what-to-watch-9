import AddReviewForm from './add-review-form';
import {useParams} from 'react-router-dom';
import ReviewsList from './reviews-list';
import {ReviewData} from '../../moks/films';
import React, {useState} from 'react';
import {useAppSelector} from '../../hooks/index';
import NotFound from '../not-found/not-found';
import {FilmCardNavigation} from '../film-card-navigation/film-card-navigation';
import { FilmCardNavigationItems } from '../../const';

type AddReviewProps = {
  reviews: ReviewData[];
}

type ReviewFormData = {
  rating: number;
  'review-text': string;
}

function AddReview ({reviews}: AddReviewProps): JSX.Element {

  const {allFilms} = useAppSelector(({DATA}) => DATA);

  const params = useParams();
  const film = allFilms.find((element) => element.id === Number(params.id));

  const [reviewsState, setReviewsState] = useState(reviews);

  function pushNewReview (newReview: ReviewFormData) {
    const review: ReviewData = {
      id: reviewsState[reviewsState.length - 1].id + 1,
      comment: newReview['review-text'],
      date: '2000',
      rating: newReview.rating,
      user: {
        id: 333,
        name: '33',
      },
    };
    setReviewsState([...reviewsState, review]);
  }

  if(!film) {

    return (
      <NotFound />
    );
  }

  return (
    <>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <FilmCardNavigation filmId={film.id} activeLink={FilmCardNavigationItems.Reviews}/>

            <div className="film-card__reviews film-card__row">

              <ReviewsList reviews={reviewsState}/>

              <div className="film-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                    <footer className="review__details">
                      <cite className="review__author">Matthew Lickona</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,2</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,6</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm pushNewReviewCb={pushNewReview}/>
      </div>


    </>
  );
}

export default AddReview;
