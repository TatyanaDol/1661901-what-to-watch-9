export type FilmData = {
    id: number;
    title: string;
    image: string;
    bigPoster: string;
    genre: string;
    releaseDate: number;
    description: string;
    rating: number;
    ratingDescription: string;
    votes: number;
    director: string;
    actors: string[];
    runtime: string;
    videoFile: string;
    inMyList: boolean;
}

export type ReviewData = {
    reviewId: number;
    reviewText: string;
    rating: string;
    reviewAuthor: string;
    reviewDate: string;
}

const mockFilms: FilmData[]  = [
  {
    id: 0,
    title: 'Aviator',
    image: 'img/aviator.jpg',
    bigPoster: 'img/aviator.jpg',
    genre: 'Drama',
    releaseDate: 2004,
    description: 'Based on the 1993 non-fiction book Howard Hughes: The Secret Life by Charles Higham, the film depicts the life of Howard Hughes',
    rating: 7.5,
    ratingDescription: 'Good',
    votes: 352,
    director: 'Martin Scorsese',
    actors: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    runtime: '1h 55m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: true,

  },
  {
    id: 1,
    title: 'We need to talk about Kevin',
    image: 'img/we-need-to-talk-about-kevin.jpg',
    bigPoster: 'img/we-need-to-talk-about-kevin.jpg',
    genre: 'Thriller',
    releaseDate: 2012,
    description: 'A mother whose life is ruined by her son&aposs violent act struggles to make sense of his actions and move on.',
    rating: 7.5,
    ratingDescription: 'Good',
    votes: 401,
    director: 'Lynne Ramsay',
    actors: ['Tilda Swinton', 'John C. Reilly', 'Ezra Miller', 'Jasper Newell'],
    runtime: '1h 51m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: false,
  },
  {
    id: 2,
    title: 'What We Do in the Shadows',
    image: 'img/what-we-do-in-the-shadows.jpg',
    bigPoster: 'img/what-we-do-in-the-shadows.jpg',
    genre: 'Comedy',
    releaseDate: 2014,
    description: 'Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of modern life',
    rating: 7.7,
    ratingDescription: 'Good',
    votes: 376,
    director: 'Jemaine Clement',
    actors: ['Jemaine Clement', 'Taika Waititi', 'Cori Gonzalez-Macuer'],
    runtime: '1h 26m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: true,
  },
  {
    id: 3,
    title: 'Revenant',
    image: 'img/revenant.jpg',
    bigPoster: 'img/revenant.jpg',
    genre: 'Drama',
    releaseDate: 2015,
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: 8.0,
    ratingDescription: 'Very good',
    votes: 393,
    director: 'Alejandro G. Iñárritu',
    actors: ['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'],
    runtime: '2h 36m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: false,
  },
  {
    id: 4,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    bigPoster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: 'Adventure',
    releaseDate: 2018,
    description: 'The adventures of Magizoologist Newt Scamander.',
    rating: 6.5,
    ratingDescription: 'Good',
    votes: 473,
    director: 'David Yates',
    actors: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    runtime: '2h 14m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: true,
  },
  {
    id: 5,
    title: 'Bohemian Rhapsody',
    image: 'img/bohemian-rhapsody.jpg',
    bigPoster: 'img/bohemian-rhapsody.jpg',
    genre: 'Biography',
    releaseDate: 2018,
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury.',
    rating: 7.9,
    ratingDescription: 'Good',
    votes: 311,
    director: 'Bryan Singer',
    actors: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runtime: '2h 15m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: false,
  },
  {
    id: 6,
    title: 'Macbeth',
    image: 'img/macbeth.jpg',
    bigPoster: 'img/macbeth.jpg',
    genre: 'Drama',
    releaseDate: 2015,
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.',
    rating: 6.6,
    ratingDescription: 'Good',
    votes: 390,
    director: 'Justin Kurzel',
    actors: ['Michael Fassbender', 'Marion Cotillard', 'Jack Madigan'],
    runtime: '1h 53m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: true,
  },
  {
    id: 7,
    title: 'Johnny English',
    image: 'img/johnny-english.jpg',
    bigPoster: 'img/johnny-english.jpg',
    genre: 'Comedy',
    releaseDate: 2003,
    description: 'After a sudden attack on MI5, Johnny English, Britain&aposs most confident, yet unintelligent spy, becomes Britain&aposs only spy.',
    rating: 6.2,
    ratingDescription: 'Good',
    votes: 421,
    director: 'Peter Howitt',
    actors: ['Rowan Atkinson', 'John Malkovich', 'Natalie Imbruglia'],
    runtime: '1h 29m',
    videoFile: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    inMyList: true,
  },
];

export const mockReviws: ReviewData[] = [
  {
    reviewId: 0,
    reviewText: '111111',
    rating: '8,1',
    reviewAuthor: 'one',
    reviewDate: '2021',

  },
  {
    reviewId: 1,
    reviewText: '2222222',
    rating: '6,5',
    reviewAuthor: 'two',
    reviewDate: '2022',
  },
];

export default mockFilms;
