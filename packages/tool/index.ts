/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:59:34
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 14:58:58
 * @FilePath: /uni-app-components/packages/tool/index.ts
 * @Description: app.use(Tool)
 */
import Vue from 'vue'
import * as ob from './lib/ob'

declare global {
    interface Window {
        ob: any;
    }
}

const install = (app, options) => {
    console.log('options', options)
    app.config.globalProperties.ob = ob;
    window.ob = ob;
    // 将ob对象挂载到全局对象上
    // 定义全局 mixin，将 uni 注册到应用上下文中
};

export default {
    install
};