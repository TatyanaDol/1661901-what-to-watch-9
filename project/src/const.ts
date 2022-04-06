export const FILTER_ALL_GENRES = 'All genres';

export const FILM_COUNT_PER_STEP = 8;

export const STARS_COUNT = 10;

export const MINIMUM_REVIEW_LENGTH = 50;
export const MAXIMUM_REVIEW_LENGTH = 400;

export const INDEX_FOR_MAXIMUM_GENRES_COUNT = 10;

export const MAXIMUM_SIMILAR_FILMS_COUNT = 4;

export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
    NotFound = '*',
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum APIRoute {
    AllFilms = '/films',
    Login = '/login',
    Logout = '/logout',
    Promo = '/promo',
    Favorite = '/favorite',
}

export enum HttpCode {
    Bad_request = 400,
    Unauthorized = 401,
    Not_found = 404,
}

export enum NameSpace {
    Data = 'DATA',
    Site = 'SITE',
    User = 'USER',
  }

export enum FilmCardNavigationItems {
    Overview = '',
    Details = '#details',
    Reviews = '#reviews',
}
