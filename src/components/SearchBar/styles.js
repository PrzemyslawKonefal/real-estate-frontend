import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';

export const SearchBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em auto;
  width: 1110px;
  height: 70px;
  border-radius: 6px;
  background: #000;
  padding: 0 16px;
`;

export const InputCity = styled(Input)`
  min-width: 300px;
`;

export const SearchButton = styled(Button)`
 && {
   background: linear-gradient(27deg, #ec407a 33%, #d81b60 66%);
   
   & > i {
    color: #fff;
   }
 }
`;
