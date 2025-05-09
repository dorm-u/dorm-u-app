import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table, ListGroup, Button } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import EventItem from '@/components/EventItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const user = session?.user?.email || null;
  let userData = null;
  if (user !== null){
    userData = await prisma.user.findUnique({
      where: { email: user },
    });
  }
  const date = new Date();
  const events = await prisma.event.findMany({
    where: {
      month: date.toLocaleString('en-US', { month: 'long' }),
      year: date.getFullYear(),
    },
  });
  // console.log(stuff);
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <Container className="pt-4 pb-4">
            <Row className="justify-content-center">
              <Col xs={12} md={8}>
                <div className="announcements-box text-center p-4">
                  <h1>Events For {date.toLocaleString('en-US', { month: 'long' })} {date.getFullYear()}</h1>
                </div>
              </Col>
            </Row>
          </Container>
          {userData?.role === 'ADMIN' && (
            <div className="d-flex justify-content-end mb-2">
              <Button variant="primary" href="/addevent">
              Create Event
              </Button>
            </div>
          )}
            <Table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Event Name</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Host</th>
                  {userData?.role === 'ADMIN' && (
                    <th>Edit</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <EventItem 
                  key={event.id} 
                  {...event} 
                  isOwner={userData?.role === 'ADMIN' || userData?.email === event.host} 
                  />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
