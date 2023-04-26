/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-27 11:07:06
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-02-27 17:40:16
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/defaults.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { MescrollUpOpsType } from '../types'
import { CommonListConfig } from './types'

export const default_upOps = (propsConfig: CommonListConfig) => {
    return {
        use: !propsConfig?.requestSelf,
        page: {
            size: 20
        },
        noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
        empty: {
            use: true,
            tip: '暂无相关数据'
        },
        textNoMore: '-- 到底啦 --',
        isBounce: true
    }
}

export const default_downOps = (propsConfig: CommonListConfig) => {
    return {

    }
}

export const default_pageStartData = (upOps: MescrollUpOpsType) => {
    return {
        current: 1,
        pageSize: upOps?.page?.size
    }
}

export const default_itemCardStyle = () => {
    return {
        backgroundColor: 'white',
        borderRadius: '16rpx',
        marginLeft: '24rpx',
        marginRight: '24rpx',
        marginBottom: '24rpx'
    }
}

export const default_itemNormalStyle = () => {
    return {
        backgroundColor: 'white'
    }
}
