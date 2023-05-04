/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-24 16:38:09
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-04-27 14:59:24
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref } from 'vue'

import { ClassType, StyleType, MescrollUpOpsType, MescrollDownOpsType } from '../types'

export type UxListDataType = Ref<Array<any>>

export type UxListPageDataType = {
    current: number,
    pageSize: number
}

export type UxListParamsType<T = any> = (pageData: UxListPageDataType) => T

export type UxListConfig = {
    upOps: MescrollUpOpsType,
    downOps: MescrollDownOpsType,
    customClass: ClassType,
    customStyle: StyleType,
    itemStyle: StyleType,
    isCard: boolean,
    dataSource: UxListDataType,
    requestSelf: boolean,
    computedParams: UxListParamsType,
    request: Function,
    itemClickCallBack: (item: Object) => {}
  }