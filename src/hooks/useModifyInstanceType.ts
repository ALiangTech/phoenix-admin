import { useStorage } from '@vueuse/core';

export type InstanceType = 'login' | 'admin';

const instanceType = useStorage<InstanceType>('instanceType', 'login');

export function useModifyInstanceType() {
  function modifyInstanceType(value: InstanceType) {
    instanceType.value = value;
  }

  return {
    instanceType,
    modifyInstanceType,
  };
}
