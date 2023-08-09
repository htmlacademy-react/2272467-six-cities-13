import React, { ChangeEvent, Fragment, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { TOffer } from '../../types/offers.ts';
import { addReviews } from '../../store/api-actions/review-action.ts';
import { toast } from 'react-toastify';

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
  isDisabled: false
};

function ReviewForm({ id }: ReviewFormProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(initialState);

  function handelTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      comment: e.target.value
    });
  }

  function handelRatingChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      rating: Number(e.target.value)
    });
  }

  function handelSubmit() {
    if (id) {
      const { comment, rating } = formData;
      setFormData({ ...formData, isDisabled: true });
      dispatch(addReviews({
        id,
        reviewData: { comment, rating }
      })).then(() => setFormData(initialState));
    }
  }

  console.log(formData);

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
                disabled={formData.isDisabled}
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
        onChange={handelTextChange}
        disabled={formData.isDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.isDisabled}>Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
