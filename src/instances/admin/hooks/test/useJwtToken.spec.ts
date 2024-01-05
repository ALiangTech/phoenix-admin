// @vitest-environment happy-dom
import useJwtToken from '../useJwtToken';
import { test, expect } from 'vitest';

test('useJwtToken hooks 测试', () => {
  const { setJwtToken, getJwtToken } = useJwtToken();
  const testJwtToken = '123Ali';
  setJwtToken(testJwtToken);
  const jwtToken = getJwtToken();
  expect(jwtToken).toBe(testJwtToken);
});
