
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

export type FilmsData = FilmData[];

export type ReviewsData = ReviewData[];

export type NewReviewData = {
  comment: string
  rating: number
  filmId: number
  setIsSavingCb:  React.Dispatch<React.SetStateAction<boolean>>
}

export type FilmId = {
  filmId?: number
}

export type MyListStatusData = {
  filmId: number
  status: number
  isPromo: boolean
}
