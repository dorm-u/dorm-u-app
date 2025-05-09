'use client';

import { Container, Row, Col, Accordion } from 'react-bootstrap';

export default function FAQPage() {
  return (
    <main>
      <section className="page-background">
        <Container className="pt-4 pb-4">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div className="announcements-box text-center p-4">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about DormU features and usage.</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="pt-2 pb-4">
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={10}>
              <Accordion defaultActiveKey="0" className="faq-accordion">
                <Accordion.Item eventKey="0" className="faq-section">
                  <Accordion.Header>General</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Q: What is DormU?</strong>
                      <br />
                      A community platform for dorm residents and RAs to connect, share events, and communicate.
                    </p>

                    <p>
                      <strong>Q: How do I sign up?</strong>
                      <br />
                      Click &quot;Sign Up&quot; on the homepage and create an account with your email and password.
                      Contact the RAs to assign you the correct dorm and floor.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="faq-section">
                  <Accordion.Header>Features</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Q: What can I do in DormU?</strong>
                      <br />
                      View upcoming events, customize your profile, use floor/private/group chat features,
                      and request meals from other students via our Mealshare program.
                    </p>

                    <p>
                      <strong>Q: Where can I see updates and announcements?</strong>
                      <br />
                      The calendar page contains future events throughout the current week and month as well as
                      RA announcements. Contact the RAs if you want to add an event.
                    </p>

                    <p>
                      <strong>Q: How do I edit my profile?</strong>
                      <br />
                      You can update your profile image, class info, and “About Me.” Floor/building info is fixed.
                    </p>

                    <p>
                      <strong>Q: What is the Mealshare program?</strong>
                      <br />
                      Our Mealshare program allows residents to request or give meals to others in
                      need. You can also see how many meals you currently have here.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="faq-section">
                  <Accordion.Header>Messaging</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Q: How does messaging work?</strong>
                      <br />
                      Use chat rooms for your floor, private DMs, or start group chats.
                    </p>

                    <p>
                      <strong>Q: Can I message people from other floors?</strong>
                      <br />
                      Yes! Private and group messages work across all floors and buildings.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="faq-section">
                  <Accordion.Header>Resident Assistant (RA)</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Q: How do I get RA access?</strong>
                      <br />
                      RA accounts are based on email. Contact support if you believe you should have RA access.
                    </p>

                    <p>
                      <strong>Q: What can RAs do?</strong>
                      <br />
                      Post announcements, facilitate resident feedback, and update the calendar with events around
                      campus, the dorms, or per redisent request.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="faq-section">
                  <Accordion.Header>Support</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Q: Where can I submit complaints or feedback to the RAs?</strong>
                      <br />
                      You can view the list of RAs on the contact page as well as submit a message
                      to notify them.
                    </p>

                    <p>
                      <strong>Q: Where can I get additional help?</strong>
                      <br />
                      Go to the
                      {' '}
                      <a
                        href="https://dorm-u.github.io/contact-us.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#024731] underline hover:text-[#b1f1c0]"
                      >
                        Contact Us
                      </a>
                      {' '}
                      section on the User Guide on our project home page for development or other miscellaneous needs.
                    </p>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
