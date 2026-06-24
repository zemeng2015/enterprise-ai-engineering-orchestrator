export {};

declare global {
  interface Window {
    pendo?: {
      track(eventName: string, metadata?: Record<string, string | number | boolean>): void;
    };
  }
}
