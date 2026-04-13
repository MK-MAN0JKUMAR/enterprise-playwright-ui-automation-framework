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

export type FrameworkConfigType = EnvConfig & AppConfig;

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

  // Parallel (enterprise-safe)
  static loadFullConfig(): FrameworkConfigType {

    const env = this.loadEnv();

    const appName = process.env.TEST_APP;

    if (!appName) {
      throw new Error("TEST_APP is not defined");
    }

    const appMap: Record<string, AppConfig> = {
      ecommerce,
      orangehrm
    };

    const app = appMap[appName];

    if (!app) {
      throw new Error(`Invalid TEST_APP: ${appName}`);
    }

    return Object.freeze({
      ...env,
      ...app
    });

  }

}

export function getFullConfigForApp(appName: string): FrameworkConfigType {

  const env = FrameworkConfig.loadEnv();

  const appMap: Record<string, AppConfig> = {
    ecommerce,
    orangehrm
  };

  const app = appMap[appName];

  if (!app) {
    throw new Error(`Invalid app: ${appName}`);
  }

  return Object.freeze({
    ...env,
    ...app
  });
}

export const envConfig = FrameworkConfig.loadEnv();
export const appConfig = FrameworkConfig.loadApp();

// For parallel test execution
export const getFullConfig = () => FrameworkConfig.loadFullConfig();