import {useAppSelector} from '../../hooks/index';
import {UserAvatar} from '../user-avatar/user-avatar';
import LoadingScreen from '../loading-screen/loading-screen';
import LogoWtw from '../logo-wtw/logo-wtw';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import { ButtonMyList } from '../button-my-list/button-my-list';
import { getPromoDataLoadedStatus, getPromoFilm } from '../../store/films-data-loading-process/selectors';


export function PromoFilmCard(): JSX.Element {

  const promoFilm = useAppSelector(getPromoFilm);
  const isPromoDataLoaded = useAppSelector(getPromoDataLoadedStatus);

  const navigate = useNavigate();

  function handlePlayerButtonClick(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    navigate(`/player/${promoFilm?.id}` );
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={promoFilm?.backgroundImage}
          alt={promoFilm?.name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <div className="logo">
          <LogoWtw isLight={false} />
        </div>

        <UserAvatar />
      </header>

      {!isPromoDataLoaded ? <LoadingScreen /> :
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm?.posterImage}
                alt={promoFilm?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={handlePlayerButtonClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <ButtonMyList filmIsFavorite={promoFilm?.isFavorite} filmId={promoFilm?.id} />
              </div>
            </div>
          </div>
        </div>}
    </section>
  );
}
