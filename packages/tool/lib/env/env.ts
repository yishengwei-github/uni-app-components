/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 15:33:00
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 14:33:06
 * @FilePath: /uni-app-components/packages/tool/lib/env.ts
 * @Description: 环境相关
 */
export const env = { isDev, isProd };

function isDev(): boolean {
    return process.env.NODE_ENV === 'development';
}

function isProd(): boolean {
    return process.env.NODE_ENV === 'production';
}