'use client';

import { useState } from 'react';
import { Container, Row, Col, Form, Tabs, Tab } from 'react-bootstrap';

const dormBoards = ['Gateway', 'Hale Aloha', 'Frear'];
const floorBoards = ['Floor 1', 'Floor 2', 'Floor 3'];

type Message = { id: string; text: string };

const MessagesPage = () => {
  const [selectedTab, setSelectedTab] = useState<'dorms' | 'floors'>('floors');
  const [selectedBoard, setSelectedBoard] = useState('Floor 1');

  const [messagesMap, setMessagesMap] = useState<Record<string, Message[]>>({});
  const [input, setInput] = useState('');

  const handleBoardClick = (board: string) => {
    setSelectedBoard(board);
    if (!messagesMap[board]) {
      setMessagesMap((prev) => ({ ...prev, [board]: [] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newMessage: Message = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2)}`,
        text: input,
      };
      setMessagesMap((prev) => ({
        ...prev,
        [selectedBoard]: [...(prev[selectedBoard] || []), newMessage],
      }));
      setInput('');
    }
  };

  const messages = messagesMap[selectedBoard] || [];

  return (
    <main>
      <section className="page-background py-4">
        <Container className="pt-4 pb-4">
          <Row className="g-4" style={{ minHeight: '80vh' }}>
            {/* Left Sidebar */}
            <Col md={3} className="h-100">
              <div className="p-3 mb-4 announcements-box">
                <h1>Private Messages</h1>
                {[1, 2, 3].map((id) => (
                  <div key={id} className="d-flex align-items-center gap-2 mb-2">
                    <div className="rounded-circle bg-dark" style={{ width: 36, height: 36 }} />
                    <div className="flex-grow-1 rounded px-2 py-1" style={{ backgroundColor: '#b1d1c0' }} />
                  </div>
                ))}
              </div>

              <div className="p-3 calendar-box">
                <h1>Boards</h1>
                <Tabs
                  activeKey={selectedTab}
                  onSelect={(k) => setSelectedTab(k as 'dorms' | 'floors')}
                  className="mb-3"
                >
                  <Tab eventKey="dorms" title="Dorms">
                    {dormBoards.map((dorm) => (
                      <div
                        key={dorm}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleBoardClick(dorm)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') handleBoardClick(dorm);
                        }}
                        className={`rounded px-3 py-2 mb-2 ${selectedBoard === dorm ? 'fw-bold' : ''}`}
                        style={{ backgroundColor: '#a8c6b1', cursor: 'pointer' }}
                      >
                        {dorm}
                      </div>
                    ))}
                  </Tab>
                  <Tab eventKey="floors" title="Floors">
                    {floorBoards.map((floor) => (
                      <div
                        key={floor}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleBoardClick(floor)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') handleBoardClick(floor);
                        }}
                        className={`rounded px-3 py-2 mb-2 ${selectedBoard === floor ? 'fw-bold' : ''}`}
                        style={{ backgroundColor: '#a8c6b1', cursor: 'pointer' }}
                      >
                        {floor}
                      </div>
                    ))}
                  </Tab>
                </Tabs>
              </div>
            </Col>

            {/* Main Chat Panel */}
            <Col md={9} className="h-100">
              <div className="p-3 calendar-box d-flex flex-column h-100">
                {/* Header */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle bg-dark" style={{ width: 50, height: 50 }} />
                  <div
                    className="flex-grow-1 rounded px-3 py-2"
                    style={{
                      backgroundColor: '#b1f1c0',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                    }}
                  >
                    {selectedBoard}
                  </div>

                </div>

                {/* Chat Bubbles */}
                <div className="flex-grow-1 overflow-auto mb-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="mb-2 p-2 rounded ms-auto"
                      style={{
                        backgroundColor: '#024731',
                        color: 'ivory',
                        maxWidth: '60%',
                      }}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <Form onSubmit={handleSubmit} className="mt-auto">
                  <Form.Control
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message ${selectedBoard}...`}
                    className="rounded-pill px-4 py-2"
                    style={{ backgroundColor: '#a8c6b1', border: 'none' }}
                  />
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default MessagesPage;
