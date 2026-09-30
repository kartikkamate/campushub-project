import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const AdminNavbar = () => {
    return (
        <>
            <style>
                {`
                .navbarStyle {
                    transition: all 0.3s ease;
                }
                .brandStyle {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .textAnimationStyle {
                    font-size: 24px;
                    font-weight: bold;
                    margin-left: 25px;  
                    transition: transform 0.3s ease;
                }
                .textAnimationStyle:hover {
                    transform: scale(1.2);
                }
                .eventStyle {
                    padding-right: 20px;
                    font-size: 32px;
                    color: #ff5733;
                    padding: 0 5px;
                }
                .managementStyle {
                    color: #33c1ff;
                    padding: 0 5px;
                }
                .navItemStyle {
                    font-size: 20px;
                    padding: 15px;
                    transition: all 0.3s ease;
                }
                .navbar:hover {
                    background-color: #333;
                }
                .navbar .nav-item:hover {
                    color: #ffcc00;
                    transform: scale(1.1);
                }
                .zoomEffect {
                    transition: transform 0.3s ease;
                }
                .zoomEffect:hover {
                    transform: scale(1.8);
                }
                @media (max-width: 992px) {
                    .navbar-brand span {
                        font-size: 20px;
                    }
                    .navbar .nav-item {
                        font-size: 14px;
                    }
                }
                @media (max-width: 576px) {
                    .navbar-brand span {
                        font-size: 18px;
                    }
                    .navbar .nav-item {
                        font-size: 12px;
                    }
                }
                `}
            </style>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="custom-navbar navbarStyle">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" className="navbar-brand brandStyle">
                        <img
                            src="https://t4.ftcdn.net/jpg/06/58/52/67/240_F_658526752_reKZ5XIBNmCwlkeeAJS5lS1RMUxw6VWV.jpg"
                            alt="Campus Hub Logo"
                            className="zoomEffect"
                            style={{
                                width: '50px',
                                height: 'auto',
                                borderRadius: "60px"
                            }}
                        />
                        <span className='textAnimationStyle'>
                            <span className='eventStyle'>Campus</span>
                            <span className='managementStyle'>Hub</span>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home" className="nav-item navItemStyle" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-item navItemStyle" >Colleges</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="nav-item navItemStyle" >Staff</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-item navItemStyle" >Result</Nav.Link>
                            <Nav.Link as={NavLink} to="/register" className="nav-item navItemStyle" >Profile</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" className="nav-item navItemStyle" >Logout</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin/item" className="nav-item navItemStyle" >Item</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AdminNavbar;