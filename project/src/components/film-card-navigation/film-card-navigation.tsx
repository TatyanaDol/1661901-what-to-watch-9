import {Link} from 'react-router-dom';
import { FilmCardNavigationItems } from '../../const';

type FilmCardNavigationProps = {
    filmId: number;
    activeLink: string;
  }

export function FilmCardNavigation({filmId, activeLink}: FilmCardNavigationProps): JSX.Element {

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${activeLink === FilmCardNavigationItems.Overview && 'film-nav__item--active'}`}>
          <Link to={`/films/${filmId}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${activeLink === FilmCardNavigationItems.Details && 'film-nav__item--active'}`}>
          <Link to={`/films/${filmId}/#details`} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${activeLink === FilmCardNavigationItems.Reviews && 'film-nav__item--active'}`}>
          <Link to={`/films/${filmId}/#review`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
