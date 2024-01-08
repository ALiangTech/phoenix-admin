import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
import './style.css';
import MountLoginInstance from './instances/login/login';
import MountAdminInstance from '@admin/admin.ts';

const type = true;
if (type) {
  MountAdminInstance();
} else {
  MountLoginInstance();
}

// 从sessionStorage中获取 type
// type 暂时分 login admin
// 根据type渲染不同的实例
