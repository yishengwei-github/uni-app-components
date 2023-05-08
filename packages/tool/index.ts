/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:59:34
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 17:12:07
 * @FilePath: /uni-app-components/packages/tool/index.ts
 * @Description: 
 */

import * as Tools from './lib/tools'

const install = (Vue) => {
    if (typeof uni.$ob === 'undefined') {
        uni.$ob = {} as UniNamespace.OB
    }
    Object.assign(uni.$ob, { ...Tools })
};

export default install