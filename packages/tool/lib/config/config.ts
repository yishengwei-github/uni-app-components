/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 15:56:35
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 11:03:27
 * @FilePath: /uni-app-components/packages/tool/lib/config.ts
 * @Description: 对于Tool库的全局配置
 */
import { ToolConfigType } from '../../local/types'

const default_config: ToolConfigType = {
    alwaysShowLog: false // log是否总是展示，主要用于非开发环境展示
}

let value: ToolConfigType = {
    ...default_config
}

function reset(config: ToolConfigType) {
    value = {
        ...value,
        ...config
    }
}

function get(): ToolConfigType {
    return value
}

export const config = {
    reset,
    get
}