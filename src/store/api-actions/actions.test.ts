import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { createApi } from '../../services/api.ts';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state.ts';
import {
  AppThunkDispatch,
  extractActionsTypes,
  makeFakeAuthData,
  makeFakeOffer,
  makeFakeReview,
  makeFakeReviewDataForm,
} from '../../utils/mocks/mocks.ts';
import { ApiRoute } from '../../constants/api-route.ts';
import { addFavorite, deleteFavorite, fetchFavoritesOffers } from './favorites-offers-action.ts';
import { fetchOffers } from './offers-action.ts';
import { fetchReviews, submitReview } from './review-action.ts';
import { checkAuthAction, loginAction, logoutAction } from './user-action.ts';
import * as tokenStorage from '../../services/token';
import { fetchNearOffer } from './near-offers-action.ts';
import { fetchOffer } from './offer-action.ts';
import { clearFormReview } from '../review-form/review-form-slices.ts';
import { addReview } from '../review/review-slices.ts';
import { expect } from 'vitest';
import { FavoriteStatus } from '../../constants/offer.ts';
import { clearLoginForm } from '../login-form/login-form-slices.ts';
import { redirectToRoute } from '../action.ts';
import { AppRoute } from '../../constants/app-route.ts';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { favoritesOffers: [], offers: [], reviews: [] } });
  });

  describe('fetchFavoritesOffersAction', () => {
    it('should dispatch "fetchFavoritesOffers.pending", "fetchFavoritesOffers.fulfilled", when server response 200', async () => {
      const mockFavoritesOffers = [makeFakeOffer()];
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(200, mockFavoritesOffers);

      await store.dispatch(fetchFavoritesOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesOffers.pending.type,
        fetchFavoritesOffers.fulfilled.type
      ]);

      expect(fetchFavoritesOffersActionFulfilled.payload)
        .toEqual(mockFavoritesOffers);
    });

    it('should dispatch "fetchFavoritesOffers.pending", "fetchFavoritesOffers.reject", when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoritesOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesOffers.pending.type,
        fetchFavoritesOffers.rejected.type
      ]);
    });
  });

  describe('addFavoriteAction', () => {
    it('should dispatch "addFavorite.pending", "addFavorite.fulfilled", when server response 200', async () => {
      const mockFavoritesOffers = makeFakeOffer();
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/${mockFavoritesOffers.id}/${FavoriteStatus.Add}`).reply(200, mockFavoritesOffers);

      await store.dispatch(addFavorite({ id: mockFavoritesOffers.id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const addFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        addFavorite.pending.type,
        addFavorite.fulfilled.type
      ]);

      expect(addFavoriteActionFulfilled.payload)
        .toEqual(mockFavoritesOffers);
    });

    it('should dispatch "addFavorite.pending", "addFavorite.reject", when server response 400', async () => {
      mockAxiosAdapter.onGet(`${ApiRoute.Favorite}/1/${FavoriteStatus.Add}`).reply(400, []);

      await store.dispatch(addFavorite({ id: '1' }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        addFavorite.pending.type,
        addFavorite.rejected.type
      ]);
    });
  });

  describe('deleteFavoriteAction', () => {
    it('should dispatch "deleteFavorite.pending", "deleteFavorite.fulfilled", when server response 200', async () => {
      const mockFavoritesOffers = makeFakeOffer();
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/${mockFavoritesOffers.id}/${FavoriteStatus.Delete}`).reply(200, mockFavoritesOffers);

      await store.dispatch(deleteFavorite({ id: mockFavoritesOffers.id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const deleteFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        deleteFavorite.pending.type,
        deleteFavorite.fulfilled.type
      ]);

      expect(deleteFavoriteActionFulfilled.payload)
        .toEqual(mockFavoritesOffers);
    });

    it('should dispatch "deleteFavorite.pending", "deleteFavorite.reject", when server response 400', async () => {
      mockAxiosAdapter.onGet(`${ApiRoute.Favorite}/1/${FavoriteStatus.Delete}`).reply(400, []);

      await store.dispatch(deleteFavorite({ id: '1' }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        deleteFavorite.pending.type,
        deleteFavorite.rejected.type
      ]);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffers.pending", "fetchOffers.fulfilled", when server response 200', async () => {
      const mockOffers = [makeFakeOffer()];
      mockAxiosAdapter.onGet(ApiRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffers.pending.type,
        fetchOffers.fulfilled.type
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchOffers.pending", "fetchOffers.reject", when server response 400', async () => {
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}`).reply(400, []);

      await store.dispatch(fetchOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOffers.pending.type,
        fetchOffers.rejected.type
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOffer.pending", "fetchOffer.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockOffer.id}`).reply(200, mockOffer);

      await store.dispatch(fetchOffer({ id: mockOffer.id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffer.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.fulfilled.type
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "fetchOffer.pending", "fetchOffer.reject", when server response 400', async () => {
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${id}`).reply(400, []);

      await store.dispatch(fetchOffer({ id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.rejected.type
      ]);
    });
  });

  describe('fetchNearOffersAction', () => {
    it('should dispatch "fetchNearOffers.pending", "fetchNearOffers.fulfilled", when server response 200', async () => {
      const mockNearOffers = [makeFakeOffer()];
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${id}/nearby`).reply(200, mockNearOffers);

      await store.dispatch(fetchNearOffer({ id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearOffer.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearOffer.pending.type,
        fetchNearOffer.fulfilled.type
      ]);

      expect(fetchNearOffersActionFulfilled.payload)
        .toEqual(mockNearOffers);
    });

    it('should dispatch "fetchNearOffers.pending", "fetchNearOffers.reject", when server response 400', async () => {
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${id}/nearby`).reply(400, []);

      await store.dispatch(fetchNearOffer({ id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchNearOffer.pending.type,
        fetchNearOffer.rejected.type
      ]);
    });
  });


  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviews.pending", "fetchReviews.fulfilled", when server response 200', async () => {
      const mockReviews = [makeFakeReview()];
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/${mockReviews[0].id}`).reply(200, mockReviews);

      await store.dispatch(fetchReviews({ id: mockReviews[0].id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviews.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type
      ]);

      expect(fetchReviewsActionFulfilled.payload)
        .toEqual(mockReviews);
    });

    it('should dispatch "fetchReviews.pending", "fetchReviews.reject", when server response 400', async () => {
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/${id}`).reply(400, []);

      await store.dispatch(fetchReviews({ id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.rejected.type
      ]);
    });
  });

  describe('submitReviewAction', () => {
    it('should dispatch "submitReview.pending", "submitReview.fulfilled", when server response 200', async () => {
      const mockReviews = makeFakeReview();
      const mockReviewFormData = makeFakeReviewDataForm();
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/${mockReviews.id}`).reply(200, mockReviews);

      await store.dispatch(submitReview({ id: mockReviews.id, reviewData: mockReviewFormData }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        submitReview.pending.type,
        addReview.type,
        clearFormReview.type,
        submitReview.fulfilled.type
      ]);
    });

    it('should call "addReview" with "mockReviews" data', async () => {
      const mockReviews = makeFakeReview();
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/${mockReviews.id}`).reply(200, mockReviews);
      await store.dispatch(submitReview({
        id: mockReviews.id,
        reviewData: { comment: mockReviews.comment, rating: mockReviews.rating }
      }));

      const emittedActions = store.getActions();
      const addReviewAction = emittedActions.at(1) as ReturnType<typeof addReview>;

      expect(addReviewAction.payload).toEqual(mockReviews);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "loginAction.fulfilled" when server response 200', async () => {
      const mockAuthData = makeFakeAuthData();
      const mockServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, mockServerReplay);

      await store.dispatch(loginAction(mockAuthData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        clearLoginForm().type,
        redirectToRoute(AppRoute.Main).type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should dispatch "loginAction.pending", "loginAction.reject" when server response 400', async () => {
      const mockAuthData = makeFakeAuthData();
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(400, []);

      await store.dispatch(loginAction(mockAuthData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const mockAuthData = makeFakeAuthData();
      const mockServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, mockServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(mockAuthData));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(mockServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        fetchFavoritesOffers.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });
});
