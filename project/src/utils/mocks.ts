import {random, name, image} from 'faker';
import {FilmData, ReviewData} from '../types/film';

export const GENRES = ['Adventure', 'Drama', 'Crime', 'Fantasy','Action', 'Comedy', 'Thriller' ];

export const makeFakeFilm = (): FilmData => ({
  id: Math.floor(Math.random() * 100),
  name: name.title(),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#9B7E61',
  videoLink: 'https://9.react.pages.academy/static/film/video/matrix.mp4',
  previewVideoLink: 'https://9.react.pages.academy/static/film/video/dog.mp4',
  description: random.words(),
  rating: Math.floor(Math.random() * 100),
  scoresCount: Math.floor(Math.random() * 100),
  director: random.word(),
  starring: [random.word()],
  runTime: Math.floor(Math.random() * 100),
  genre: GENRES[Math.floor(Math.random() * GENRES.length)],
  released: Math.floor(Math.random() * 100),
  isFavorite: true,
} as FilmData);

export const makeFakeReview = (): ReviewData => ({
  comment: random.words(),
  date: '2022-02-13T21:48:13.678Z',
  id: Math.floor(Math.random() * 100),
  rating: Math.floor(Math.random() * 10),
  user: {
    id: Math.floor(Math.random() * 100),
    name: name.findName(),
  },
} as ReviewData);

export const makeFakeAvatarUrl = (): string => image.imageUrl();
