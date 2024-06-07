import { createFullPathMenuData } from '@/plugins/routers/utils';
import { expect, test } from 'vitest';
import type { RouteRecordRaw } from 'vue-router';

const testData: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./accounts/accounts.vue'),
    children: [
      {
        path: 'users',
        meta: {
          menu: {
            label: '用户管理',
            icon: 'chart-graph',
          },
        },
        component: null,
        children: [
          {
            path: 'accounts',
            meta: {
              menu: {
                label: '账号管理',
                icon: 'chart-graph',
              },
            },
            component: () => import('./accounts/accounts.vue'),
          },
          {
            path: 'roles',
            meta: {
              menu: {
                label: '角色管理',
                icon: 'chart-graph',
              },
            },
            component: () => import('./roles/roles.vue'),
          },
        ],
      },
    ],
  },
];
const targetData: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./accounts/accounts.vue'),
    children: [
      {
        path: '/users',
        meta: {
          menu: {
            label: '用户管理',
            icon: 'chart-graph',
          },
        },
        component: null,
        children: [
          {
            path: '/users/accounts',
            meta: {
              menu: {
                label: '账号管理',
                icon: 'chart-graph',
              },
            },
            component: () => import('./accounts/accounts.vue'),
          },
          {
            path: '/users/roles',
            meta: {
              menu: {
                label: '角色管理',
                icon: '',
              },
            },
            component: () => import('./roles/roles.vue'),
          },
        ],
      },
    ],
  },
];

test('createFullPathMenuData 函数测试', () => {
  const result = createFullPathMenuData(testData, null);
  expect(JSON.stringify(result)).toBe(JSON.stringify(targetData)); // todo 不知道toEqual为啥对象对比会报错 先这样处理
});
