import { test as base, expect } from "@playwright/test";
import { DataContext } from "@data/DataContext";
// import { ScreenshotManager } from "@framework/observability/ScreenshotManager";
// import { TraceManager } from "@framework//observability/TraceManager";
// import { VideoManager } from "@framework//observability/VideoManager";
import { Logger } from "@framework/reporting/Logger";
import { FrameworkConfigType, getFullConfigForApp } from "@config/framework.config";

type FrameworkFixtures = {
  appConfig: FrameworkConfigType;
};

export const baseTest = base.extend<FrameworkFixtures>({

  // per-test config (enterprise safe)
  appConfig: async ({}, use, testInfo) => {

  // Priority:
  // 1. Project metadata (parallel multi-app)
  // 2. ENV variable (single app run)
  // 3. Default fallback


  const appName = testInfo.project.metadata.app || process.env.TEST_APP;

  if(!appName) {
    throw new Error("TEST_APP is required when running tests. Set it as an environment variable or in the project config.");
  }

  const config = getFullConfigForApp(appName);

  await use(config);
},

  page: async ({ page }, use, testInfo) => {

    const testName = testInfo.title;

    // await TraceManager.startTracing(page);

    try {

      await use(page);

    } finally {

      if (testInfo.status !== testInfo.expectedStatus) {

        Logger.error(`Test failed: ${testName}`);

        // await ScreenshotManager.capture(page, testName);

      }

      // await TraceManager.stopTracing(page, testName);

      // await VideoManager.saveVideo(page, testName);

    }

  }

});

baseTest.beforeEach(async () => {
  DataContext.clear();
});

export { expect };