import {Link} from 'react-router-dom';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player';
import {FilmData} from '../../moks/films';

type SmallMovieCardProps = {
  onMouseOverCb: (id: number) => void;
  movie: FilmData;
  activeMovie: number;
  onMouseOutCb: () => void;
}

function MovieCard({onMouseOverCb, movie, activeMovie, onMouseOutCb}: SmallMovieCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={(evt) => {
      onMouseOverCb(movie.id);
    }}
    onMouseOut={(evt) => {
      onMouseOutCb();
    }}
    >
      <div className="small-film-card__image">
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
