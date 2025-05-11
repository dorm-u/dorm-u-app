import { getServerSession, Session } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import AddEventForm from '@/components/AddEventForm';

const AddEvent = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session as Session | null);
  return (
    <main>
      <AddEventForm />
    </main>
  );
};

export default AddEvent;
