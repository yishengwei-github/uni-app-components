<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:33:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 15:28:42
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ux-icon
    v-if="view_type === 'icon'"
    :style="view_style"
    :class="view_class"
    :name="icon.name"
  ></ux-icon>
  <ux-button
    v-if="view_type === 'button'"
    :style="view_style"
    :class="view_class"
    :type="button.type"
    >111</ux-button
  >
</template>
<script setup lang="ts">
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
// 例如：import '组件名称' from '组件路径';
// import 引入的组件需要注入到对象中才能使用
import { inject, watch, ref, defineAsyncComponent, reactive } from "vue";
import { UxViewType, UxIconType, UxButtonType } from "./types";
import { hookViewConfigCommon, hookViewConfigProps } from "./hooks";
import { uxIcon, uxButton } from "./imports";
const props = defineProps({
  config: { type: Object, default: {}, required: true },
});
const propsConfig = props.config as UxViewType;
const { view_type, view_style, view_class } = hookViewConfigCommon(propsConfig);
var icon;
var button;

const emits = defineEmits([""]);

watch(
  () => view_type.value,
  (val) => {
    switch (val) {
      case "icon":
        icon = hookViewConfigProps<UxIconType>(
          props.config.props as UxIconType
        );
        break;
      case "button":
        button = hookViewConfigProps<UxButtonType>(
          props.config.props as UxButtonType
        );
        break;
      default:
        throw new Error("必须定义type指向某个组件，并符合现有组件名称");
    }
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped></style>
