import { Authorizer } from 'casbin.js';
import type { Permission } from './types';
export default function createCasbinInstance(permission: Permission) {
  const authorizer = new Authorizer('manual');
  authorizer.setPermission(permission);
  return authorizer;
}
