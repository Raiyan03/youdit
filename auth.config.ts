import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { loginInputValidation, matchPassword } from "./lib/validation"
import { getUserByEmail } from "./data/user"

export default {
    providers: [ GoogleProvider({
        authorization: {
          params: {
            access_type: "offline",
            prompt: "consent",
            scope: [
                "openid",
                "https://www.googleapis.com/auth/userinfo.email",
                "https://www.googleapis.com/auth/userinfo.profile",
                "https://www.googleapis.com/auth/youtube",
                "https://www.googleapis.com/auth/youtube.upload",
              ].join(" "), // Add additional scopes here
              response: 'code'
          }
        }
      }),
      Credentials({
        async authorize(credentials){
          const validateCredentials = loginInputValidation(credentials);
          if (validateCredentials){
            const {email, password} = credentials;
            const user = await getUserByEmail(email);

            if (!user || !user.password){
              return null;
            }

            const isValid = await matchPassword(user?.password, password);
            if (isValid){
              return user;
            }
            
          }
          return null;
        }
      })]
} satisfies NextAuthConfig