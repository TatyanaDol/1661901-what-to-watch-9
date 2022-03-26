import { FilmData } from '../../types/film';
import { FilmCardNavigation } from '../film-card-navigation/film-card-navigation';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import React, {useState} from 'react';
import {useLocation } from 'react-router';
import {useEffect} from 'react';
import { FilmCardNavigationItems } from '../../const';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import AddReview from '../add-review/add-review';

type TabsProps = {
    film: FilmData;
}

export function Tabs({film}: TabsProps): JSX.Element {

  const [activePage, setActivePage] = useState('');

  const {hash} = useLocation();

  useEffect(() => {
    setActivePage(hash);

  }, [hash]);

  if(activePage === FilmCardNavigationItems.Reviews) {
    return <AddReview />;
  }

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <FilmCardNavigation filmId={film.id} activeLink={activePage}/>

          {activePage === FilmCardNavigationItems.Overview && <MoviePageOverview film={film} />}

          {activePage === FilmCardNavigationItems.Details && <MoviePageDetails film={film} />}

        </div>

      </div>
    </div>

  );
}
