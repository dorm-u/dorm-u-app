'use client';

import Image from 'next/image';

interface User {
  image: string;
  name: string;
  subtitle: string;
}

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => (
  <div className="text-center mb-4">
    <Image
      src={user.image}
      alt="Profile"
      width={120}
      height={120}
      className="profile-pic mb-2"
    />
    <h2><strong>{user.name}</strong></h2>
    <p>{user.subtitle}</p>
  </div>
);

export default ProfileHeader;
