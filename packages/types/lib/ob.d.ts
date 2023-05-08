/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 14:46:48
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 16:43:16
 * @FilePath: /uni-app-components/packages/types/lib/ob.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace UniNamespace {
    interface OB extends UI, Tools {}
}

interface Uni {
    $ob: UniNamespace.OB
 }