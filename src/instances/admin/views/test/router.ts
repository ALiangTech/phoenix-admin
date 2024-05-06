import type { RouteRecordRaw } from 'vue-router';
import Test from '@admin/views/test/index.vue';
import Test2 from '@admin/views/test/test2.vue';

const login: RouteRecordRaw = {
  path: '/test',
  name: 'test',
  meta: {
    code: 'c',
    menu: {
      label: '测试管理',
      icon: 'chart-graph',
    },
  },
  component: Test,
  children: [
    {
      path: 'test2',
      name: 'test2',
      meta: {
        code: 'xx',
        menu: {
          label: 'test2',
        },
      },
      component: Test2,
    },
  ],
};

export default login;
