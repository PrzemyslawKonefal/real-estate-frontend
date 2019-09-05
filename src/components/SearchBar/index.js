import React, { useReducer , useState} from 'react';
import { SearchWrapper, MainSearchBarWrapper, InputCity, SearchButton, MoreOptionsButton } from './styles';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { connect } from "react-redux";

import SearchBarInput from '../SearchBarInput';
import initialiseSearchParams from '../../utils/searchState';
import { searchNewOffers } from '../../actions/searchActions';
import { cities, propertyTypes, dealTypes } from './searchParamsLists';

const initialSearchState = initialiseSearchParams();

function reducer(state, action) {
  switch (action.type) {
    case 'paramChange': {
      const newState = { ...state };
      newState[action.fieldName] = action.value;
      return newState
    }
  }
}

function SearchBar({ searchOffers }) {
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialSearchState)
  const inputCityOptions = cities.map(city => (
    <option value={city.value} key={city.key} />
  ));

  return (
    <SearchWrapper>
      <MainSearchBarWrapper>
        <InputCity
          list='cities'
          icon='map marker alternate red'
          iconPosition='left'
          placeholder="Miasto"
          onChange={({target}) => dispatch({type: 'paramChange', fieldName: 'region', value: target.value})}
        />
        <datalist id='cities'>
          {inputCityOptions}
        </datalist>
        <SearchBarInput
          label="Rodzaj nieruchomości"
          iconName="home"
          options={propertyTypes}
          onValueChange={({target}) => dispatch({type: 'paramChange', fieldName: 'propertyType', value: target.innerText})}
          value={state.propertyType}
        />
        <SearchBarInput
          label="Typ transakcji"
          iconName="handshake"
          options={dealTypes}
          onValueChange={({target}) => dispatch({type: 'paramChange', fieldName: 'dealType', value: target.innerText})}
          value={state.dealType}
        />
        <SearchBarInput
          type="price"
          label="Cena w zł"
          iconName="money"
          onValueChange={({target}, fieldName) => dispatch({type: 'paramChange', fieldName, value: Number(target.value.replace(/\s/, ''))})}
        />
        <SearchButton icon onClick={() => searchOffers(state)}>
          <Icon name="search"/>
        </SearchButton>
      </MainSearchBarWrapper>
      <MoreOptionsButton
        onClick={() => setMoreOptionsOpen(!moreOptionsOpen)}
        icon={`angle ${moreOptionsOpen ? 'up' : 'down'}`}
        content="Szczegółowe wyszukiwanie"
      />
    </SearchWrapper>
  );
}

SearchBar.propTypes = {
  searchOffers: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    searchOffers: (params) => { dispatch(searchNewOffers(params)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

