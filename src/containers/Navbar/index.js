import React from 'react';
import {connect} from 'react-redux';
import { NavbarContainer, NavbarItem } from './styles'

export function Navbar() {
  return (
    <NavbarContainer scrolled={window.scrollY}>
      <NavbarItem exact to="/">HOME</NavbarItem>
      <NavbarItem exact to="/about">About</NavbarItem>
    </NavbarContainer>
  )
}

Navbar.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
