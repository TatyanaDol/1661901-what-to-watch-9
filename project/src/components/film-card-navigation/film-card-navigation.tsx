import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {useLocation } from 'react-router';
import {useEffect} from 'react';

type FilmCardNavigationProps = {
    filmId: number;
  }

export function FilmCardNavigation({filmId}: FilmCardNavigationProps): JSX.Element {

  const [activeLink, setActiveLink] = useState('');

  const path = useLocation();

  const pathItems = path.pathname.split('/');

  const navItem =  pathItems[3] || 'overview';

  useEffect(() => {
    setActiveLink(navItem);

  }, [navItem]);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${activeLink === 'overview' && 'film-nav__item--active'}`}>
          <Link to={`/films/${filmId}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${activeLink === 'details' && 'film-nav__item--active'}`}>
          <Link to={`/films/${filmId}/details`} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${activeLink === 'reviews' && 'film-nav__item--active'}`}>
          <Link to={`/films/${filmId}/review`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
