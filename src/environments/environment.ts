import { environment as baseEnvironment } from './environment.base';

const env = {
  production: false,
  api: 'http://localhost:3327/'
};

export const environment = Object.freeze(Object.assign(env, baseEnvironment));