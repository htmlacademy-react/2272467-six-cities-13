import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants/app-route.ts';


const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export { redirectToRoute };
