export const TIMEOUT_SHOW_ERROR = 2000;

export const FILTER_ALL_GENRES = 'All genres';

export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum APIRoute {
    allFilms = '/films',
    login = '/login',
    logout = '/logout',
}

export enum HTTP_CODE {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}
