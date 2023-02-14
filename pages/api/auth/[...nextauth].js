import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const optionAuth = {
  secret: 'ae7RKiLBtXGa6d+bDv9YfhAPzpwbZyqZ8PWcDL0ZYhw=',
  providers: [
    GoogleProvider({
      clientId:
        '40097881098-nkrqvefgra6bib03dp2ju1os493ig2dp.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
};

export default NextAuth(optionAuth);
