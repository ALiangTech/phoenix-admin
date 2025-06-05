<template>
  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled"
  >
    <slot></slot>
  </Transition>
</template>
<script setup lang="ts">
import { gsap } from 'gsap';
defineOptions({
  name: 'RouterTransition',
});
// 在元素被插入到 DOM 之前被调用
// 用这个来设置元素的 "enter-from" 状态
const t1 = gsap.timeline();
function onBeforeEnter(el: gsap.TweenTarget) {
  t1.set(el, { x: '90vw' });
}

// 在元素被插入到 DOM 之后的下一帧被调用
// 用这个来开始进入动画
function onEnter(el: gsap.TweenTarget, done: () => void) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  t1.fromTo(el, {}, { x: 0, duration: 0.5 });
  t1.fromTo(
    el,
    { scale: 0.85 },
    {
      scale: 1,
      duration: 0.6,
      delay: 0.1,
      onComplete() {
        done();
      },
    },
  );
}

// 当进入过渡完成时调用。
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onAfterEnter() {}

// 当进入过渡在完成之前被取消时调用
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onEnterCancelled() {}

// 在 leave 钩子之前调用
// 大多数时候，你应该只会用到 leave 钩子
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onBeforeLeave() {
  // t1.fromTo(el,{scale: 1 }, { scale: 0.85, duration: 1 })
}

// 在离开过渡开始时调用
// 用这个来开始离开动画
function onLeave(el: gsap.TweenTarget, done: () => void) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  t1.fromTo(el, { scale: 1 }, { scale: 0.85, duration: 0.5 });
  t1.fromTo(
    el,
    { x: 0 },
    {
      x: '-100vw',
      duration: 0.5,
      delay: 0.1,
      onComplete() {
        done();
      },
    },
  );
}

// 在离开过渡完成、
// 且元素已从 DOM 中移除时调用
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onAfterLeave() {}

// 仅在 v-show 过渡中可用
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onLeaveCancelled() {}
</script>
