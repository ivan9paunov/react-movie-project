import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // TODO create an array representing NavLink items in Navbar.js 
    // Render with map function.   
  return (
    <Navbar color="light" light expand="md">
        <div className="container">
            <NavbarBrand tag={Link} to="/">
                <Logo/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/">Начало</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/movies">Филми</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="tvseries">Сериали</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/profile">Профил</NavLink>
                </NavItem>
                  
                </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default Example;