/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:35:37
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 15:26:26
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/imports.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineAsyncComponent } from 'vue';
import { getUiConfig } from '../../lib/config/UiConfig';
import { UXComponentEnum } from '../../lib/enums/enums'

export const uxIcon = defineAsyncComponent(
  () => {
    if (getUiConfig().uxComponents === UXComponentEnum.VKUVIEW)
      return import("vk-uview-ui/components/u-icon/u-icon.vue")
    else
      throw new Error("配置的组件库参数有误")
  }
);

export const uxButton = defineAsyncComponent(
  () => {
    if (getUiConfig().uxComponents === UXComponentEnum.VKUVIEW)
      return import("vk-uview-ui/components/u-button/u-button.vue")
    else
      throw new Error("配置的组件库参数有误")
  }
);