/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 17:35:37
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-11 15:47:15
 * @FilePath: /uni-app-components/packages/ui/components/ux-form/imports.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UXComponentTypeEnum } from '../../../lib/enums/enums'

const has = (type: UXComponentTypeEnum | string) => { return type === UXComponentTypeEnum.icon || UXComponentTypeEnum.button }

import uIcon from "vk-uview-ui/components/u-icon/u-icon.vue"

import uImage from "vk-uview-ui/components/u-image/u-image.vue"

import uButton from "vk-uview-ui/components/u-button/u-button.vue"

export {
  has,
  uIcon,
  uImage,
  uButton
}