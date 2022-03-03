
export type FilmData = {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: string[]
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}


export type ReviewData = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
}

const mockFilms: FilmData[]  = [
  {
    id: 0,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: 'black',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Based on the 1993 non-fiction book Howard Hughes: The Secret Life by Charles Higham, the film depicts the life of Howard Hughes',
    rating: 7.5,
    scoresCount: 352,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    runTime: 115,
    genre: 'Drama',
    released: 2004,
    isFavorite: true,
  },
  {
    id: 1,
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundColor: 'black',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A mother whose life is ruined by her son&aposs violent act struggles to make sense of his actions and move on.',
    rating: 7.5,
    scoresCount: 401,
    director: 'Lynne Ramsay',
    starring: ['Tilda Swinton', 'John C. Reilly', 'Ezra Miller', 'Jasper Newell'],
    runTime: 111,
    genre: 'Thriller',
    released: 2012,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundColor: 'yellow',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of modern life',
    rating: 7.7,
    scoresCount: 376,
    director: 'Jemaine Clement',
    starring: ['Jemaine Clement', 'Taika Waititi', 'Cori Gonzalez-Macuer'],
    runTime: 86,
    genre: 'Comedy',
    released: 2014,
    isFavorite: true,
  },
  {
    id: 3,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: 'black',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: 8.0,
    scoresCount: 393,
    director: 'Alejandro G. Iñárritu',
    starring: ['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'],
    runTime: 156,
    genre: 'Drama',
    released: 2015,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'Fantastic Beasts: The Crimes of Grindelwald',
    backgroundImage: 'Fantastic Beasts: The Crimes of Grindelwald',
    backgroundColor: 'white',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'The adventures of Magizoologist Newt Scamander.',
    rating: 6.5,
    scoresCount: 473,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    runTime: 134,
    genre: 'Adventure',
    released: 2018,
    isFavorite: true,
  },
  {

    id: 5,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: 'blue',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury.',
    rating: 7.9,
    scoresCount: 311,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runTime: 135,
    genre: 'Biography',
    released: 2018,
    isFavorite: false,
  },
  {

    id: 6,
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: 'black',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.',
    rating: 6.6,
    scoresCount: 390,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Marion Cotillard', 'Jack Madigan'],
    runTime: 113,
    genre: 'Drama',
    released: 2015,
    isFavorite: true,
  },
  {
    id: 7,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: 'green',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'After a sudden attack on MI5, Johnny English, Britain&aposs most confident, yet unintelligent spy, becomes Britain&aposs only spy.',
    rating: 6.2,
    scoresCount: 421,
    director: 'Peter Howitt',
    starring: ['Rowan Atkinson', 'John Malkovich', 'Natalie Imbruglia'],
    runTime: 89,
    genre: 'Comedy',
    released: 2003,
    isFavorite: true,
  },
];

export const mockReviws: ReviewData[] = [
  {
    comment: '111111',
    date: '2021',
    id: 0,
    rating: 8.1,
    user: {
      id: 111,
      name: 'one',
    },
  },
  {
    comment: '22222',
    date: '2022',
    id: 1,
    rating: 6.1,
    user: {
      id: 222,
      name: 'two',
    },
  },
];

export default mockFilms;
