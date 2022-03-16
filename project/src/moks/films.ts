
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
