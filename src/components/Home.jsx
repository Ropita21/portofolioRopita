import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaChartLine } from 'react-icons/fa';

// Gaya untuk latar belakang dan pseudo-elemen bintang
const homeStyle = {
  backgroundColor: '#0a1930', // Biru gelap
  color: 'white',
  padding: '100px 0',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden'
};

// Komponen Bintang sederhana (JSX)
const Star = ({ top, left, size, color }) => (
  <div 
    style={{
      position: 'absolute',
      top: top,
      left: left,
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: '50%',
      transform: 'rotate(45deg)',
      opacity: 0.8
    }} 
  />
);

const Home = () => {
  // Ganti dengan URL gambar Anda
  const imageUrl = "https://via.placeholder.com/300x300.png?text=FOTO+ANDA"; 
  
  return (
    <div id="home" style={homeStyle}>
      {/* Elemen JSX untuk Bintang */}
      <Star top="10%" left="15%" size="10px" color="#ff9000" />
      <Star top="25%" left="45%" size="12px" color="white" />
      <Star top="75%" left="30%" size="8px" color="#ff9000" />
      <Star top="85%" left="10%" size="15px" color="white" />
      
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="lead" style={{ fontSize: '1.2rem' }}>Hi, I'm</p>
            <h1 className="display-4 fw-bold mb-3">ROPITA Y SITUMORANG</h1>
            <h4 className="text-warning mb-4">Empowering Businesses with Insights</h4>
            <p className="mb-4">
              <small>Mahasiswa Data Analyst yang fokus pada pengolahan data besar, visualisasi, dan pemodelan statistik untuk pengambilan keputusan yang lebih baik.</small>
            </p>
            {/* Tombol dengan ikon dan link download */}
            <Button 
              variant="warning" 
              size="lg" 
              className="fw-bold py-2 px-4 me-3" 
              style={{ backgroundColor: '#ff9000', borderColor: '#ff9000', color: 'white' }}
              href="/resume.pdf"
              download
            >
              RESUME <FaDownload className="ms-2" />
            </Button>
          </Col>

          <Col md={6} className="text-center position-relative">
            {/* Foto dan outline oranye (JSX styling) */}
            <div style={{ 
              display: 'inline-block', 
              borderRadius: '50%', 
              border: '5px solid #ff9000', 
              padding: '5px',
              backgroundColor: 'white'
            }}>
              <img 
                src={imageUrl} 
                alt="Brandon A. Harper" 
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  borderRadius: '50%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
            
            {/* Kotak Jabatan oranye di bawah (JSX styling) */}
            <div style={{
              position: 'absolute',
              bottom: '-30px', 
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#ff9000',
              padding: '10px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <FaChartLine className="me-2" /> **Data Analyst**
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;