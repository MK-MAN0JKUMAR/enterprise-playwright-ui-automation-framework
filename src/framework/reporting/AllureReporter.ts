import { test } from "@playwright/test";
import * as fs from "fs";

export class AllureReporter {

  static async attachFile(name: string, filePath: string, contentType: string): Promise<void> {

    if (!fs.existsSync(filePath)) {
      return;
    }

    await test.info().attach(name, {
      path: filePath,
      contentType
    });

  }

  static async attachJson(name: string, data: unknown): Promise<void> {

    await test.info().attach(name, {
      body: Buffer.from(JSON.stringify(data, null, 2)),
      contentType: "application/json"
    });

  }

  static async attachText(name: string, text: string): Promise<void> {

    await test.info().attach(name, {
      body: Buffer.from(text),
      contentType: "text/plain"
    });

  }

}