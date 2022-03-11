import {Link} from 'react-router-dom';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player';
import {FilmData} from '../../moks/films';

type SmallMovieCardProps = {
  onMouseOverCb: React.Dispatch<React.SetStateAction<number>>;
  movie: FilmData;
  isHovering: boolean;
  activeMovie: number;
}

function MovieCard({onMouseOverCb, movie, isHovering, activeMovie}: SmallMovieCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={(evt) => {
      onMouseOverCb(movie.id);
    }}
    onMouseOut={(evt) => {
      onMouseOverCb(-1);
    }}
    >
      <div className="small-film-card__image">
        {isHovering && activeMovie === movie.id ? <PreviewVideoPlayer  filmSrc={movie.previewVideoLink} posterImage={movie.posterImage} play={isHovering}/>
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
