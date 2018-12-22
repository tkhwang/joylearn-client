import dotenv from 'dotenv';
dotenv.config();

export default function() {
  console.log('[+] REACT_APP_NODE_ENV =', process.env.REACT_APP_NODE_ENV);

  switch (process.env.REACT_APP_NODE_ENV) {
    case 'development':
      return {
        SERVER_URL: 'http://localhost:5000'
      };
    case 'production':
      return {
        SERVER_URL: 'http://:5000'
      };
    default:
      return;
  }
}
