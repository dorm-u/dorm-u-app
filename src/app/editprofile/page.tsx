import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Profile } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditProfileForm from '@/components/EditProfileForm';

export default async function EditProfilePage() {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      expires: string;
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );

  const owner = session?.user?.email || '';

  // If no profile exists, create one with empty values
  let profiles = await prisma.profile.findMany({
    where: { owner },
  });

  let profile = profiles[0] || null;
  
  if (!profile) {
    profile = {
      id: -1,
      name: '',
      image: '',
      classes: '',
      aboutme: '',
      grade: 'freshman',
      owner: session?.user?.email || '',
    };
  } 

  return (
    <main>
      <EditProfileForm profile={profile} />
    </main>
  );
}
