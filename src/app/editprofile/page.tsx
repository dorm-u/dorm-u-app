import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Profile } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditProfileForm from '@/components/EditProfileForm';

export default async function EditProfilePage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);  

  // If no profile exists, create one with empty values
  let profile: Profile | null = null;
  if (!id) {
    profile = {
      id: -1,
      name: '',
      image: '',
      classes: '',
      aboutme: '',
      grade: 'freshman',
      userId: Number(session.user.id),
    };
  } else {
    profile = await prisma.profile.findUnique({
      where: { id },
    });
  }

  if (!profile) {
    return notFound();
  }

  return (
    <main>
      <EditProfileForm profile={profile} />
    </main>
  );
}
