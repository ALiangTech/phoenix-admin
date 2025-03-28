import { h } from 'vue';

export function renderIcon(name: string) {
  return () =>
    h('svg', { class: 'iconpark-icon' }, [h('use', { href: `#${name}` })]);
}