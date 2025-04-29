import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      randomKey: string;
    } & DefaultSession['user'];
    expires: string;
  }
}
