import { Page } from "@playwright/test";
import * as path from "path";

export class ScreenshotManager {

  static async capture(page: Page, testName: string): Promise<string> {

    const safeName = testName.replace(/\s+/g, "_");

    const filePath = path.join(
      process.cwd(),
      "reports",
      "screenshots",
      `${safeName}_${Date.now()}.png`
    );

    await page.screenshot({
      path: filePath,
      fullPage: true
    });

    return filePath;

  }

}