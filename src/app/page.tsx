'use client';

import { Col, Container, Image, Row } from 'react-bootstrap';
import { CalendarCheck, ChatDots, PersonCircle, Image as ImageIcon } from 'react-bootstrap-icons';

/* The Home page. Before logging in. */
const Home = () => (
  <main>
    <section className="hero">
      <Container className="text-center hero-pulse">
        <Image src="/dormu-logo.png" alt="DormU logo" className="logo" style={{ width: '250px' }} />
        <h2>Welcome to DormU</h2>
        <p>The dorm social media made just for U!</p>
      </Container>
    </section>

    <section className="page-background">
      <Container className="pt-4">
        <Row className="text-center px-1">
          <Col xs={12} md={3} className="mb-4">
            <CalendarCheck size={75} className="mb-1" />
            <h5>Check for real-time Mānoa events happening on campus</h5>
            <ul className="text-start" style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
              <li>Stay updated with campus activities</li>
              <li>Discover club meetings and events</li>
              <li>Never miss a dorm social</li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <ChatDots size={75} className="mb-1" />
            <h5>Make friends & message people on the same floor/dorm</h5>
            <ul className="text-start" style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
              <li>Start chats with neighbors</li>
              <li>Join group discussions</li>
              <li>Break the ice before move-in</li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <PersonCircle size={75} className="mb-1" />
            <h5>Customize your profile to your liking</h5>
            <ul className="text-start" style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
              <li>Add fun bios and interests</li>
              <li>Upload a profile photo</li>
              <li>Let others know your major, floor, etc</li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <ImageIcon size={75} className="mb-1" />
            <h5>Share your artwork, photography, & other content</h5>
            <ul className="text-start" style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
              <li>Post art, poems, or memes</li>
              <li>Get feedback from your dorm mates</li>
              <li>Celebrate and spread student creativity</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
);

export default Home;
