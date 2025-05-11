'use client';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function ContactPage() {
  return (
    <main>
      <section className="page-background">
        <Container className="pt-4 pb-4">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div className="announcements-box text-center p-4">
                <h1>Contact Us</h1>
                <p>Have any questions? Give us a call or submit an online inquiry!</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="pb-5">
          <Row className="g-4" style={{ minHeight: '70vh' }}>
            <Col md={4}>
              <div className="calendar-box p-4 h-100">
                <h2 className="mb-4 text-center">RA Contacts</h2>
                <div className="mb-3">
                  <h5 className="mb-1 contact-ra-name">Potato Stick</h5>
                  <p className="mb-1"> 📧 potatostick@foo.com</p>
                  <p>📞 (808) 123-4567</p>
                </div>
                <div className="mb-3">
                  <h5 className="mb-1 contact-ra-name">Beef Stick</h5>
                  <p className="mb-1"> 📧 beefstick@foo.com</p>
                  <p>📞 (808) 987-6543</p>
                </div>
                <div className="mb-3">
                  <h5 className="mb-1 contact-ra-name">Lemon Stick</h5>
                  <p className="mb-1"> 📧 lemonstick@foo.com</p>
                  <p>📞 (808) 543-9876</p>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="calendar-box p-4 h-100">
                <h2 className="mb-4 text-center">Online Inquiry</h2>
                <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      style={{ backgroundColor: '#b1f1c0', color: 'black' }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      style={{ backgroundColor: '#b1f1c0', color: 'black' }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhone">
                    <Form.Control
                      type="tel"
                      placeholder="Your Phone"
                      style={{ backgroundColor: '#b1f1c0', color: 'black' }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your Message"
                      style={{ backgroundColor: '#b1f1c0', color: 'black' }}
                    />
                  </Form.Group>

                  <div style={{ textAlign: 'left' }}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: '#b1f1c0', borderColor: '#b1f1c0', color: '#024731', fontWeight: 'bold',
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
