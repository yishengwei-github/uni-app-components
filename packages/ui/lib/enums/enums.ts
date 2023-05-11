/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 14:25:10
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-10 17:33:01
 * @FilePath: /uni-app-components/packages/ui/lib/enums.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 因为有组合需要，所以赋值需要按规律1,2,4,8,16......
export enum UXComponentEnum {
    VKUVIEW = 1,
    UVIEW2 = 2,
    UVIEW3 = 4
}

// 目前支持的组件种类
export enum UXComponentTypeEnum {
    icon = 'icon',
    image = 'image',
    button = 'button'
}