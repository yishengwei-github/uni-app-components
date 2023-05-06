/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-05 15:36:30
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 17:30:38
 * @FilePath: /uni-app-components/packages/ui/components/mescroll-body.vue.d.ts
 * @Description: 消除import("mescroll-uni/mescroll-body.vue")错误
 */
declare module 'mescroll-uni/mescroll-body.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}