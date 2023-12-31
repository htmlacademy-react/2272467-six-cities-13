import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { TAddReview, TReview } from '../../types/review.ts';
import { addReview } from '../review/review-slices.ts';
import { clearFormReview } from '../review-form/review-form-slices.ts';
import { toast } from 'react-toastify';
import { NameSpace } from '../../constants/name-space.ts';

export const fetchReviews = createAsyncThunk<TReview[], Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchReviews`,
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<TReview[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const submitReview = createAsyncThunk<void, { id: TOffer['id']; reviewData: TAddReview }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/submitReview`,
  async ({ id, reviewData }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<TReview>(`${ApiRoute.Comments}/${id}`, reviewData);
      dispatch(addReview(data));
      dispatch(clearFormReview());
      toast.success('Your feedback has been sent successfully.');
    } catch {
      toast.error('There was an error sending data, try again!');
    }
  }
);
