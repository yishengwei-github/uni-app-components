/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 14:56:14
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 15:22:31
 * @FilePath: /uni-app-components/packages/ui/lib/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UXComponentEnum } from './enums/enums'

export type UiConfigType = {
    uxComponents: UXComponentEnum | number // log是否总是展示，主要用于非开发环境展示
}