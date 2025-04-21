'use client';

import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = () => {
  const [thisWeekDates, setThisWeekDates] = useState<Date[]>([]);
  const [aprilWeeks, setAprilWeeks] = useState<Date[][]>([]);

  useEffect(() => {
    // This Week
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      return d;
    });
    setThisWeekDates(weekDates);

    // April 2025
    const daysInApril = 30;
    const aprilDates = Array.from({ length: daysInApril }, (_, i) => new Date(2025, 3, i + 1));

    // Group into weeks
    const weeks: Date[][] = [];
    let week: Date[] = new Array(7).fill(null);

    aprilDates.forEach((date) => {
      const day = date.getDay();
      week[day] = date;

      if (day === 6 || date.getDate() === daysInApril) {
        weeks.push(week);
        week = new Array(7).fill(null);
      }
    });

    setAprilWeeks(weeks);
  }, []);

  return (
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
          {/* This Week */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={10}>
              <div className="calendar-box p-4 mb-4">
                <h1 className="mb-4">This Week</h1>
                <Row className="text-center">
                  {daysOfWeek.map((day, i) => (
                    <Col key={`this-week-${day}`}>
                      <strong>{day}</strong>
                      <div className="calendar-day mt-2">
                        {thisWeekDates[i] ? thisWeekDates[i].getDate() : ''}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>

          {/* April 2025 */}
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div className="calendar-box p-4">
                <h1 className="mb-4">April 2025</h1>
                {aprilWeeks.map((week) => (
                  <Row className="text-center pt-3" key={week.map((d) => d?.getDate() || '').join('-')}>
                    {daysOfWeek.map((day, i) => (
                      <Col key={week[i]?.toDateString() || `empty-${day}`}>
                        <strong>{day}</strong>
                        <div className="calendar-day mt-2">
                          {week[i] ? week[i].getDate() : ''}
                        </div>
                      </Col>
                    ))}
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Calendar;
