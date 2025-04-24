'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import BioSection from '@/components/BioSection';
import PostFeed from '@/components/PostFeed';

const ProfilePage = () => {
  const user = {
    name: 'Fish Stick',
    subtitle: 'Junior | Gateway House | 2nd Floor',
    image: '/profile-pic.png',
    bio: "Hey! I'm passionate about cat nip, chill vibes, and good treats 🍜",
    posts: [
      { id: 1, content: 'Just got a 3D printer! Printing dorm decorations now 😎', date: 'April 10, 2025' },
      { id: 2, content: 'Movie night on our floor tonight! Bring snacks 🍿', date: 'April 8, 2025' },
    ],
  };

  return (
    <main>
      <section className="page-background py-5">
        <Container>
          <Row className="g-4">
            {/* Profile image and basic info */}
            <Col md={4} className="d-flex flex-column align-items-center">
              <Image
                src={user.image}
                alt={user.name}
                width={300}
                height={300}
                className="profile-pic mb-4"
              />
              <div className="bio-box p-4 mb-4 text-center">
                <h1>{user.name}</h1>
                <p className="mb-0">{user.subtitle}</p>
              </div>
            </Col>

            {/* Bio and Posts using components */}
            <Col md={8}>
              <BioSection bio={user.bio} />
              <PostFeed posts={user.posts} />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ProfilePage;
