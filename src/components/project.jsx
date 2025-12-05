import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';

const projectData = [
  { 
    id: 1, 
    title: 'Analisis Penjualan E-Commerce', 
    tools: ['Python', 'Pandas', 'Matplotlib'], 
    desc: 'Mengolah data transaksi 10.000+ untuk mengidentifikasi tren produk terlaris dan musim penjualan puncak.' 
  },
  { 
    id: 2, 
    title: 'Dashboard Kinerja Pemasaran', 
    tools: ['Power BI', 'SQL Server'], 
    desc: 'Membuat dashboard interaktif untuk melacak KPI pemasaran (CTR, Konversi, ROI) secara real-time.' 
  },
  { 
    id: 3, 
    title: 'Prediksi Churn Pelanggan', 
    tools: ['R', 'Machine Learning', 'ggplot2'], 
    desc: 'Membangun model klasifikasi untuk memprediksi pelanggan yang berpotensi berhenti berlangganan.' 
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-5" style={{ backgroundColor: '#0a1930', color: 'white' }}>
      <Container>
        <h2 className="text-center mb-5"><FaLaptopCode className="me-2 text-warning" /> Proyek Analisis Data</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* Mapping data proyek (JSX looping) */}
          {projectData.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 shadow-lg" style={{ backgroundColor: '#1a2b47', color: 'white' }}>
                <Card.Body>
                  <Card.Title className="text-warning">{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <div className="mb-3">
                    {/* Mapping data tools (JSX looping) */}
                    {project.tools.map((tool, index) => (
                      <Badge bg="secondary" key={index} className="me-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Card.Link href="#" className="text-warning">Lihat di GitHub</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;