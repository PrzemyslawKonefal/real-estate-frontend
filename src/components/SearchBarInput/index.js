import React from 'react';
import { ItemWrapper, ItemValue, DropdownButton, PriceWrapper, PriceInput } from './styles';
import { prices } from "../SearchBar/searchParamsLists";

function SearchBarInput({label, iconName, options, onValueChange, value, type}) {
  const itemValue = type === 'price'
    ? (
      <PriceWrapper>
        <PriceInput label="Od" list='prices'  onChange={(e) => onValueChange(e, 'price-min')}/>
        <PriceInput label="Do" list='prices'  onChange={(e) => onValueChange(e, 'price-max')}/>
        <datalist id='prices'>
          {
            prices.map(city => (
              <option value={city.value} key={city.key} />
            ))
          }
        </datalist>
      </PriceWrapper>
    )
    : (
      <ItemValue filled={!!value}>
        {value}
      </ItemValue>
    )
  return (
    <ItemWrapper>
      <DropdownButton
        text={label}
        icon={iconName}
        labeled
        floating
        button
        onChange={onValueChange}
        options={options}
        className="icon"
        eventless={type}
      />
      {itemValue}
    </ItemWrapper>
  );
};

export default SearchBarInput;
