/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 16:01:07
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-06 14:15:12
 * @FilePath: /uni-app-components/packages/tool/lib/log.ts
 * @Description: 日志系统
 */

// 常规打印日志
function c(tag: string, any?: any) {
    if (ob.getEnvironmentInfo().isProd || ob.getToolConfig().alwaysShowLog) {
        any == null || any == undefined ? console.log(tag) : console.log(tag, any);
    }
}

export function getLogManager() {
    return { c }
}