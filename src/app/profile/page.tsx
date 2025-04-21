import { Container } from 'react-bootstrap';

import ProfileHeader from '@/components/ProfileHeader';
import BioSection from '@/components/BioSection';
import PostFeed from '@/components/PostFeed';

const ProfilePage = async () => {
  // Fake user for testing
  const user = {
    name: 'Fish Stick',
    subtitle: 'Computer Science • 2nd Floor',
    image: '/profile-pic.png',
    bio: "Hey! I'm passionate about cat nip, chill vibes, and good treats 🍜",
    posts: [
      { id: 1, content: 'Just got a 3D printer! Printing dorm decorations now 😎', date: 'April 10, 2025' },
      { id: 2, content: 'Movie night on our floor tonight! Bring snacks 🍿', date: 'April 8, 2025' },
    ],
  };

  return (
    <main>
      <Container className="pt-4">
        <ProfileHeader user={user} />
        <BioSection bio={user.bio} />
        <PostFeed posts={user.posts} />
      </Container>
    </main>
  );
};

export default ProfilePage;
