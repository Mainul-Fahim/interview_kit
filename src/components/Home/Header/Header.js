import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="px-4">INTERVIEW KIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto p-2">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Questions</Nav.Link>
                <Nav.Link href="#link">Videos</Nav.Link>
                <Nav.Link href="#link">Tips</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Button variant="outline-success">Login</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;