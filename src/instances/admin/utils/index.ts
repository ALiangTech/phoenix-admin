// 驼峰字符串转分隔符分割字符串 itemBgColor => item-bg-color
export function toKebabCase(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
