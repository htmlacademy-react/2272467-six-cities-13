import React, { ChangeEvent, Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offers.ts';
import { submitReview } from '../../store/api-actions/review-action.ts';
import { setFormReviewValid, updateComment, updateRating } from '../../store/review-form/review-form-slices.ts';
import { getReviewForm } from '../../store/review-form/review-form-selectors.ts';

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

function ReviewForm({ id }: ReviewFormProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getReviewForm);

  function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  function handleRatingChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(updateRating(Number(e.target.value)));
  }

  useEffect(() => {
    if (formData.comment.length >= 50 && formData.comment.length <= 300 && formData.rating !== null) {
      dispatch(setFormReviewValid(true));
    } else {
      dispatch(setFormReviewValid(false));
    }
  }, [dispatch, formData]);

  function handleFormSubmit() {
    const { comment, rating } = formData;
    if (id) {
      dispatch(submitReview({
        id,
        reviewData: { comment, rating }
      }));
    }
  }

  return (
    <form className="reviews__form form" onSubmit={(e) => {
      e.preventDefault();
      handleFormSubmit();
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
                id={`${rating}-stars`}
                type="radio"
                value={rating}
                checked={String(formData.rating) === rating}
                onChange={handleRatingChange}
                disabled={formData.isSends}
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
        minLength={50}
        required
        onChange={handleCommentChange}
        disabled={formData.isSends}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={!formData.isValid || formData.isSends}
        >{formData.isSends ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
