import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaChartBar } from 'react-icons/fa'; 

const MyNavbar = () => {
  return ( // Dimulai dari sini, kita menggunakan JSX
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#0a1930' }}>
      <Container>
        {/* Menggunakan sintaks tag HTML/Komponen (e.g., <Navbar.Brand>) */}
        <Navbar.Brand href="#home">
          {/* JSX memungkinkan kita mencampurkan JavaScript (variabel/ekspresi) dalam kurung kurawal {} */}
          <FaChartBar size={24} color="#ff9000" style={{ marginRight: '8px' }} />
          **B.H. Portfolio**
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Menggunakan atribut standar HTML (href, className) dan atribut khusus komponen React-Bootstrap (variant) */}
            <Nav.Link href="#home" className="text-white mx-2">HOME</Nav.Link>
            {/* ... elemen navigasi lainnya ... */}
            <Nav.Link href="#contact" className="p-0 ms-3">
              <Button variant="warning" className="fw-bold py-2 px-4" style={{ backgroundColor: '#ff9000', borderColor: '#ff9000', color: 'white' }}>
                CONTACT
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;