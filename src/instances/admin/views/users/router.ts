import type { RouteRecordRaw } from 'vue-router';
import { useRouterView } from '@admin/hooks';
export const users: RouteRecordRaw = {
  path: '/users',
  meta: {
    menu: {
      label: '用户管理',
      icon: 'chart-graph',
    },
  },
  component: useRouterView(),
  children: [
    {
      path: 'accounts',
      meta: {
        menu: {
          label: '账号管理',
        },
      },
      component: () => import('./accounts/accounts.vue'),
    },
    {
      path: 'roles',
      meta: {
        menu: {
          label: '角色管理',
        },
      },
      component: () => import('./roles/roles.vue'),
    },
  ],
};
