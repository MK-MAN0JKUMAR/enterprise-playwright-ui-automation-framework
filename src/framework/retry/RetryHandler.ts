export class RetryHandler {

  static async retry<T>(
    operation: () => Promise<T>,
    retries: number = 3,
    delayMs: number = 1000
  ): Promise<T> {

    let lastError: unknown;

    for (let attempt = 1; attempt <= retries; attempt++) {

      try {
        return await operation();
      } catch (error) {

        lastError = error;

        if (attempt === retries) {
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