import { TUser } from './user.ts';

export type TReview = {
  id: string;
  date: string;
  user: Omit<TUser, 'email' | 'token'>;
  comment: string;
  rating: number;
};

export type TAddReview = Omit<TReview, 'id' | 'date' | 'user'>;
