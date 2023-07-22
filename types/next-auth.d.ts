import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      name: string;
      email: string;
      musician: boolean;
      avatar: string;
    }
  }
}


