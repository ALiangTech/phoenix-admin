import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
import './style.css';
import MountLoginInstance from './instances/login/login';
import MountAdminInstance from '@admin/admin.ts';
import LocalForage from '@/localforage';
import to from 'await-to-js';

type InstanceType = 'login' | 'admin';
/**
 * 实例对象，键为实例类型，值为对应实例的函数
 */
const instanceMap: Map<InstanceType, Function> = new Map([
  ['login', MountLoginInstance],
  ['admin', MountAdminInstance],
]);

async function init() {
  const [, type] = await to<InstanceType | undefined | null>(
    LocalForage.getItem('instance-type'),
  );
  // 根据实例类型获取对应的实例函数
  const instanceFunction = type
    ? instanceMap.get(type as InstanceType)
    : instanceMap.get('login');

  if (instanceFunction) {
    await instanceFunction();
  }
}

init().then();
