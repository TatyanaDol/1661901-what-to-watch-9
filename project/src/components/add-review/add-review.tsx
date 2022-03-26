import AddReviewForm from './add-review-form';
import {useParams} from 'react-router-dom';
import ReviewsList from './reviews-list';
import {useAppSelector} from '../../hooks/index';
import {FilmCardNavigation} from '../film-card-navigation/film-card-navigation';
import { FilmCardNavigationItems } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';


function AddReview (): JSX.Element {

  const {filmReviews, isFilmReviewsDataLoaded, openedFilm} = useAppSelector(({DATA}) => DATA);

  const params = useParams();

  return (
    <>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={openedFilm?.posterImage} alt={openedFilm?.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <FilmCardNavigation filmId={Number(params.id)} activeLink={FilmCardNavigationItems.Reviews}/>

            <div className="film-card__reviews film-card__row">

              {!isFilmReviewsDataLoaded ? <LoadingScreen /> :
                <ReviewsList reviews={filmReviews}/>}
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
        <AddReviewForm filmId={Number(params.id)} />
      </div>


    </>
  );
}

export default AddReview;
