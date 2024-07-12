import GoogleProvider from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

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
      })]
} satisfies NextAuthConfig