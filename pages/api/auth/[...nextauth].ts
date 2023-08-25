import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userClient } from "../../../src/client/User";

const customAuthorize = async (credentials: Record<"email" | "password", string> | undefined) => {
  if (credentials) {
    const user = await userClient.loginUser(credentials);

    return user ?? null;
  }
  return null
}


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      authorize: customAuthorize as any,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/start/zaloguj',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token.user;
      session.token = token.accessToken;
      return session;
    }
  }
}

export default NextAuth(authOptions)