import { MouseEvent } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FilmData } from '../../types/film';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player';


type SmallMovieCardProps = {
  onMouseOverCb: (id: number) => void;
  movie: FilmData;
  activeMovie: number;
  onMouseOutCb: () => void;
}

function MovieCard({onMouseOverCb, movie, activeMovie, onMouseOutCb}: SmallMovieCardProps): JSX.Element {
  const navigate = useNavigate();

  function handleSmallFilmCardClick(evt: MouseEvent<HTMLImageElement>) {
    evt.preventDefault();
    navigate(`/films/${movie.id}`);
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={(evt) => {
      onMouseOverCb(movie.id);
    }}
    onMouseOut={(evt) => {
      onMouseOutCb();
    }}
    >
      <div className="small-film-card__image" onClick={handleSmallFilmCardClick}>
        {activeMovie === movie.id ? <PreviewVideoPlayer  filmSrc={movie.previewVideoLink} posterImage={movie.posterImage} play={activeMovie === movie.id}/>
          :
          <img
            src={movie.previewImage}
            alt={movie.name}
            width="280"
            height="175"
          />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${movie.id}`}>
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}


export default MovieCard;
