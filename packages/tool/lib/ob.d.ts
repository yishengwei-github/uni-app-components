/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-05 09:37:06
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 14:55:57
 * @FilePath: /uni-app-components/packages/tool/lib/ob.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace OBNamespace {
    type Ob = ObInterface;
    interface ToolConfigType {
        /**
         * log是否总是展示，主要用于非开发环境展示
         */
        alwaysShowLog: boolean
    }
    interface Config {
        reset(config: ToolConfigType): void
        
        get(): ToolConfigType
    }
    interface Log {
        c(tag: string, any?: any): void
    }
    interface Env {
        isDev(): boolean
        
        isProd(): boolean
    }
}
declare const ob: OBNamespace.Ob;
interface Ob {
    log: OBNamespace.Log;
    env: OBNamespace.Env;
    config: OBNamespace.Config;
    generateUUID(): string;
}
type ObInterface = Ob;