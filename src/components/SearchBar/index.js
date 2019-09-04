import React, { useReducer , useState} from 'react';
import { SearchBarWrapper, InputCity, SearchButton, MoreOptionsButton, MoreOptionsWrapper } from './styles';
import { Icon } from 'semantic-ui-react';

import SearchBarInput from '../SearchBarInput';
import initialiseSearchParams from '../../utils/searchState';

import { cities, propertyTypes, dealTypes } from './searchParamsLists';
import { searchOffers } from '../../utils/api/search'

const initialSearchState = initialiseSearchParams();

function reducer(state, action) {
  switch(action.type) {
    case 'paramChange': {
      const newState = { ...state };
      newState[action.fieldName] = action.value;
      return newState
    }
  }
}

function SearchBar() {
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialSearchState)
  const inputCityOptions = cities.map(city => (
    <option value={city.value} key={city.key} />
  ));

  const handleSearch = () => {
    console.log(state)
    searchOffers(state).then((res) => {
      console.log(res.data)
    }).catch(e => console.log(e))
  }

  return (
    <React.Fragment>
      <SearchBarWrapper>
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
          onValueChange={({target}, fieldName) => dispatch({type: 'paramChange', fieldName, value: Number(target.value)})}
        />
        <SearchButton icon onClick={handleSearch}>
          <Icon name="search"/>
        </SearchButton>
        <MoreOptionsButton onClick={() => setMoreOptionsOpen(!moreOptionsOpen)} icon={`angle ${moreOptionsOpen ? 'up' : 'down'}`} content="Szczegółowe wyszukiwanie"/>
      </SearchBarWrapper>
    </React.Fragment>
  );
};

export default SearchBar;
