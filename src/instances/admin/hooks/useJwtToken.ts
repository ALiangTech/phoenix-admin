// 操作 jwtToken
// 检测 jwtToken
import type { RemovableRef } from '@vueuse/core';
import { useStorage } from '@vueuse/core';
type JwtToken = RemovableRef<string>;
let jwtToken: JwtToken | undefined;
export default function useJwtToken() {
  // 存放
  const setJwtToken = (value: string) => {
    jwtToken = useStorage('jwtToken', value, window.sessionStorage);
  };
  const getJwtToken = () => {
    return jwtToken?.value;
  };
  return { setJwtToken, getJwtToken };
}
