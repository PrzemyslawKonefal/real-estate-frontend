import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 70px;
  background: linear-gradient(27deg, rgba(0,0,0,1) 50%, #ec407a 50% , #d81b60 75%);
  
  ${props => props.scrolled && css`
    box-shadow: 0 2px 7px #000;
  `}
`;

export const NavbarItem = styled(NavLink)`
  display: block;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
    color: #e6e6e6;
  }
`;
