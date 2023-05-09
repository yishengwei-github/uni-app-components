<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:33:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 16:11:23
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ux-view :config="item" v-for="item in dataSource" :key="item?.key ?? ''">
    <ux-general
      :config="item?.children"
      v-if="item?.children && item?.children?.length"
    >
    </ux-general>
  </ux-view>
</template>
<script setup lang="ts">
/**
 * config= [{
 *  type: 'view'
 *  children: [{
 *    type: 'view'
 *  }]
 * }]
 */
import { inject, watch, ref, computed } from "vue";
import { UxGeneralType } from "./types";
import { computedDataSource } from "./hooks";

const props = defineProps({
  config: { type: Array, default: [], required: true },
});
const propsConfig = props.config as Array<UxGeneralType>;
const dataSource = computedDataSource(propsConfig);
const emits = defineEmits([""]);
</script>
<style lang="scss" scoped></style>
