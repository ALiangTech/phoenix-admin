import { http,to } from '@/axios';
// 获取权限树
interface Note {
  label: number;
  value: string;
  children: Note[];
}
export type RoleCodesTree = Note[];

export async function ApiGetPermissionTree() {
  const [err, data] = await to<RoleCodesTree>(http.get('/pf_admin/api/v1/protected/user/role/tree'));
  return err ? [] : data;
}
// 获取角色列表
export interface RoleListItem {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export async function ApiGetRoleList(params:any) {
  const [err, data] = await to<RoleListItem[]>(http.get('/pf_admin/api/v1/protected/user/role/list', {params}));
  return err ? [] : data;
}


// 创建角色
export interface CreateRoleParams {
  name: string;
  codes: string[];
}
export async function ApiCreateRole(params:CreateRoleParams) {
  const [err, data] = await to<any>(http.post('/pf_admin/api/v1/protected/user/role/create', params));
  return err ? [] : data;
}