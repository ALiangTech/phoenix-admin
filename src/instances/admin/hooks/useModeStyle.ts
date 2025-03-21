import { useThemeVars } from 'naive-ui'


// 暗黑模式切换 不同背景色
export  function useModeStyle() {
  const themeVars = useThemeVars();
  const bgStyle = computed(() => {
    return {
      backgroundColor: themeVars.value.baseColor,
    }
  })
  return {bgStyle,themeVars};
}