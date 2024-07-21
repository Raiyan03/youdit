import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import { getUserById } from "./data/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({token, session}) {
      console.log("session", token, session);

      if (token.role && session.user) {
        session.user.role = token.role;
        session.user.id = token.sub;
      }
      console.log("session", session);
      return session;
    },
    async jwt({ token }) {
      if (!token?.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);
      if (!existingUser){
        return token;
      }

      token.role = existingUser.role;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ... authConfig,
})