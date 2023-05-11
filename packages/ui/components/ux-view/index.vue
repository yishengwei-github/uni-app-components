<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:33:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-11 17:03:15
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/index.vue
 * @Description: view包罗所有组件库
 * @TODO: 需要注意所有组件库是可以共存的，比如uxComponents === UXComponentEnum.VKUVIEW | UXComponentEnum.UVIEW2,就同时共存vkuview和uview2
-->
<template>
  <view v-if="uxComponents === UXComponentEnum.VKUVIEW">
    <uview :config="props.config">
      <template #default>
        <slot name="default"></slot>
      </template>
    </uview>
  </view>
  <view v-else>
    <view
      >没有配置编号为{{ uxComponents }}的UI组件库或该配置不存在编号为{{
        uxComponents
      }}的组件库</view
    >
  </view>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { getUiConfig } from "../../lib/config/UiConfig";
import { UXComponentEnum } from "../../lib/enums/enums";
import { UxViewType } from "./types";
import * as uviewImports from "./uview/imports";
import uview from "./uview/index.vue";
import {
  log,
  propsExtend,
  getUxComponentEnumMaxValue,
  getUxComponentEnumTotalValue,
} from "../../lib/utils/utils";
export default {
  props: {
    config: { type: Object, default: {}, required: true },
  },
  components: {
    uview,
  },
  setup(props) {
    const propsConfig = props.config as UxViewType;
    const uxComponents = computed(() => {
      let uxComponentsOption = {
        uxComponents: propsConfig.uxComponents,
      }; // 获取当前组件的组件库
      uxComponentsOption = propsExtend(uxComponentsOption, getUiConfig()); // 若没有设置，会用全局配置
      return getFinalUxComponents(uxComponentsOption.uxComponents);
    });

    /**
     * 获取最终定的组件库
     * @param uxComponents 传入目前暂定的组件库
     */
    function getFinalUxComponents(
      uxComponents: UXComponentEnum | number
    ): UXComponentEnum {
      if (uxComponents <= 0 || uxComponents > getUxComponentEnumTotalValue()) {
        throw new Error("所传组件库配置超出可选范围");
      }
      const maxValue = getUxComponentEnumMaxValue(uxComponents);
      log("uxComponents", uxComponents);
      if (
        maxValue === UXComponentEnum.VKUVIEW &&
        uviewImports.has(propsConfig.type)
      ) {
        return UXComponentEnum.VKUVIEW;
      } else if (
        maxValue === UXComponentEnum.UVIEW2 &&
        uviewImports.has(propsConfig.type)
      ) {
        return UXComponentEnum.UVIEW2;
      } else if (
        maxValue === UXComponentEnum.UVIEW3 &&
        uviewImports.has(propsConfig.type)
      ) {
        return UXComponentEnum.UVIEW3;
      } else {
        return getFinalUxComponents(uxComponents - maxValue);
      }
    }
    return {
      UXComponentEnum,
      props,
      uxComponents,
    };
  },
};
</script>
<style lang="scss" scoped></style>
