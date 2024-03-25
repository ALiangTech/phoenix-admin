export {};
declare global {
  type PermissionChecker = (code: string | string[]) => boolean;
  interface Window {
    $can: PermissionChecker;
  }
}
