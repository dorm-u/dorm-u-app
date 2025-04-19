import { Col, Container } from 'react-bootstrap';

const Footer = () => (
  <footer>
    <Container>
      <Col className="text-center py-3">
        <p className="mb-0 fw-semibold" style={{ color: 'var(--nat-navbar-text-color)', fontSize: '0.9rem' }}>
          Built by UH Mānoa students for ICS 314: Software Engineering • Spring 2025
        </p>
        <p className="mt-1 fw-semibold" style={{ color: 'var(--nat-navbar-text-color)', fontSize: '0.85rem' }}>
          Information & Computer Sciences: 1680 East-West Rd, Honolulu, HI 96822
        </p>
        <a
          href="https://dorm-u.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="d-block mt-2 fw-semibold"
          style={{
            fontSize: '0.85rem',
            color: 'var(--nat-navbar-text-color)',
            textDecoration: 'none',
          }}
        >
          View Project Github Page ↗
        </a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
