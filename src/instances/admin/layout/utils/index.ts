import { h } from 'vue';

export function renderIcon(name: string) {
  return () =>
    h('svg', { style: 'width:20px;height:20px' }, [h('use', { href: `#${name}` })]);
}