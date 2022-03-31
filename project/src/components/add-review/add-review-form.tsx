import React, {FormEvent, MutableRefObject, useRef, useState} from 'react';
import { STARS_COUNT } from '../../const';
import { useAppDispatch } from '../../hooks';
import { addNewReviewAction } from '../../store/api-actions';
import { NewReviewData } from '../../types/film';

type AddReviewFormProps = {
  filmId: number,
}

function AddReviewForm ({filmId}: AddReviewFormProps): JSX.Element {

  const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    'review-text': '',
  });

  const [isSaving, setIsSaving] = useState(false);

  const formDataChangeHandler = (evt: React.FormEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target as HTMLInputElement;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  const formDataTextInputHandler = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target as HTMLTextAreaElement;
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

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars" onChange={formDataChangeHandler}>
          {Array.from({ length: STARS_COUNT }, (v, k) => k).map((_, ind) => (
            <React.Fragment key={_}>
              <input  className="rating__input" id={`star-${ind}`} type="radio" name="rating" value={ind} disabled={isSaving}/>
              <label className="rating__label" htmlFor={`star-${ind}`}>Rating {ind}</label>
            </React.Fragment>))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea ref={textareaRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={50} maxLength={400} onInput={formDataTextInputHandler}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={reviewFormData.rating === 0 || (textareaRef.current?.textLength < 50) || isSaving}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
