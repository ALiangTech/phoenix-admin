// 在接口返回未登录情况下面 执行back
const LOGIN_PATHNAME = 'login';
export default function useBackToLogin() {
  // 获取当前的域名 并 拼接上login
  // todo 重复刷新问题 login页面禁止刷新
  const { origin } = window.location;
  const back = () => {
    window.location.href = `${origin}/${LOGIN_PATHNAME}`;
    window.open(`${origin}/${LOGIN_PATHNAME}`, '_self '); // 页面刷成登录界面
  };
  return { back };
}
