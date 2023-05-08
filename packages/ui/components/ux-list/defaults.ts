/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-27 11:07:06
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 13:54:52
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/defaults.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { MescrollUpOpsType, MescrollDownOpsType, StyleType } from '../types'
import { UxListConfig, UxListPageDataType } from './types'

// 默认上拉加载更多配置
export const default_upOps = (propsConfig: UxListConfig): MescrollUpOpsType => {
    return {
        use: !propsConfig?.requestSelf,
        //auto: true,
        isBounce: true,
        page: {
            size: 20
        },
        noMoreSize: 5,
        //textLoading: '加载中 ...',
        textNoMore: '-- 到底啦 --',
        //bgColor: 'transparent',
        //textColor: 'gray',
        //toTop: { src: null, offset: 1000, duration: 300, zIndex: 9990, right: 20, bottom: 120, safearea: false, width: 72, radius: "50%", left: null },
        empty: {
            use: true,
            tip: '暂无相关数据'
        },
        //isBoth: false,
        //isLock: false,
        //offset: 150,
        //onScroll: false,
    }
}

// 默认下拉刷新配置
export const default_downOps = (propsConfig: UxListConfig): MescrollDownOpsType => {
    return {
        //use: true,
        // auto: true,
        // native: false,
        // textInOffset: '下拉刷新',
        // textOutOffset: '释放更新',
        // textLoading: '加载中 ...',
        // textSuccess: '加载成功',
        // textErr: '加载失败',
        // beforeEndDelay: 100,
        // bgColor: 'transparent',
        // textColor: 'gray',
        // autoShowLoading: false,
        // isLock: false,
        // offset: 80,
        // inOffsetRate: 1,
        // outOffsetRate: 0.2,
        // bottomOffset: 20,
        // minAngle: 45
    }
}

// 默认页码相关配置
export const default_pageStartData = (upOps: MescrollUpOpsType): UxListPageDataType => {
    return {
        current: 1,
        pageSize: upOps?.page?.size ?? 10
    }
}

// item默认的卡片风格
export const default_itemCardStyle: StyleType = {
    backgroundColor: 'white',
    borderRadius: '16rpx',
    marginTop: '12rpx',
    marginLeft: '24rpx',
    marginRight: '24rpx',
    marginBottom: '12rpx'
}

// item默认的白色风格
export const default_itemNormalStyle: StyleType = {
    backgroundColor: 'white'
}
