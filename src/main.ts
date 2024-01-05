import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
import './style.css';
import MountLoginInstance from './instances/login/login';
import MountAdminInstance from '@admin/admin.ts';

MountLoginInstance();

const type = true;
if (type) {
  MountAdminInstance();
} else {
  MountLoginInstance();
}
