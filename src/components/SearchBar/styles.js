import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 1110px;
  margin: 2em auto;
`;

export const MainSearchBarWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
  height: 120px;
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

export const MoreOptionsButton = styled(Button)`
  && {
    background: #000;
    color: #fff;
  }
`

export const MoreOptionsWrapper = styled.div`

`
