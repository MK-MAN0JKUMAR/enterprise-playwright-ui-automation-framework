import { FrameworkConstants } from "../constants/FrameworkConstants";
import { Logger } from "../reporting/Logger";

export class RetryHandler {

  static async retry<T>(
    operation: () => Promise<T>,
    retries: number = FrameworkConstants.RETRY_ATTEMPTS,
    delayMs: number = FrameworkConstants.RETRY_DELAY
  ): Promise<T> {

    let lastError: unknown;

    for (let attempt = 1; attempt <= retries; attempt++) {

      try {

        return await operation();

      } catch (error) {

        lastError = error;

        Logger.warn(`Retry attempt ${attempt} failed`);

        if (attempt === retries) {

          Logger.error("Retry limit reached");

          throw lastError;

        }

        await this.delay(delayMs);

      }

    }

    throw lastError;

  }

  private static async delay(ms: number): Promise<void> {

    return new Promise(resolve => setTimeout(resolve, ms));

  }

}