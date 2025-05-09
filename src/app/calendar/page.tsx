'use client';

import { prisma } from '@/lib/prisma';
import { Event } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = () => {
  const [thisWeekDates, setThisWeekDates] = useState<Date[]>([]);
  const [mayWeeks, setMayWeeks] = useState<Date[][]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await prisma.event.findMany({
        where: {
          month: new Date().toLocaleString('en-US', { month: 'long' }),
          year: new Date().getFullYear(),
        },
      });
      setEvents(fetchedEvents);
    };
    fetchEvents().then((fetchedEvents) => {
      console.log('Fetched events:', fetchedEvents);
    });

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
    const daysInMay = 30;
    const mayDates = Array.from({ length: daysInMay }, (_, i) => new Date(2025, 4, i + 1));

    // Group into weeks
    const weeks: Date[][] = [];
    let week: Date[] = new Array(7).fill(null);

    mayDates.forEach((date) => {
      const day = date.getDay();
      week[day] = date;

      if (day === 6 || date.getDate() === daysInMay) {
        weeks.push(week);
        week = new Array(7).fill(null);
      }
    });

    setMayWeeks(weeks);
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
              <h1 className="mb-4">
                This Week
                <button
                type="button"
                className="btn btn-primary float-end"
                onClick={() => window.location.href = '/events'}
                >
                See All Events
                </button>
              </h1>

              <Row className="text-center">
                {daysOfWeek.map((day, i) => (
                <Col key={`this-week-${day}`}>
                  <strong>{day}</strong>
                  <div className="calendar-day mt-2" style={{ overflow: 'auto' }}>
                  {thisWeekDates[i] ? thisWeekDates[i].getDate() : ''}
                  <br />
                  <ul>
                    {events
                    .filter((event) => {
                      const eventDate = new Date(event.day);
                      return (
                      thisWeekDates[i] &&
                      eventDate.getDate() === thisWeekDates[i].getDate() &&
                      eventDate.getMonth() === thisWeekDates[i].getMonth() &&
                      eventDate.getFullYear() === thisWeekDates[i].getFullYear()
                      );
                    })
                    .map((event) => (
                      <li key={event.id}>{event.name}</li>
                    ))}
                  </ul>
                  </div>
                </Col>
                ))}
              </Row>
              </div>
            </Col>
          </Row>

          {/* May 2025 */}
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div className="calendar-box p-4">
                <h1 className="mb-4">May 2025</h1>
                {mayWeeks.map((week) => (
                  <Row className="text-center pt-3" key={week.map((d) => d?.getDate() || '').join('-')}>
                    {daysOfWeek.map((day, i) => (
                      <Col key={week[i]?.toDateString() || `empty-${day}`}>
                        <strong>{day}</strong>
                        <div className="calendar-day mt-2">
                            {week[i] ? (
                            <>
                              {week[i].getDate()}
                              <br />
                              <ul>
                              {events
                                .filter((event) => {
                                const eventDate = new Date(event.day);
                                return (
                                  eventDate.getDate() === week[i].getDate() &&
                                  eventDate.getMonth() === week[i].getMonth() &&
                                  eventDate.getFullYear() === week[i].getFullYear()
                                );
                                })
                                .map((event) => (
                                <li key={event.id}>{event.name}</li>
                                ))}
                              </ul>
                            </>
                            ) : ''}
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
