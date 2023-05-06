/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 15:56:35
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-06 13:59:49
 * @FilePath: /uni-app-components/packages/tool/lib/config.ts
 * @Description: 对于Tool库的全局配置
 */
import { ToolConfigType } from '../../local/types'

var value: ToolConfigType = {
    alwaysShowLog: false // log是否总是展示，主要用于非开发环境展示
}

export function resetToolConfig(config: ToolConfigType) {
    Object.assign(value, config)
}

export function getToolConfig() {
    return value
}