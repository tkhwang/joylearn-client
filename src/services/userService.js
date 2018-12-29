import http from './httpService';
import config from '../config';
const { SERVER_URL } = config();

// MySQL
const apiEndpoint = SERVER_URL + '/auth/join';
// MongoDB
// const apiEndpoint = SERVER_URL + "/api/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
