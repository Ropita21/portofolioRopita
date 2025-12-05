import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const myEmail = "ropitayohanasitumorang@gmail.com";
  const subject = "Tawaran Kerjasama/Peluang Kerja";
  const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    // ID CONTACT PENTING: Supaya tombol navbar bisa scroll ke sini
    <section id="contact" style={{ 
      backgroundColor: '#000000', // Hitam pekat
      padding: '80px 0',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Efek Cahaya Latar Belakang */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 198, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0
      }}></div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            
            {/* Judul Utama */}
            <h2 className="mb-4 fw-bold" style={{
              background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2.5rem'
            }}>
              Let's Connect!
            </h2>

            <p className="lead mb-5" style={{ color: '#adb5bd' }}>
              Tertarik mendiskusikan data, proyek analisis, atau peluang kerja? 
              Mari berkolaborasi!
            </p>

            {/* Kotak Email Glassmorphism */}
            <Card className="p-4 mb-5 border-0 shadow-lg" style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Card.Body>
                <FaEnvelope className="mb-3 text-white" size={40} />
                <h5 className="text-white mb-3">Kirim Email ke:</h5>
                <p className="fw-bold fs-5 mb-4" style={{ color: '#00C6FF', wordBreak: 'break-all' }}>
                  {myEmail}
                </p>

                <Button 
                  href={mailtoLink}
                  className="py-3 px-5 fw-bold rounded-pill shadow"
                  style={{
                    background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
                    border: 'none',
                    color: 'white'
                  }}
                >
                  <FaPaperPlane className="me-2" /> Kirim Email Sekarang
                </Button>
              </Card.Body>
            </Card>

            {/* BAGIAN FIND ME ON YANG DIPERBAIKI AGAR MENYALA */}
            <div className="d-flex justify-content-center align-items-center gap-3">
              <span style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #00C6FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800', // Lebih tebal
                fontSize: '1.5rem', // Lebih besar
                marginRight: '10px'
              }}>
                Find me on:
              </span>
              
              <a href="https://www.linkedin.com/in/ropita/" target="_blank" rel="noreferrer" className="text-white">
                <FaLinkedin size={35} style={{ cursor: 'pointer' }} />
              </a>

              <a href="https://github.com/Ropita21" target="_blank" rel="noreferrer" className="text-white">
                <FaGithub size={35} style={{ cursor: 'pointer' }} />
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;