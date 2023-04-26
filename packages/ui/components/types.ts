/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-27 14:31:50
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-03-02 14:07:05
 * @FilePath: /private-mobile-platform/packages/common/components/common/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref } from 'vue'

export type ArrayAnyRefType = Ref<Array<any>>

export type StringOrStringRefType = Ref<string> | string

export type ClassType = StringOrStringRefType

export type StyleType = StringOrStringRefType

export type ResponseType = {
    
}

export type MescrollUpOpsPageType = {
    size: number
}

export type MescrollUpOpsEmptyType = {
    use: boolean,
    tip: string
}

export type MescrollUpOpsType = {
    use: boolean,
    page: MescrollUpOpsPageType,
    noMoreSize: number, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
    empty: MescrollUpOpsEmptyType,
    textNoMore: string,
    isBounce: boolean
}

export type MescrollDownOpsType = {}