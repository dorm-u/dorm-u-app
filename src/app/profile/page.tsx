import { getServerSession } from 'next-auth';
import { Container, Row, Col } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import BioSection from '@/components/BioSection';
import { loggedInProtectedPage } from '@/lib/page-protection';
import PostFeed from '@/components/PostFeed';
import authOptions from '@/lib/authOptions';

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const profile = await prisma.profile.findMany({
    where: {
      owner,
    },
  });

  const user = {
    name: 'Enter Your Name',
    subtitle: 'Your Grade | Gateway House | 2nd Floor',
    image: '/profile-pic.png',
    bio: 'Enter Your Wonderful Bio Here!',
    posts: [
      { id: 1, content: 'Your posts will show here!', date: 'January 1, 2025' },
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
                src={profile[0]?.image || user.image}
                alt={profile[0]?.name || user.name}
                width={300}
                height={300}
                className="profile-pic mb-4"
              />
              <div className="bio-box p-4 mb-4 text-center">
                <h1>{profile[0]?.name || user.name}</h1>
                <p className="mb-0">{profile[0]?.grade || user.subtitle}</p>
              </div>
            </Col>

            {/* Bio and Posts using components */}
            <Col md={8}>
              <BioSection bio={profile[0]?.aboutme || user.bio} />
              <PostFeed posts={user.posts} />
            </Col>
          </Row>

          {/* Edit Profile Button */}
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <a href="/editprofile" className="btn btn-primary">
                Edit Profile
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ProfilePage;
