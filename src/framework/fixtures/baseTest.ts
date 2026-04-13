import { test as base, expect } from "@playwright/test";
import { DataContext } from "../../data/DataContext";
// import { ScreenshotManager } from "../observability/ScreenshotManager";
// import { TraceManager } from "../observability/TraceManager";
// import { VideoManager } from "../observability/VideoManager";
import { Logger } from "../reporting/Logger";
import { FrameworkConfigType, getFullConfigForApp } from "@config/framework.config";

type FrameworkFixtures = {
  appConfig: FrameworkConfigType;
};

export const baseTest = base.extend<FrameworkFixtures>({

  // per-test config (enterprise safe)
  appConfig: async ({}, use, testInfo) => {

  const appName = testInfo.project.metadata.app;

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