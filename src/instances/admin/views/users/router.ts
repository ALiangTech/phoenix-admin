import type { RouteRecordRaw } from 'vue-router';

export const users: RouteRecordRaw = {
  path: '/users',
  name: 'users',
  meta: {
    code: 'b',
    menu: {
      label: '用户管理',
      icon: 'chart-graph',
    },
  },
  component: () => import('./index.vue'),
  children: [
    {
      path: 'accounts',
      name: 'accounts',
      meta: {
        menu: {
          label: '账号管理',
        },
      },
      component: () => import('./accounts/accounts.vue'),
    },
    {
      path: 'roles',
      name: 'roles',
      meta: {
        menu: {
          label: '角色管理',
        },
      },
      component: () => import('./roles/roles.vue'),
    },
  ],
};
