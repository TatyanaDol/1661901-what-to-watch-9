import {Link} from 'react-router-dom';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player';
import {useState} from 'react';
import {FilmData} from '../../moks/films';

type SmallMovieCardProps = {
  image: string;
  title: string;
  onMouseOverCb: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  movie: FilmData;
}

function MovieCard({image, title, onMouseOverCb, id, movie}: SmallMovieCardProps): JSX.Element {

  const [isHovering, setIsHovering] = useState(false);
  let timer: NodeJS.Timeout;
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={(evt) => {
      timer = setTimeout(() => {
        onMouseOverCb(id);
        setIsHovering(true);
      }, 1000);

    }}
    onMouseOut={(evt) => {
      clearTimeout(timer);
      setIsHovering(false);
    }}
    >
      <div className="small-film-card__image">
        {isHovering ? <PreviewVideoPlayer  filmSrc={movie.previewVideoLink} posterImage={movie.posterImage} play={isHovering}/>
          :
          <img
            src={image}
            alt={title}
            width="280"
            height="175"
          />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}


export default MovieCard;
