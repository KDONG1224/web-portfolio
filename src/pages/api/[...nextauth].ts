import NextAuth, { User } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 300
  },
  jwt: {
    maxAge: 300
  },
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_API_KEY as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET as string
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_API_KEY as string,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET as string
    })
  ],
  logger: {
    error(code, metadata) {
      console.log(code, 'code_error');
      console.log(metadata, 'metadata_error');
    },
    warn(code) {
      console.log(code, 'warn');
    },
    debug(code, metadata) {
      console.log(code, 'code_debug');
      console.log(metadata, 'metadata_debug');
    }
  },
  callbacks: {
    async session({ session, token }) {
      session.providerId = token.providerId;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      if (token.providerId === 'kakao') {
        session.user = token.user as User;
        session.userId = token.userId;

        session.gender = token.gender;
        session.birthday = token.birthday;
        session.birthyear = token.birthyear;
        session.phone_number = token.phone_number;
        session.ci = token.ci;
      }

      if (token.providerId === 'naver') {
        session.user = token.user as User;
        session.userId = token.userId;

        session.gender = token.gender;
        session.birthday = token.birthday;
        session.birthyear = token.birthyear;
        session.mobile = token.mobile;
      }

      return session;
    },
    async jwt({ token, user, account, profile }: any) {
      if (user) {
        token.user = user;
        token.providerId = account?.provider;
        token.accessToken = account?.access_token;
        token.refreshToken = account?.refresh_token;

        if (account?.provider === 'kakao') {
          token.userId = Number(user.id);
          token.gender = profile?.kakao_account.gender;
          token.birthday = profile?.kakao_account.birthday;
          token.birthyear = profile?.kakao_account.birthyear;
          token.phone_number = profile?.kakao_account.phone_number;
          token.ci = profile?.kakao_account.ci;
        }

        if (account?.provider === 'naver') {
          token.userId = user.id;
          token.gender = profile?.response.gender;
          token.birthday = profile?.response.birthday;
          token.birthyear = profile?.response.birthyear;
          token.mobile = profile?.response.mobile;
        }
      }
      return token;
    }
  }
});
