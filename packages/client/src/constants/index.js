const serverIP = '127.0.0.1';
const serverPort = 4000;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    BASE_URL: `http://${serverIP}:${serverPort}`,
    PUBLIC_URL: `http://${serverIP}:${serverPort}/static/`,
};
  