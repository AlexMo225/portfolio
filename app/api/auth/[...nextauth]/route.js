import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'



const authOptions = {

  providers: [

    GoogleProvider({

      clientId: process.env.GOOGLE_CLIENT_ID,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    }),

  ],

  session: {

    strategy: 'jwt',

  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {

    async signIn({ user: { email } }) {
      // Liste des emails autorisés
      const allowedEmails = [process.env.EMAIL_ADMIN, "caronnet@gmail.com"];
      return allowedEmails.includes(email);
    },

    async redirect({ url, baseUrl }) {

      return baseUrl + '/dashboard'

    },

    async session({ session }) {

      return session

    },

  },

}



const handler = NextAuth(authOptions)



export { handler as GET, handler as POST, authOptions } 