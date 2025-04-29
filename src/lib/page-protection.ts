import { redirect } from 'next/navigation';
import { Role } from '@prisma/client';
import type { Session } from 'next-auth';

/**
 * Redirects to the login page if the user is not logged in.
 */
export const loggedInProtectedPage = (session: Session | null) => {
  if (!session || !session.user?.id) {
    redirect('/auth/signin');
  }
};

/**
 * Redirects to the login page if the user is not logged in.
 * Redirects to the not-authorized page if the user is not an admin.
 */
export const adminProtectedPage = (session: Session | null) => {
  loggedInProtectedPage(session);
  if (session && session.user.randomKey !== Role.ADMIN) {
    redirect('/not-authorized');
  }
};
