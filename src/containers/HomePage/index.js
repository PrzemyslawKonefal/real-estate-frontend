import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from "../../components/SearchBar";

export function HomePage() {
  return (
    <React.Fragment>
      <SearchBar/>
    </React.Fragment>
  )
}

HomePage.propTypes = {

};

function mapStateToProps(state) {
  return {

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
