'use server';

import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { Container, Row, Col } from 'react-bootstrap';
import MealCountDisplay from '@/components/MealCountDisplay';
import MealshareForm from '@/components/MealshareForm';
import authOptions from '@/lib/authOptions';

export default async function MealsharePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) return <p className="text-center">Please log in to use the Mealshare program.</p>;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId, 10) },
    select: { mealCount: true },
  });

  return (
    <main>
      <section className="page-background">
        <Container className="pt-4 pb-4">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div className="announcements-box text-center p-4">
                <h1>Mealshare Program</h1>
                <p>
                  Mealshare is a community-driven program that lets students give or request extra
                  meals to support peers in need.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center pt-4">
            <Col xs={12} md={5} className="mb-4">
              <div className="calendar-box p-4 text-center">
                <h5>Your Meal Count</h5>
                <MealCountDisplay count={user?.mealCount ?? 0} />
                <MealshareForm userId={parseInt(userId, 10)} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
