export class DataContext {

  private static store: Map<string, unknown> = new Map();

  static set<T>(key: string, value: T): void {
    this.store.set(key, value);
  }

  static get<T>(key: string): T | undefined {
    return this.store.get(key) as T;
  }

  static clear(): void {
    this.store.clear();
  }

}