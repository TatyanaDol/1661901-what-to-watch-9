export const FILTER_ALL_GENRES = 'All genres';

export const FILM_COUNT_PER_STEP = 8;

export const STARS_COUNT = 10;

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

export enum HTTP_CODE {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export enum NameSpace {
    data = 'DATA',
    site = 'SITE',
    user = 'USER',
  }

export enum FilmCardNavigationItems {
    Overview = '',
    Details = '#details',
    Reviews = '#reviews',
}
