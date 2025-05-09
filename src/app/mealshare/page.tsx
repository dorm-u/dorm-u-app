'use client';

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function MealsharePage() {
  const [mealCount, setMealCount] = useState(5); // Example starting count
  const [giveAmount, setGiveAmount] = useState('');
  const [requestAmount, setRequestAmount] = useState('');
  const [editCount, setEditCount] = useState('');

  const handleGiveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = Number(giveAmount);
    if (!Number.isNaN(amt) && amt > 0 && amt <= mealCount) {
      setMealCount(mealCount - amt);
      setGiveAmount('');
    }
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = Number(requestAmount);
    if (!Number.isNaN(amt) && amt > 0) {
      setMealCount(mealCount + amt);
      setRequestAmount('');
    }
  };

  const handleEditCountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCount = Number(editCount);
    if (!Number.isNaN(newCount) && newCount >= 0) {
      setMealCount(newCount);
      setEditCount('');
    }
  };

  return (
    <main className="page-background py-4">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <div className="announcements-box p-4 text-center">
              <h1>Mealshare Program</h1>
              <p>
                Our Mealshare program allows residents to request or give meals to others in
                need. You can also see how many meals you currently have here.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={4}>
            <div className="calendar-box p-4 text-center">
              <h5>Current Meal Count</h5>
              <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{mealCount}</p>
              <Form onSubmit={handleEditCountSubmit}>
                <Form.Group controlId="editMealCount">
                  <Form.Label>Edit your meal count</Form.Label>
                  <Form.Control
                    type="number"
                    value={editCount}
                    onChange={(e) => setEditCount(e.target.value)}
                    placeholder="Enter new count"
                  />
                </Form.Group>
                <Button variant="success" type="submit" className="mt-2">
                  Update
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={4}>
            <div className="calendar-box p-4">
              <h5>Give a Meal</h5>
              <Form onSubmit={handleGiveSubmit}>
                <Form.Group controlId="giveMeal">
                  <Form.Label>How many meals do you want to give?</Form.Label>
                  <Form.Control
                    type="number"
                    value={giveAmount}
                    onChange={(e) => setGiveAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                  Give
                </Button>
              </Form>
            </div>
          </Col>

          <Col md={4}>
            <div className="calendar-box p-4">
              <h5>Request a Meal</h5>
              <Form onSubmit={handleRequestSubmit}>
                <Form.Group controlId="requestMeal">
                  <Form.Label>How many meals do you need?</Form.Label>
                  <Form.Control
                    type="number"
                    value={requestAmount}
                    onChange={(e) => setRequestAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </Form.Group>
                <Button variant="warning" type="submit" className="mt-2">
                  Request
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
