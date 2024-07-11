import { useModifyInstanceType } from '@/hooks';

export default function useLogout() {
  const { modifyInstanceType } = useModifyInstanceType();

  function logout() {
    modifyInstanceType('login');
  }

  return { logout };
}
