import React from 'react';
import { ItemWrapper, ItemTitle } from './styles';
import { Input, Dropdown } from 'semantic-ui-react';

function SearchBarInput({label, iconName, options, onValueChange}) {
  const dropdownOptions = options.map(option => (
    <Dropdown.Item {...option} />
  ));
  return (
    <ItemWrapper>
      <Dropdown
        text={label}
        icon={iconName}
        labeled
        floating
        button
        className='icon'
        onClick={(val, d) => console.log(val, d)}
      >
        <Dropdown.Menu>
          {dropdownOptions}
        </Dropdown.Menu>
      </Dropdown>
    </ItemWrapper>
  );
};

export default SearchBarInput;
