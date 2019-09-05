import * as types from '../constants/actionTypes';
import initialState from './initialState';
export default function fuelSavingsReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };
    case types.SAVE_SEARCH_OFFERS:
      return {
        ...state,
        offers: action.offers,
        visibleOffers: action.offers.slice(0, 10),
        hasMoreContent: action.offers.length > 10
      };
    case types.SHOW_MORE_OFFERS: {
      const visibleOffersNumber = state.visibleOffers.length + 10;
      return {
        ...state,
        visibleOffers: state.offers.slice(0 , visibleOffersNumber),
        hasMoreContent: action.offers.length > visibleOffersNumber
      };
    }
    default:
      return state;
  }
}
