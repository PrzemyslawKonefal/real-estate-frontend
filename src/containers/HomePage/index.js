import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBar from "../../components/SearchBar";
import OffersPlaceholder from "../../components/OffersPlaceholder";
import NoSearchResultsMessage from "../../components/NoSearchResultsMessage";
import OfferItem from "../../components/OfferItem";
import { OffersWrapper } from './styles.js'

export function HomePage({ offers, hasMoreContent, loading}) {
  const offersList = (() => {
    if (loading) return <OffersPlaceholder/>;
    if (!offers.length) return <NoSearchResultsMessage/>;
    return offers.map((offer) => (
      <OfferItem key={offer.href} {...offer} />
    ))
  })();
  return (
    <React.Fragment>
      <SearchBar/>
      <OffersWrapper>
        {offersList}
      </OffersWrapper>
    </React.Fragment>
  )
}

HomePage.propTypes = {
  offers: PropTypes.array.isRequired,
  hasMoreContent: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    offers: state.search.visibleOffers,
    hasMoreContent: state.search.hasMoreContent,
    loading: state.search.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
