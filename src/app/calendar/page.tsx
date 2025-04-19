'use client';

import { Col, Container, Row } from 'react-bootstrap';

/* The Home page. Before logging in. */
const Home = () => (
  <main>
    <section className="page-background">
      <Container className="pt-4 pb-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="announcements-box text-center p-4">
              <h1>Announcements</h1>
              <p>Stay tuned for upcoming events, updates, and dorm happenings!</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-2 pb-4">
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10}>
            <div className="calendar-box p-4 mb-4">
              <h1 className="mb-4">This Week</h1>
              <Row className="text-center">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <Col key={day}>
                    <strong>{day}</strong>
                    <div className="calendar-day mt-2" />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="calendar-box p-4">
              <h1 className="mb-4">April 2025</h1>
              <Row className="text-center">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <Col key={day}>
                    <strong>{day}</strong>
                    <div className="calendar-day mt-2" />
                  </Col>
                ))}
              </Row>
              <Row className="text-center pt-3">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <Col key={day}>
                    <strong>{day}</strong>
                    <div className="calendar-day mt-2" />
                  </Col>
                ))}
              </Row>
              <Row className="text-center pt-3">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <Col key={day}>
                    <strong>{day}</strong>
                    <div className="calendar-day mt-2" />
                  </Col>
                ))}
              </Row>
              <Row className="text-center pt-3">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <Col key={day}>
                    <strong>{day}</strong>
                    <div className="calendar-day mt-2" />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  </main>
);

export default Home;
