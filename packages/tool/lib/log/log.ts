/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 16:01:07
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 10:52:18
 * @FilePath: /uni-app-components/packages/tool/lib/log.ts
 * @Description: 日志系统
 */

export const log = { c }

// 常规打印日志
function c(tag: string, any?: any) {
    if (ob.env.isDev() || ob.config.get().alwaysShowLog) {
        any == null || any == undefined ? console.log(tag) : console.log(tag, any);
    }
}