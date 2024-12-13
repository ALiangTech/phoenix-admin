<template>
  <div class="card">
    <div class="content">
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          :stroke="themeVars.primaryColorHover"
          stroke-width="3"
          stroke-linecap="butt"
          stroke-linejoin="round"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          />
          <path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></path>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 24 24"
            to="360 24 24"
            dur="12s"
            repeatCount="indefinite"
          />
        </g>
      </svg>

      <p class="para">
        凤凰ADMIN秉持 “以不变应万变”
        的核心设计理念，致力于打造“单体=>微前端”的软件架构，以满足客户对软件交付的极致要求。
        在数据持久化与存储方面，凤凰架构兼具多元与灵活，无缝对接关系型数据库，
        --豆包AI
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
defineOptions({
  name: 'LoginNewsText',
});
const themeVars = useThemeVars();
</script>
<style scoped>
/* From Uiverse.io by gharsh11032000 从这个地方拷贝过来 */
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 324px;
  border-radius: 24px;
  line-height: 1.6;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px;
  border-radius: 22px;
  color: v-bind('themeVars.successColorSuppl');
  overflow: hidden;
  background: v-bind('themeVars.primaryColorPressed');
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content::before {
  position: absolute;
  content: '';
  top: -4%;
  left: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%);
  background: #ced8ff;
  z-index: -1;
  transform-origin: bottom;
  border-radius: inherit;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content::after {
  position: absolute;
  content: '';
  top: -8%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%);
  background: #e7ecff;
  z-index: -2;
  transform-origin: bottom;
  border-radius: inherit;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content svg {
  width: 48px;
  height: 48px;
}

.content .para {
  z-index: 1;
  opacity: 1;
  font-size: 18px;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content .link {
  z-index: 1;
  color: #fea000;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content .link:hover {
  text-decoration: underline;
}

.card:hover {
  transform: translate(0, -16px);
}

.card:hover .content::before {
  rotate: -8deg;
  top: 0;
  width: 100%;
  height: 100%;
}

.card:hover .content::after {
  rotate: 8deg;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
