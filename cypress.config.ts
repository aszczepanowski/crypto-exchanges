import * as dotenv from 'dotenv';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      const dotenvConfig = dotenv.config();

      config.env = process.env;

      return {
        ...config,
        env: {
          ...config.env,
          ...dotenvConfig.parsed
        }
      };
    }
  }
});
