import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logoNav from '../../assets/images/ec-new-navbar.png';
import './NavBar.scss';

function NavBar({ userStatus, user }){
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
                            <NavDropdown.Item href="/film/search">Search</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/tv">Television</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/people">People</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gaming" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#coming-soon">Coming Soon!</NavDropdown.Item>
                        </NavDropdown> 
                        
                        {/*<NavDropdown title="Music" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">Coming Soon!</NavDropdown.Item>
                        </NavDropdown>
                        {user === null ? 
                            <div className="nav-login-signup-container">
                            <Link to='/login'>
                                <button>Login</button>
                            </Link>
                            <Link to='/signup'>
                                <button>Sign Up</button>
                            </Link>
                            </div> :
                        <p>{user.username}</p>}*/}
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;