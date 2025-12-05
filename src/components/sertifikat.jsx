import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCertificate } from 'react-icons/fa';

const certificateData = [
  { id: 1, title: 'Google Data Analytics Professional Certificate', issuer: 'Coursera/Google', image: 'https://via.placeholder.com/150x100?text=Cert+1' },
  { id: 2, title: 'Microsoft Power BI Data Analyst', issuer: 'Dicoding', image: 'https://via.placeholder.com/150x100?text=Cert+2' },
  { id: 3, title: 'Fundamental Python for Data Science', issuer: 'DQLab', image: 'https://via.placeholder.com/150x100?text=Cert+3' },
];

const Certificates = () => {
  return (
    <div id="certificates" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-5"><FaCertificate className="me-2 text-warning" /> Sertifikasi</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* Mapping data ke elemen Card (JSX looping) */}
          {certificateData.map((cert) => (
            <Col key={cert.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={cert.image} style={{ height: '150px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text className="text-muted">Diterbitkan oleh: **{cert.issuer}**</Card.Text>
                  <Card.Link href="#" className="text-warning">Lihat Kredensial</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Certificates;