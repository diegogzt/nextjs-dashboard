import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { authConfig } from "@/auth.config";

const { handlers } = NextAuth({
  ...authConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        return true;
      }
      return true;
    },
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  debug: process.env.NODE_ENV === "development",
});

export const { GET, POST } = handlers;
