import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { LoginWidget } from './auth'

export default class AppHeader extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">react-redux auth</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <LoginWidget />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
