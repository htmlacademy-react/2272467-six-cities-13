import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { TAddReview, TReview } from '../../types/review.ts';
import { getReviews } from '../action.ts';

export const fetchReviews = createAsyncThunk<void, Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<TReview[]>(`${ApiRoute.Comments}/${id}`);

    dispatch(getReviews(data));
  }
);

export const addReviews = createAsyncThunk<TReview, { id: TOffer['id']; reviewData: TAddReview }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addReviews',
  async ({ id, reviewData }, { extra: api }) => {
    const { data } = await api.post<TReview>(`${ApiRoute.Comments}/${id}`, reviewData);

    return data;
  }
);
