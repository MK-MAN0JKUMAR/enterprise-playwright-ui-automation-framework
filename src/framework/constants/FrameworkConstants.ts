export class FrameworkConstants {

  // Default timeout for UI operations
  static readonly DEFAULT_TIMEOUT = 10000;

  // Page navigation timeout
  static readonly NAVIGATION_TIMEOUT = 60000;

  static readonly ACTION_TIMEOUT = 10000;

  // Retry configuration
  static readonly RETRY_ATTEMPTS = 2;
  static readonly RETRY_DELAY = 500;

  // Default viewport
  static readonly VIEWPORT = {
    width: 1440,
    height: 900
  };

  // Reporting folders
  static readonly REPORT_PATHS = {
    screenshots: "reports/screenshots",
    videos: "reports/videos",
    traces: "reports/traces"
  };

}