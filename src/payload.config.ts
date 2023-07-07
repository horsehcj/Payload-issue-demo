import { buildConfig } from 'payload/config';
import path from 'path';
import Examples from './collections/Examples';
import Cities from './collections/Cities';
import Users from './collections/Users';

import { localizationSettings } from "./plugins/localization";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  rateLimit: {
    trustProxy: true,
  },
  collections: [
    Users,
    // Add Collections here
    Examples,
    Cities,
  ],
  localization: localizationSettings,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
