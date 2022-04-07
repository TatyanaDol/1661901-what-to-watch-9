import { makeFakeFilm, makeFakeReview } from '../../utils/mocks';
import {filmsDataLoadingProcess} from './films-data-loading-process';
import {loadFilms, loadPromoFilm, loadSimilarFilms, loadOpenedFilm, loadFilmReviews, loadMyListFilms, changeMyListFilms} from './films-data-loading-process';


const films = [makeFakeFilm(), makeFakeFilm()];
const film = makeFakeFilm();
const review = [makeFakeReview()];

describe('Reducer: Data', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsDataLoadingProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: [],
        isMyListFilmsDataLoaded: false});
  });
  it('should update allFilms by load allFilms', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [],
      isMyListFilmsDataLoaded: false};
    expect(filmsDataLoadingProcess.reducer(state, loadFilms(films)))
      .toEqual({allFilms: films,
        isDataLoaded: true,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: [],
        isMyListFilmsDataLoaded: false});
  });
  it('should update promoFilm by load promoFilm', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [],
      isMyListFilmsDataLoaded: false};
    expect(filmsDataLoadingProcess.reducer(state, loadPromoFilm(film)))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: film,
        isPromoDataLoaded: true,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: [],
        isMyListFilmsDataLoaded: false});
  });
  it('should update similarFilms by load similarFilms', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [],
      isMyListFilmsDataLoaded: false};
    expect(filmsDataLoadingProcess.reducer(state, loadSimilarFilms(films)))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: films,
        isSimilarFilmsDataLoaded: true,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: [],
        isMyListFilmsDataLoaded: false});
  });
  it('should update openedFilm by load openedFilm', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [],
      isMyListFilmsDataLoaded: false};
    expect(filmsDataLoadingProcess.reducer(state, loadOpenedFilm(film)))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: film,
        isOpenedFilmDataLoaded: true,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: [],
        isMyListFilmsDataLoaded: false});
  });
  it('should update filmReviews by load filmReviews', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [],
      isMyListFilmsDataLoaded: false};
    expect(filmsDataLoadingProcess.reducer(state, loadFilmReviews(review)))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: review,
        isFilmReviewsDataLoaded: true,
        myListFilms: [],
        isMyListFilmsDataLoaded: false});
  });
  it('should update myListFilms by load myListFilms', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [],
      isMyListFilmsDataLoaded: false};
    expect(filmsDataLoadingProcess.reducer(state, loadMyListFilms(films)))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: films,
        isMyListFilmsDataLoaded: true});
  });
  it('should update myListFilms by adding film', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [...films],
      isMyListFilmsDataLoaded: true};
    expect(filmsDataLoadingProcess.reducer(state, changeMyListFilms({data: film, status: true})))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: [...films, film],
        isMyListFilmsDataLoaded: true});
  });

  it('should update myListFilms by removing film', () => {
    const state = {allFilms: [],
      isDataLoaded: false,
      promoFilm: null,
      isPromoDataLoaded: false,
      similarFilms: [],
      isSimilarFilmsDataLoaded: false,
      openedFilm: null,
      isOpenedFilmDataLoaded: false,
      filmReviews: [],
      isFilmReviewsDataLoaded: false,
      myListFilms: [...films, film],
      isMyListFilmsDataLoaded: true};
    expect(filmsDataLoadingProcess.reducer(state, changeMyListFilms({data: film, status: false})))
      .toEqual({allFilms: [],
        isDataLoaded: false,
        promoFilm: null,
        isPromoDataLoaded: false,
        similarFilms: [],
        isSimilarFilmsDataLoaded: false,
        openedFilm: null,
        isOpenedFilmDataLoaded: false,
        filmReviews: [],
        isFilmReviewsDataLoaded: false,
        myListFilms: films,
        isMyListFilmsDataLoaded: true});
  });

});
