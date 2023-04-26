/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-24 16:38:09
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-02-27 17:24:42
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ArrayAnyRefType, ClassType, StyleType, MescrollUpOpsType, MescrollDownOpsType } from '../types'

export type CommonListDataType = ArrayAnyRefType

export type CommonListPageDataType = {
    current: number,
    pageSize: number
}

export type CommonListParamsType<T = any> = (pageData: CommonListPageDataType) => T

export type CommonListConfig = {
    upOps: MescrollUpOpsType,
    downOps: MescrollDownOpsType,
    customClass: ClassType,
    customStyle: StyleType,
    itemStyle: StyleType,
    isCard: boolean,
    dataSource: CommonListDataType,
    requestSelf: boolean,
    computedParams: CommonListParamsType,
    request: Function,
    itemClickCallBack: (item: Object) => {}
  }