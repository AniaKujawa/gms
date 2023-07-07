import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userClient } from "../../../src/client/User";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        console.log(credentials);
        if (credentials) {
          const token = await userClient.loginUser(credentials);

          return token ?? null;
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/start/zaloguj',
  },
}

export default NextAuth(authOptions)