export const createMovieDuration = (fullDuration: number) => {

  const hours = Math.trunc(fullDuration / 60);
  const minutes = fullDuration - hours * 60;
  if (hours === 0) {
    return `${minutes}m`;
  }
  else if (minutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${minutes}m`;
};


export const createMovieLevel = (rating: number) => {

  if(rating >= 0 && rating < 3) {
    return 'Bad';
  }
  else if(rating >= 3 && rating < 5) {
    return 'Normal';
  }
  else if(rating >= 5 && rating < 8) {
    return 'Good';
  }
  else if(rating >= 8 && rating < 10) {
    return 'Very good';
  }
  else {
    return 'Awesome';
  }

};
