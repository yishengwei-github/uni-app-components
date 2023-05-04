<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-20 15:43:16
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-04 09:33:43
 * @FilePath: /private-mobile-platform/packages/common/components/common/list/pmslc-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <mescroll-body
    :style="mescroll_style"
    :class="mescroll_class"
    ref="mescrollRef"
    :safearea="true"
    @init="onMescrollInit"
    @up="onLoadMore"
    @down="onRefresh"
    :up="mescroll_up"
    :down="mescroll_down"
  >
    <view
      :style="item_style"
      class="u-p-24"
      v-for="(item, index) in computedDataSource"
      :key="item?.key ?? ''"
      :data-index="index"
      @click.stop="itemClick(item)"
    >
      <slot :value="item"></slot>
    </view>
  </mescroll-body>
</template>
<script setup lang="ts">
import { hookMescrollConfig, hookItemConfig } from "./hooks";
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
// 例如：import '组件名称' from '组件路径';
// import 引入的组件需要注入到对象中才能使用
import {
  inject,
  watch,
  ref,
  reactive,
  computed,
  getCurrentInstance,
  defineAsyncComponent,
} from "vue";
import type { UxListConfig } from "./types";
import * as $ui from "../utils";

const MescrollBody = defineAsyncComponent(
  () => import("mescroll-uni/mescroll-body.vue")
);

$ui.register();

const props = defineProps({
  config: { type: Object, default: {}, required: true },
});
const propsConfig = props.config as UxListConfig;

const {
  mescroll_style,
  mescroll_class,
  mescroll_up,
  mescroll_down,
  response,
  reloadData,
  onMescrollInit,
  onLoadMore,
  onRefresh,
} = hookMescrollConfig(propsConfig);

const computedDataSource = computed(() => {
  console.log("response", response);
  if (propsConfig?.requestSelf) {
    return propsConfig?.dataSource?.value?.map((it) => {
      return {
        ...it,
        key: $ui.guid(),
      };
    });
  }
  return response.value.map((it) => {
    return {
      ...it,
      key: $ui.guid(),
    };
  });
});

const { item_style, itemClickCallBack } = hookItemConfig(propsConfig);

const emits = defineEmits(["itemClickCallBack"]);

function itemClick(item) {
  itemClickCallBack(item);
  emits("itemClickCallBack", item);
}

watch(
  () => computedDataSource.value,
  (val) => {
    console.log("computedDataSource", computedDataSource.value);
  },
  { immediate: true }
);
watch(
  () => item_style,
  (val) => {
    console.log("item_style", val);
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped></style>
