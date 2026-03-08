export class DateUtils {

  static now(): number {
    return Date.now();
  }

  static timestamp(): string {
    return new Date().toISOString();
  }

  static uniqueId(prefix: string = "id"): string {
    return `${prefix}_${Date.now()}`;
  }

}