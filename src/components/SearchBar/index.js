import React, { useReducer, useEffect } from 'react';
import { SearchBarWrapper, InputCity, SearchButton } from './styles';
import { Icon } from 'semantic-ui-react';

import SearchBarInput from '../SearchBarInput';
import initialiseSearchParams from '../../utils/searchState';

import { cities, propertyTypes, dealTypes } from './searchParamsLists';

const initialSearchState = initialiseSearchParams();

function reducer(state, action) {
  switch(action.type) {
    case 'paramChange': {
      console.log(action)
      const newState = { ...state };
      newState[action.fieldName] = action.value;
      return newState
    }
  }
}

function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initialSearchState)


  const inputCityOptions = cities.map(city => (
    <option value={city.value} key={city.key} />
  ));
  console.log(state)
  return (
    <SearchBarWrapper>
      <InputCity list='languages' icon='map marker alternate red' iconPosition='left' placeholder="Miasto"/>
      <datalist id='languages'>
        {inputCityOptions}
      </datalist>
      <SearchBarInput
        label="Rodzaj nieruchomości"
        iconName="home"
        options={propertyTypes}
        onValueChange={(value) => dispatch({type: 'paramChange', fieldName: 'propertyType', value})}
      />
      <SearchButton icon>
        <Icon name="search"/>
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
