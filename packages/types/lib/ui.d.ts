/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-08 14:37:36
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 15:17:16
 * @FilePath: /uni-app-components/packages/types/lib/ui.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace UINamespace { 
    interface UiConfigType {
        uxComponents: UXComponentEnum | number
    }

    enum UXComponentEnum {
        VKUVIEW = 1
    }
}
interface UI { 
    /**
     * 获取Ui库配置项
     */
    getUiConfig(): UINamespace.UiConfigType;

    /**
     * 调整UI库配置项
     */
    resetUiConfig(config: UINamespace.UiConfigType)
}