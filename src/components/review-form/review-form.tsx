import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { TOffer } from '../../types/offers.ts';
import { submitReview } from '../../store/api-actions/review-action.ts';

const ratingAndTitle = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

type ReviewFormProps = {
  id: TOffer['id'] | undefined;
}

const initialState = {
  comment: '',
  rating: 0,
};

function ReviewForm({ id }: ReviewFormProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(initialState);
  const [ratingValid, setRatingValid] = useState(false);
  const [commentValid, setCommentValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formSendsData, setFormSendsData] = useState(false);

  function handelCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const comment = e.target.value;
    setFormData({
      ...formData,
      comment
    });
  }

  useEffect(() => {
    if (formData.comment.length >= 50) {
      setCommentValid(true);
    } else {
      setCommentValid(false);
    }

    if (formData.rating !== 0) {
      setRatingValid(true);
    } else {
      setRatingValid(false);
    }
  }, [formData]);


  function handelRatingChange(e: ChangeEvent<HTMLInputElement>) {
    const rating = Number(e.target.value);
    setFormData({
      ...formData,
      rating
    });
  }

  useEffect(() => {
    if (commentValid && ratingValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [ratingValid, commentValid, formData]);

  function handelSubmit() {
    if (id) {
      setFormSendsData(true);
      dispatch(submitReview({
        id,
        reviewData: formData
      })).then(() => {
        setFormData(initialState);
        setFormSendsData(false);
      });
    }
  }

  return (
    <form className="reviews__form form" onSubmit={(e) => {
      e.preventDefault();
      handelSubmit();
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingAndTitle)
          .reverse()
          .map(([rating, title]) => (
            <Fragment key={rating}>
              <input
                required
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={rating}
                id={`${rating}-stars`}
                type="radio"
                onChange={handelRatingChange}
                disabled={formSendsData}
              />
              <label
                htmlFor={`${rating}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        maxLength={300}
        minLength={50}
        required
        onChange={handelCommentChange}
        disabled={formSendsData}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formValid || formSendsData}>Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
