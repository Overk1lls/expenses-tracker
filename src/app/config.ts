import { Nullable } from './types';

export interface Config {
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
}

let config: Nullable<Readonly<Config>> = null;

export const getConfig = (): Readonly<Config> => {
  if (config) {
    return config;
  }
  const apiKey = process.env[`REACT_APP_API_KEY`];
  if (!apiKey) {
    throw new TypeError(`The environment variable ${apiKey} is missing!`);
  }
  const authDomain = process.env[`REACT_APP_AUTH_DOMAIN`];
  if (!authDomain) {
    throw new TypeError(`The environment variable ${authDomain} is missing!`);
  }
  const projectId = process.env[`REACT_APP_PROJECT_ID`];
  if (!projectId) {
    throw new TypeError(`The environment variable ${projectId} is missing!`);
  }
  const storageBucket = process.env[`REACT_APP_STORAGE_BUCKET`];
  if (!storageBucket) {
    throw new TypeError(`The environment variable ${storageBucket} is missing!`);
  }
  const senderId = process.env[`REACT_APP_SENDER_ID`];
  if (!senderId) {
    throw new TypeError(`The environment variable ${senderId} is missing!`);
  }
  const appId = process.env[`REACT_APP_APP_ID`];
  if (!appId) {
    throw new TypeError(`The environment variable ${appId} is missing!`);
  }
  config = {
    firebaseConfig: {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      appId,
      messagingSenderId: senderId,
    },
  };
  return config;
};
