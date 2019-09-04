import styled, { css } from 'styled-components';
import { Dropdown, Input } from 'semantic-ui-react';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemValue = styled.p`
  position: relative;
  margin: 0 5px;
  width: 100%;
  font-size: 20px;
  letter-spacing: 3px;
  color: #ec407a;
  text-align: center;
`;
export const DropdownButton = styled(Dropdown)`
  &&& {
    background: none;
    color: #fff;
    
    i {
      color: #ec407a;
      transform: translateX(20px);
    }
    
    &:hover, &:focus {
      background: none;
      color: #fff;
      & > div {
       text-decoration: underline;
      }
  
    }
    
    ${props => props.eventless && css`
      pointer-events: none;
    `}
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceInput = styled(Input)`
  &&& {
    height: 30px;
  
    &:first-of-type {
    margin-bottom: 10px;
    }
    input {
      width: 130px
    }
    div {
      background: #ec407a;
      color: #fff;
    }
  }
`;
