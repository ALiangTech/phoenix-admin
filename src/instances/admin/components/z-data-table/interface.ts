import type { dataTableProps } from 'naive-ui/es/data-table'

export interface Props {
  fetch: Function;
  config: typeof dataTableProps
}