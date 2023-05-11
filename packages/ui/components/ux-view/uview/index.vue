<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:33:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-11 15:40:58
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/index.vue
 * @Description: uview组件
-->
<template>
  <u-icon
    v-if="view_type === UXComponentTypeEnum.icon"
    :style="view_style"
    :class="view_class"
    :name="icon?.name"
    :color="icon?.color"
    :size="icon?.size"
    :index="icon?.index"
    :hover-class="icon?.hoverClass"
    :label="icon?.label"
    :labelSize="icon?.labelSize"
    :labelColor="icon?.labelColor"
    :custom-prefix="icon?.customPrefix"
    :margin-left="icon?.marginLeft"
    :margin-top="icon?.marginTop"
    :margin-bottom="icon?.marginBottom"
    :margin-right="icon?.marginRight"
    :label-pos="icon?.labelPos"
    :custom-style="icon?.customStyle"
    :width="icon?.width"
    :height="icon?.height"
    :top="icon?.top"
    :show-decimal-icon="icon?.showDecimalIcon"
    :inactive-color="icon?.inactiveColor"
    :percent="icon?.percent"
    @click="
      (index) => {
        return (
          typeof icon?.clickCallback === 'function'
            ? (index) => icon?.clickCallback(index)
            : () => log('没有配置点击事件')
        )(index);
      }
    "
  ></u-icon>
  <u-image
    v-else-if="view_type === UXComponentTypeEnum.image"
    :style="view_style"
    :class="view_class"
  >
    <template #loading> </template>
    <template #error> </template>
  </u-image>
  <u-button
    v-else-if="view_type === UXComponentTypeEnum.button"
    :style="view_style"
    :class="view_class"
    :type="button?.type"
  ></u-button>
  <view v-else :style="view_style" :class="view_class">
    <slot name="default"></slot>
  </view>
</template>
<script lang="ts">
import { watch, Ref, ref } from "vue";
import { UxViewType } from "../types";
import { UIconType, UButtonType } from "./types";
import { hookViewConfigCommon, hookViewConfigProps } from "../hooks";
import { UXComponentTypeEnum } from "../../../lib/enums/enums";
import { log } from "../../../lib/utils/utils";
import { uIcon, uImage, uButton } from "./imports";
export default {
  name: "uview",
  props: {
    config: { type: Object, default: {}, required: true },
  },
  components: {
    uIcon,
    uImage,
    uButton,
  },
  setup(props) {
    const propsConfig = props.config as UxViewType;
    console.log("propsConfig", propsConfig);
    const { view_type, view_style, view_class } =
      hookViewConfigCommon(propsConfig);
    const icon: Ref<UIconType | undefined> = ref(); // https://vkuviewdoc.fsq.pub/components/icon.html
    const button: Ref<UButtonType | undefined> = ref();
    const components = {
      icon,
      button,
    };
    watch(
      () => view_type.value,
      (val) => {
        switch (val) {
          case UXComponentTypeEnum.icon:
            icon.value = hookViewConfigProps<UIconType>(
              props.config?.props as UIconType
            );
            log("uview-icon参数", icon);
            break;
          case UXComponentTypeEnum.button:
            button.value = hookViewConfigProps<UButtonType>(
              props.config?.props as UButtonType
            );
            log("uview-button参数", button);
            break;
          default:
            // 默认为view
            break;
        }
      },
      { immediate: true }
    );
    return {
      UXComponentTypeEnum,
      log,
      propsConfig,
      view_type,
      view_style,
      view_class,
      ...components,
    };
  },
};
</script>
<style lang="scss" scoped></style>
