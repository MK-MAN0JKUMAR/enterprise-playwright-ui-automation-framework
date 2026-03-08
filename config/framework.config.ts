import dev from "./environments/dev.env";
import qa from "./environments/qa.env";
import stage from "./environments/stage.env";

import ecommerce from "./applications/ecommerce.config";
import orangehrm from "./applications/orangehrm.config";

type EnvConfig = typeof dev;

type AppConfig = {
  name: string;
  baseUrl: string;
  routes?: Record<string, string>;
  credentials?: {
    username: string;
    password: string;
  };
};

class FrameworkConfig {

  private static env: EnvConfig;
  private static app: AppConfig;

  static loadEnv(): EnvConfig {

    if (this.env) return this.env;

    const envName = process.env.TEST_ENV || "dev";

    const envMap: Record<string, EnvConfig> = {
      dev,
      qa,
      stage
    };

    const selected = envMap[envName];

    if (!selected) {
      throw new Error(`Invalid TEST_ENV: ${envName}`);
    }

    this.env = Object.freeze(selected);

    return this.env;
  }

  static loadApp(): AppConfig {

    if (this.app) return this.app;

    const appName = process.env.TEST_APP || "ecommerce";

    const appMap: Record<string, AppConfig> = {
      ecommerce,
      orangehrm
    };

    const selected = appMap[appName];

    if (!selected) {
      throw new Error(`Invalid TEST_APP: ${appName}`);
    }

    this.app = Object.freeze(selected);

    return this.app;
  }

}

export const envConfig = FrameworkConfig.loadEnv();
export const appConfig = FrameworkConfig.loadApp();