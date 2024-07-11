import Cookies from 'js-cookie';

const AUTH_TOKEN_COOKIE = 'authToken';

export const login = async (username: string, password: string): Promise<boolean> => {
  if (username === 'user' && password === 'password') {
    const token = 'mockAuthToken';
    Cookies.set(AUTH_TOKEN_COOKIE, token);
    return true;
  }
  return false;
};

export const register = async (username: string, password: string): Promise<boolean> => {
  return true;
};

export const isAuthenticated = (): boolean => {
  return !!Cookies.get(AUTH_TOKEN_COOKIE);
};

export const logout = (): void => {
  Cookies.remove(AUTH_TOKEN_COOKIE);
};
