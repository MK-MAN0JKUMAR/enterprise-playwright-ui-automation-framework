import { Page } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

export class VideoManager {

  static async saveVideo(page: Page, testName: string): Promise<string | null> {

    const video = page.video();

    if (!video) {
      return null;
    }

    const originalPath = await video.path();

    const safeName = testName.replace(/\s+/g, "_");

    const newPath = path.join(
      process.cwd(),
      "reports",
      "videos",
      `${safeName}_${Date.now()}.webm`
    );

    fs.copyFileSync(originalPath, newPath);

    return newPath;

  }

}