// 使元素不可操作
import { unref } from 'vue';
import type { Ref } from 'vue'
type Dom = HTMLElement | Ref<HTMLElement> | null;
export  function useInert(dom: Dom, disable: Boolean) {
  const el = unref(dom);
  return {
    inert: () => {
      if (disable) return;
      if (!el) return;
      el.setAttribute("inert", "");
      el.setAttribute("title", "请求加载中,请稍等");
      el.style.cursor = "wait";
    },
    unInert: () => {
      if (disable) return;
      if (!el) return;
      el.removeAttribute("inert");
      el.removeAttribute("title");
      el.style.cursor = "auto";
    },
  };
}