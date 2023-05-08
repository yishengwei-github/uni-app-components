/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 16:01:07
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 16:52:35
 * @FilePath: /uni-app-components/packages/tool/lib/log.ts
 * @Description: 日志系统
 */
import { getEnvironmentInfo } from '../env/getEnvironmentInfo'
import { getToolConfig } from '../config/ToolConfig'

// 常规打印日志
function c(tag: string, any?: any) {
    if (getEnvironmentInfo().isProd || getToolConfig().alwaysShowLog) {
        any == null || any == undefined ? console.log(tag) : console.log(tag, any);
    }
}

export function getLogManager() {
    return { c }
}