<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:33:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-11 15:55:43
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <uxView v-for="item in dataSource" :key="item?.key ?? ''" :config="item">
    <uxGeneral
      v-if="item?.children && item?.children?.length"
      :config="item?.children"
    ></uxGeneral>
  </uxView>
</template>
<script lang="ts">
/**
 * config= [{
 *  type: 'view'
 *  children: [{
 *    type: 'view'
 *  }]
 * }]
 */
import { defineComponent } from "vue";
import { UxGeneralType } from "./types";
import { computedDataSource } from "./hooks";
import { log } from "../../lib/utils/utils";
import uxView from "../ux-view/index.vue";
export default {
  name: "uxGeneral",
  props: {
    config: { type: Array, default: [], required: true },
  },
  components: {
    uxView,
  },
  setup(props) {
    const propsConfig = props.config as Array<UxGeneralType>;
    const dataSource = computedDataSource(propsConfig);
    const uxGeneral = "uxGeneral";
    log("dataSource", dataSource);
    return {
      dataSource,
      uxGeneral,
    };
  },
};
</script>
<style lang="scss" scoped></style>
