export namespace MenuComponent {
  interface MenuItem {
    label: string;
    path: string;
    icon: string;
  }
  export interface Props {
    menuList: MenuItem[];
  }
}
