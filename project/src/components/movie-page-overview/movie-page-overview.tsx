import { FilmData } from '../../types/film';
import { createMovieLevel } from '../../utils/utils';

type MoviePageOverviewProps = {
    film: FilmData;
}

export function MoviePageOverview({film}: MoviePageOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{createMovieLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring} and other</strong></p>
      </div>
    </>
  );
}
