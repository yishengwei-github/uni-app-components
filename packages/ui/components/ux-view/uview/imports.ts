/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:35:37
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-11 14:53:53
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/imports.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineComponent } from 'vue';
import { UXComponentTypeEnum } from '../../../lib/enums/enums'

export const has = (type: UXComponentTypeEnum | string) => { return type === UXComponentTypeEnum.icon || UXComponentTypeEnum.button }

export const uIcon = defineComponent(
  () => {
    return import("vk-uview-ui/components/u-icon/u-icon.vue")
  }
);

export const uImage = defineComponent(
  () => {
    return import("vk-uview-ui/components/u-image/u-image.vue")
  }
);

export const uButton = defineComponent(
  () => {
    return import("vk-uview-ui/components/u-button/u-button.vue")
  }
);