import styled from 'styled-components';
import { Item, Label } from 'semantic-ui-react'

export const Offer = styled(Item)`
  display: flex;
  width: 650px;
  padding: 0.7em;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  margin: 0.8em;

  background: #fff;
  
  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    border-radius: 0 10px 10px 0;
  }
`;

export const Image = styled.img`
  display: flex;
  align-items: flex-start;
  width: 250px;
  height: 205px;
  object-fit: contain;
`

export const OfferHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.a`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #ec407a;
`;

export const Price = styled(Label)`
  
`;

export const Date = styled(Label)`
  
`;
