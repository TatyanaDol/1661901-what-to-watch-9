import React, {FormEvent, MutableRefObject, useEffect, useRef, useState} from 'react';
import { MAXIMUM_REVIEW_LENGTH, MINIMUM_REVIEW_LENGTH, STARS_COUNT } from '../../const';
import { useAppDispatch } from '../../hooks';
import { addNewReviewAction } from '../../store/api-actions';
import { NewReviewData } from '../../types/film';

type AddReviewFormProps = {
  filmId: number,
}

function AddReviewForm ({filmId}: AddReviewFormProps): JSX.Element | null {

  const [didMount, setDidMount] = useState(false);

  const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    'review-text': '',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleFormDataChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  const handleFormDataTextInput = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  const dispatch = useAppDispatch();

  const onSubmit = (newReviewData: NewReviewData) => {
    setIsSaving(true);
    dispatch(addNewReviewAction(newReviewData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      comment: reviewFormData['review-text'],
      rating: reviewFormData.rating,
      filmId: filmId,
      setIsSavingCb: setIsSaving,
    });

  };

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if(!didMount) {
    return null;
  }

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars" >
          {Array.from({ length: STARS_COUNT }, (v, k) => k).map((_, ind) => (
            <React.Fragment key={_}>
              <input  className="rating__input" id={`star-${-ind + STARS_COUNT}`} type="radio" name="rating" value={-ind + STARS_COUNT} disabled={isSaving} onChange={handleFormDataChange}/>
              <label className="rating__label" htmlFor={`star-${-ind + STARS_COUNT}`}>Rating {-ind + STARS_COUNT}</label>
            </React.Fragment>))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea ref={textareaRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={MINIMUM_REVIEW_LENGTH} maxLength={MAXIMUM_REVIEW_LENGTH} onInput={handleFormDataTextInput} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={reviewFormData.rating === 0 || (textareaRef.current?.textLength < 50) || isSaving}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
