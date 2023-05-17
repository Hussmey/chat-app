import { defaultEnvironment } from "./environment.default";

export const environment = {

  ...defaultEnvironment,
  
  production: true,
  apiUrlFire: 'https://us-central1-chat-app-104fc.cloudfunctions.net',
  stream: {
    key:'asc2smrp6x38'
  }
};


