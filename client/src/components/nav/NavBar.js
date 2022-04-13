import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logoNav from '../../assets/images/ec-nav-transparent.png';
import './NavBar.scss';

function NavBar(){
    return(
        <div className="nav-bar-container">
            <Navbar collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logoNav} className='nav-bar-logo' alt='entertainment-center' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavDropdown title="Film & TV" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;