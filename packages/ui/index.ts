/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 13:40:24
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 15:24:06
 * @FilePath: /uni-app-components/packages/ui/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as config from './lib/config/UiConfig'
import * as tool from '@yishengwei/uni-app-components-tool/lib/tools'
import vkUView from 'vk-uview-ui'
import { UXComponentEnum } from './lib/enums/enums';

const install = (Vue) => {
    if (typeof uni.$ob === 'undefined') {
        uni.$ob = {} as UniNamespace.OB
    }
    Object.assign(uni.$ob, tool)
    Object.assign(uni.$ob, config)
    if (config.getUiConfig().uxComponents === UXComponentEnum.VKUVIEW) {
        Vue.use(vkUView)
    }
};

export default install