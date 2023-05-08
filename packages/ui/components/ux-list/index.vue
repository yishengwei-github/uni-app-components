<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-20 15:43:16
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 14:02:05
 * @FilePath: /private-mobile-platform/packages/common/components/common/list/pmslc-list.vue
 * @Description: ux-list,通用的list组件
-->
<template>
  <mescroll-body
    :down="mescroll_down"
    @down="onRefresh"
    :up="mescroll_up"
    @up="onLoadMore"
    @init="onMescrollInit"
    :fixed="mescroll_fixed"
    :height="mescroll_height"
    :top="mescroll_top"
    :topbar="mescroll_topbar"
    :bottom="mescroll_bottom"
    :bottombar="mescroll_bottombar"
    :safearea="mescroll_safearea"
    :i18n="mescroll_i18n"
    @emptyclick="mescroll_emptyclick"
    @topclick="mescroll_topclick"
    @scroll="mescroll_scroll"
    :style="mescroll_style"
    :class="mescroll_class"
    ref="mescrollRef"
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
import { watch, computed, defineAsyncComponent } from "vue";
import type { UxListConfig } from "./types";
import { guid } from "../../lib/utils/utils";

const MescrollBody = defineAsyncComponent(
  () => import("mescroll-uni/mescroll-body.vue")
);

const props = defineProps({
  config: { type: Object, default: {}, required: true },
});
const propsConfig = props.config as UxListConfig;

const {
  mescroll_up,
  mescroll_down,
  mescroll_fixed,
  mescroll_height,
  mescroll_top,
  mescroll_topbar,
  mescroll_bottom,
  mescroll_bottombar,
  mescroll_safearea,
  mescroll_i18n,
  mescroll_emptyclick,
  mescroll_topclick,
  mescroll_scroll,
  mescroll_style,
  mescroll_class,
  response,
  onMescrollInit,
  onLoadMore,
  onRefresh,
} = hookMescrollConfig(propsConfig);

// 数据源处理，每项都加入UUID
const computedDataSource = computed(() => {
  if (propsConfig?.requestSelf) {
    return propsConfig?.dataSource?.value?.map((it) => {
      return {
        ...it,
        key: guid(),
      };
    });
  }
  return response.value.map((it) => {
    return {
      ...it,
      key: guid(),
    };
  });
});

const { item_style, itemClickCallBack } = hookItemConfig(propsConfig);

const emits = defineEmits(["itemClickCallBack"]);

//将每项的点击事件传递出去，通过config中的itemClickCallBack和@itemClickCallBack两种方法
function itemClick(item) {
  itemClickCallBack(item);
  emits("itemClickCallBack", item);
}

watch(
  () => computedDataSource.value,
  (val) => {},
  { immediate: true }
);
watch(
  () => item_style,
  (val) => {},
  { immediate: true }
);
</script>
<style lang="scss" scoped></style>
