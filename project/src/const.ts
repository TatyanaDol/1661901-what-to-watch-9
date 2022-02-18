export enum AppRoute {
    Main = '/',
    Sign_In = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    Add_Review = '/films/:id/review',
    Player = '/player/:id',
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
