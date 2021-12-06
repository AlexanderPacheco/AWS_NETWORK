import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>Grupo 18</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Reportes" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/reporte/nuevo">Nuevo</Link>
              <Link className="dropdown-item" to="/reporte">Consulta</Link>
            </NavDropdown>
            <NavDropdown title="Asistencias" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/asistencia/nuevo">Nuevo</Link>
              <Link className="dropdown-item" to="/asistencia">Consulta</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;