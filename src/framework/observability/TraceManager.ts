import { Page } from "@playwright/test";
import * as path from "path";

export class TraceManager {

  static async startTracing(page: Page): Promise<void> {

    await page.context().tracing.start({
      screenshots: true,
      snapshots: true,
      sources: true
    });

  }

  static async stopTracing(page: Page, testName: string): Promise<string> {

    const safeName = testName.replace(/\s+/g, "_");

    const tracePath = path.join(
      process.cwd(),
      "reports",
      "traces",
      `${safeName}_${Date.now()}.zip`
    );

    await page.context().tracing.stop({
      path: tracePath
    });

    return tracePath;

  }

}