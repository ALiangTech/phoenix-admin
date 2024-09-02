import type { PermissionChecker } from '@/global';

export {};
declare module 'vue' {
  interface ComponentCustomProperties {
    $can: PermissionChecker;
  }
}