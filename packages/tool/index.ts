/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:59:34
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 16:27:10
 * @FilePath: /uni-app-components/packages/tool/index.ts
 * @Description: app.use(Tool)
 */
import * as ob from './lib/ob'

declare global {
    interface Window {
        ob: any;
    }
}

const install = (Vue) => {
    Vue.config.globalProperties.ob = ob;
    window.ob = ob;
    // 将ob对象挂载到全局对象上
    // 定义全局 mixin，将 uni 注册到应用上下文中
};

export default {
    install
};