import { environment as baseEnvironment } from './environment.base';

const env = {
  production: true,
  api: 'http://fttptracker.azurewebsites.net'
};

export const environment = Object.freeze(Object.assign(env, baseEnvironment));
