import jwtDecode from 'jwt-decode';
import http from './httpService';
import config from '../config';
const { SERVER_URL } = config();

const TOKEN_KEY = 'token';

http.setJwt(getJwt());

export async function login(email, password) {
  // MySQL
  const apiEndpoint = SERVER_URL + '/auth/login';
  // MongoDB
  // const apiEndpoint = SERVER_URL + '/api/auth';

  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

export async function loginSocial(site) {
  const { data: jwt } = await http.get(`${SERVER_URL}/auth/${site}`);
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export default {
  login,
  loginWithJwt,
  loginSocial,
  // loginKakao,
  // loginGithub,
  logout,
  getCurrentUser,
  getJwt
};
