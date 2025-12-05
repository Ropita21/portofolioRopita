import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const MyNavbar = ({ activePage, setActivePage }) => {
  // State untuk mengatur apakah menu sedang terbuka atau tertutup
  const [expanded, setExpanded] = useState(false);

  // Fungsi agar saat link diklik, menu hamburger otomatis menutup sendiri (Penting buat HP!)
  const handleNavClick = (page) => {
    setActivePage(page);
    setExpanded(false); // Tutup menu setelah klik
  };

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      fixed="top" 
      className="py-3 navbar-glass"
      expanded={expanded} // State pengontrol
      onToggle={() => setExpanded(!expanded)} // Handler saat tombol hamburger ditekan
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Latar belakang semi-transparan
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Container>
        {/* LOGO BRAND */}
        <Navbar.Brand 
          href="#" 
          onClick={() => handleNavClick('home')}
          className="fw-bold fs-4 d-flex align-items-center"
        >
          <i className="bi bi-bar-chart-line-fill text-warning me-2"></i>
          <span>
            <span className="text-gradient" style={{
               background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent'
            }}>Portofolio</span>
            <span className="text-white">Ropita</span>
          </span>
        </Navbar.Brand>
        
        {/* TOMBOL HAMBURGER (TOGGLE) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        {/* MENU LINK */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            
            {/* LINK 1: HOME */}
            <Nav.Link 
              onClick={() => handleNavClick('home')}
              className={`text-uppercase px-3 ${activePage === 'home' ? 'text-white fw-bold' : 'text-white-50'}`}
            >
              HOME
            </Nav.Link>

            {/* LINK 2: CERTIFICATES */}
            <Nav.Link 
              onClick={() => handleNavClick('certificates')}
              className={`text-uppercase px-3 ${activePage === 'certificates' ? 'text-white fw-bold' : 'text-white-50'}`}
            >
              CERTIFICATES
            </Nav.Link>

            {/* LINK 3: PROJECTS */}
            <Nav.Link 
              onClick={() => handleNavClick('projects')}
              className={`text-uppercase px-3 ${activePage === 'projects' ? 'text-white fw-bold' : 'text-white-50'}`}
            >
              PROJECTS
            </Nav.Link>

            {/* LINK 4: CONTACT (BUTTON) */}
            <Button 
              onClick={() => handleNavClick('contact')}
              className="fw-bold px-4 rounded-pill ms-lg-2 mt-3 mt-lg-0"
              style={{ 
                background: 'linear-gradient(90deg, #FF9000 0%, #FF5000 100%)',
                border: 'none', 
                color: 'white' 
              }}
            >
              CONTACT
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;