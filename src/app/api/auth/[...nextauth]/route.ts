import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {User} from 'next-auth'




export const authOptions = {

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

  ],
  
  callbacks: {
  async signIn({ user}:{user:User}) {

    if (user.email === process.env.GITHUBEMAIL) {
      return true
    } else {
      return false
    }
  }
}

}

export default NextAuth(authOptions)

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};