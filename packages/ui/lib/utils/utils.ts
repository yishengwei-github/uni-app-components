/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 14:49:22
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-06 13:57:33
 * @FilePath: /uni-app-components/packages/ui/components/utils.ts
 * @Description: 调用底层库
 */

//生成uuid
export function guid(): string {
    return ob?.generateUUID()
}

//日志
export function log(tag: string, any?: any) {
    ob?.getLogManager()?.c(tag, any)
}