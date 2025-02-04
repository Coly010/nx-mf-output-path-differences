import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote2',
  exposes: {
    './Routes': 'remote2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
