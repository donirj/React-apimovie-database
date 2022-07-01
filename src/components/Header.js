import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return (
    <>
    <header>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/listado'>Listado</Nav.Link>
                <Nav.Link href='/contacto'>Contacto</Nav.Link>
                <Nav.Link href='/detalle'>detalle</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Link to='/'>Home</Link>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        {/* <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/listado'>Listado</Link>
                </li>
                <li>
                    <Link to='/contacto'>Contacto</Link>
                </li>
            </ul>
        </nav> */}
        </Navbar>
    </header>
    </>
  )
}
