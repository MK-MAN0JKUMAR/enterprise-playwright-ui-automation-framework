import { defineConfig } from "@playwright/test";
import { envConfig, appConfig } from "./framework.config";

export default defineConfig({

  testDir: "../tests",

  retries: envConfig.retries,

  workers: envConfig.workers,

  timeout: 60000,

  grep: new RegExp(appConfig.name),

  reporter: [
    ["html", { outputFolder: "../reports/playwright-report" }],
    ["allure-playwright"]
  ],

  use: {

    baseURL: appConfig.baseUrl,

    headless: envConfig.headless,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure"

  },

  projects: [

    {
      name: "chromium",
      use: { browserName: "chromium" }
    },

    
    
    /*
    {
      name: "firefox",
      use: { browserName: "firefox" }
    },

    {
      name: "webkit",
      use: { browserName: "webkit" }
    }
    */
  ]

});