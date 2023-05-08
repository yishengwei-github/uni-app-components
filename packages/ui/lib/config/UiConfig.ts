/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 14:02:11
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-06 10:15:54
 * @FilePath: /uni-app-components/packages/ui/lib/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UXComponentType } from '../enums/enums'
import { UiConfigType } from '../types'

var value: UiConfigType = {
    uxComponents: UXComponentType.UVIEW2 // UX使用的组件库
}

export function resetUiConfig(config: UiConfigType) {
    Object.assign(value, config)
}

export function getUiConfig() {
    return value
}