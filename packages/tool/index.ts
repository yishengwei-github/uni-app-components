/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:59:34
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 16:20:26
 * @FilePath: /uni-app-components/packages/tool/index.ts
 * @Description: 
 */

import * as ToolConfig from './lib/config/ToolConfig'
import * as getEnvironmentInfo from './lib/env/getEnvironmentInfo'
import * as getLogManager from './lib/log/getLogManager'
import * as UUID from './lib/uuid/UUID'

export const all = { ToolConfig, getEnvironmentInfo, getLogManager, UUID }

export const install = (Vue) => {
    if (typeof uni.$ob === 'undefined') {
        uni.$ob = {}
    }
    Object.assign(uni.$ob, all)
};