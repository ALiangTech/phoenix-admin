import 'vue-router';
interface Menu {
  label: string;
  icon?: string | null;
}

declare module 'vue-router' {
  interface RouteMeta {
    code?: string;
    menu?: Menu;
  }
}
