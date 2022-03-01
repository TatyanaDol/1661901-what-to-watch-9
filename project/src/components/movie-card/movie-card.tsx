import {Link} from 'react-router-dom';

type SmallMovieCardProps = {
  image: string;
  title: string;
  onMouseOverCb: React.Dispatch<React.SetStateAction<number>>;
  id: number;
}

function MovieCard({image, title, onMouseOverCb, id}: SmallMovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={(evt) => {
      onMouseOverCb(id);
    }}
    >
      <div className="small-film-card__image">
        <img
          src={image}
          alt={title}
          width="280"
          height="175"
        />
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
