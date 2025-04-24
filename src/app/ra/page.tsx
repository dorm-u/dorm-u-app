'use client';

import { useState } from 'react';
import { Container, Row, Col, Form, Tabs, Tab, Button } from 'react-bootstrap';

const dormBoards = [
  { name: 'Gateway', users: 12 },
  { name: 'Hale Aloha', users: 8 },
  { name: 'Frear', users: 10 },
];

const floorBoards = [
  { name: 'Floor 1', users: 5 },
  { name: 'Floor 2', users: 7 },
  { name: 'Floor 3', users: 9 },
];

const initialFeedbackList = [
  { id: 1, message: 'Can we get more quiet hours on weekends?', sender: 'Anonymous', read: false },
  { id: 2, message: 'Shower pressure is low on 2nd floor.', sender: 'Dormie12', read: false },
  { id: 3, message: 'We’d love a movie night!', sender: 'Hannah G.', read: true },
];

const RAPage = () => {
  const [selectedTab, setSelectedTab] = useState<'dorms' | 'floors'>('floors');
  const [selectedBoard, setSelectedBoard] = useState('Floor 1');
  const [announcement, setAnnouncement] = useState('');
  const [target, setTarget] = useState('All');
  const [feedbackList, setFeedbackList] = useState(initialFeedbackList);

  const handleBoardClick = (board: string) => {
    setSelectedBoard(board);
  };

  const handlePost = () => {
    console.log(`Announcement to ${target}:`, announcement);
    setAnnouncement('');
  };

  const markAsRead = (id: number) => {
    setFeedbackList((prev) => prev.map((f) => (f.id === id ? { ...f, read: true } : f)));
  };

  return (
    <main>
      <section className="page-background py-5">
        <Container>
          {/* Header */}
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="p-4 announcements-box mb-4 text-center">
                <h1 className="mb-2" style={{ fontWeight: 700 }}>RA Admin Dashboard</h1>
                <p className="mb-0">
                  <strong>{selectedBoard}</strong>
                  {' '}
                  is currently selected. You can post announcements or view activity.
                </p>
              </div>
            </Col>
          </Row>

          {/* Main Content Row */}
          <Row className="g-4">
            {/* Sidebar */}
            <Col md={4}>
              <div className="p-3 calendar-box">
                <h1 className="mb-3">Boards</h1>
                <Tabs
                  activeKey={selectedTab}
                  onSelect={(k) => setSelectedTab(k as 'dorms' | 'floors')}
                  className="mb-3"
                >
                  <Tab eventKey="dorms" title="Dorms">
                    {dormBoards.map(({ name, users }) => (
                      <div
                        key={name}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleBoardClick(name)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') handleBoardClick(name);
                        }}
                        className={`rounded px-3 py-2 mb-2 ${selectedBoard === name ? 'fw-bold' : ''}`}
                        style={{ backgroundColor: '#a8c6b1', cursor: 'pointer' }}
                      >
                        {name}
                        {' '}
                        <span className="text-muted">
                          (
                          {users}
                          {' '}
                          users)
                        </span>
                      </div>
                    ))}
                  </Tab>
                  <Tab eventKey="floors" title="Floors">
                    {floorBoards.map(({ name, users }) => (
                      <div
                        key={name}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleBoardClick(name)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') handleBoardClick(name);
                        }}
                        className={`rounded px-3 py-2 mb-2 ${selectedBoard === name ? 'fw-bold' : ''}`}
                        style={{ backgroundColor: '#a8c6b1', cursor: 'pointer' }}
                      >
                        {name}
                        {' '}
                        <span className="text-muted">
                          (
                          {users}
                          {' '}
                          users)
                        </span>
                      </div>
                    ))}
                  </Tab>
                </Tabs>
              </div>
            </Col>

            {/* Announcement Panel */}
            <Col md={8}>
              <div className="p-3 announcements-box mb-4">
                <h1 className="mb-3">Create Announcement</h1>
                <Form.Group className="mb-2">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    placeholder="What's the update, RA?"
                    style={{ backgroundColor: '#f0f0e8', border: 'none' }}
                  />
                </Form.Group>
                <Form.Select
                  className="mb-2"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  style={{ backgroundColor: '#f0f0e8', border: 'none' }}
                >
                  <option value="All">All Residents</option>
                  {[...dormBoards, ...floorBoards].map(({ name }) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </Form.Select>
                <Button variant="success" onClick={handlePost}>
                  Post Announcement
                </Button>
              </div>
            </Col>
          </Row>

          {/* Feedback Row */}
          <Row className="mt-4">
            <Col>
              <div className="p-3 calendar-box">
                <h1 className="mb-3">Resident Feedback Inbox</h1>
                {feedbackList.length === 0 ? (
                  <p className="text-muted">No feedback received yet.</p>
                ) : (
                  feedbackList.map((feedback) => (
                    <div
                      key={feedback.id}
                      className="mb-3 p-3 rounded"
                      style={{
                        backgroundColor: feedback.read ? '#a8c6b1' : '#b1f1c0',
                        color: '#024731',
                      }}
                    >
                      <p className="mb-1 fw-bold">{feedback.sender}</p>
                      <p className="mb-2">{feedback.message}</p>
                      <Button
                        size="sm"
                        variant="outline-success"
                        disabled={feedback.read}
                        onClick={() => markAsRead(feedback.id)}
                      >
                        {feedback.read ? 'Read' : 'Mark as Read'}
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default RAPage;
