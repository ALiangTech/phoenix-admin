import { Authorizer } from 'casbin.js';
import LocalForage from '@/localforage';
export default async function createCasbinInstance(user: string) {
  const Authorization = (await LocalForage.getItem('jwt')) as string;
  const authorizer = new Authorizer(
    'auto', // mode
    {
      endpoint: `${import.meta.env.VITE_HTTP_URL}/v1/permission`,
      requestHeaders: {
        Authorization: [Authorization],
      },
    },
  );

  await authorizer.setUser(user);
  return authorizer;
}
