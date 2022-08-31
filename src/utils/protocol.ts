import decode from 'jwt-decode';

interface Token {
  LOGIN_ID: string;
  USER_ROLE: string;
  exp: number;
  iat: number;
  iss: string;
}

export const isTokenExpired = (token: string) => {
  if (!token) {
    return true;
  }

  try {
    const sec = 1000;
    const decoded = decode<Token>(token);
    const now = Math.floor(Date.now() / sec);

    return decoded.exp < now;
  } catch (err) {
    return true;
  }
};
