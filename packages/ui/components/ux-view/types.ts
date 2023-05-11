/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-09 10:55:29
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-10 15:32:24
 * @FilePath: /uni-app-components/packages/ui/components/ux-view/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { StyleType, ClassType } from '../types'
import { UXComponentEnum, UXComponentTypeEnum } from "../../lib/enums/enums"

//<ux-view>通用参数
export type UxViewType = {
    /**
     * view类型
     */
    type: UXComponentTypeEnum | string
    /**
     * 设置单独的组件库类型
     */
    uxComponents: UXComponentEnum | number
    /**
     * <ux-view style=""></ux-view>
     */
    style: StyleType
    /**
     * <ux-view class=""></ux-view>
     */
    class: ClassType
}