/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 15:33:00
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-06 11:21:13
 * @FilePath: /uni-app-components/packages/tool/lib/env.ts
 * @Description: 环境相关
 */

const isDev: boolean = process.env.NODE_ENV === 'development';

const isProd: boolean = process.env.NODE_ENV === 'production';

export function getEnvironmentInfo() {
    return {
        isDev,
        isProd
    }
}