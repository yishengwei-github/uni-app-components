/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-05 09:37:06
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 14:47:16
 * @FilePath: /uni-app-components/packages/tool/lib/ob.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace ToolsNamespace {
    interface ToolConfigType {
        /**
         * log是否总是展示，主要用于非开发环境展示
         */
        alwaysShowLog: boolean
    }
    interface LogManager {
        /**
         * 普通方式打印
         * @param tag 
         * @param any 
         */
        c(tag: string, any?: any): void
    }
    interface Environment {
        /**
         * 当前环境是否是开发环境
         */
        isDev: boolean
        
        /**
         * 当前环境是否是生产环境
         */
        isProd: boolean
    }
}

interface Tools {
    /**
     * 获取Tool库配置项
     */
    getToolConfig(): ToolsNamespace.ToolConfigType;

    /**
     * 调整Tool库配置项
     */
    resetToolConfig(config: ToolsNamespace.ToolConfigType): void;

    /**
     * 获取日志管理器
     */
    getLogManager(): ToolsNamespace.LogManager;

    /**
     * 获取当前环境信息
     */
    getEnvironmentInfo(): ToolsNamespace.Environment;

    /**
     * 生成 UUID
     */
    generateUUID(): string;
}

