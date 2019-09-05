import * as types from '../constants/actionTypes';
import { searchOffers } from '../utils/api/search';

function setLoading(isLoading) {
  return {
    type: types.SET_LOADING,
    isLoading
  }
}

function saveNewOffers(offers) {
  return {
    type: types.SAVE_SEARCH_OFFERS,
    offers
  }
}

export function showMoreOffers() {
  return {
    type: types.SHOW_MORE_OFFERS
  }
}

export function searchNewOffers(params) {
  return (dispatch) => {
    dispatch(setLoading(true))
    searchOffers(params).then((response) => {
      const offers = response.data.reduce((offersList, current) => {
        return [ ...offersList, ...current.offers ]
      }, []);
      dispatch(saveNewOffers(offers))
      dispatch(setLoading(false))
    }).catch(() => {
      dispatch(setLoading(false))
    })
  };
}
