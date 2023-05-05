/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-27 11:07:06
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 13:32:10
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/defaults.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { MescrollUpOpsType, StyleType } from '../types'
import { UxListConfig } from './types'

export const default_upOps = (propsConfig: UxListConfig) => {
    return {
        use: !propsConfig?.requestSelf, // 默认值true,是否启用上拉加载,如果配置false,则不会初始化上拉加载的布局
        //auto: true, // 默认值true,是否在初始化完毕之后自动执行一次上拉加载的回调,当配置为false时,建议down的auto也为false,因为downCallback默认调用resetUpScroll,最终还会触发upCallback。如果是想实现返回刷新页面,那么其实不需要设置auto为false
        isBounce: true, // 是否允许橡皮筋回弹效果, 默认不允许; 1.1.5新增，1.3.0版本已废弃, 已通过renderjs自动判断, 无需配置mescroll-touch
        page: {
            size: 20
        }, // 默认值 {num : 0 ,size : 10 ,time : null}
        noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
        //textLoading: '加载中 ...', // 默认值'加载中 ...'，上拉加载中的文本
        textNoMore: '-- 到底啦 --', // 默认值'-- END --'，没有更多数据的提示文本
        //bgColor: 'transparent', // 默认值'transparent'，下拉区域背景颜色 (1.2.4新增)
        //textColor: 'gray', // 默认值'gray'，下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)，支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本)
        //toTop: { src: null, offset: 1000, duration: 300, zIndex: 9990, right: 20, bottom: 120, safearea: false, width: 72, radius: "50%", left: null }, // 默认值{src: null,offset: 1000,duration: 300,zIndex: 9990,right: 20,bottom: 120,safearea: false,width: 72,radius: "50%",left: null}
        empty: {
            use: true,
            tip: '暂无相关数据'
        },// 默认值{use: true,icon: null,tip: "暂无相关数据",btnText: "",fixed: false,top: "100rpx",zIndex: 99}
        //isBoth: false, // 默认值false,上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新
        //isLock: false, // 默认值false,是否锁定上拉加载,如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁
        //offset: 150, // 默认值150,距底部多远时,触发upCallback ; 1.1.0新增 (仅mescroll-uni生效)mescroll-body配置的是pages.json的 onReachBottomDistance
        //onScroll: false, // 默认值false,是否监听滚动事件, 默认false (仅mescroll-uni可用;mescroll-body是页面的onPageScroll)监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项
    }
}

export const default_downOps = (propsConfig: UxListConfig) => {
    return {
        
    }
}

export const default_pageStartData = (upOps: MescrollUpOpsType) => {
    return {
        current: 1,
        pageSize: upOps?.page?.size
    }
}

export const default_itemCardStyle: StyleType = {
    backgroundColor: 'white',
    borderRadius: '16rpx',
    marginTop: '12rpx',
    marginLeft: '24rpx',
    marginRight: '24rpx',
    marginBottom: '12rpx'
}

export const default_itemNormalStyle: StyleType = {
    backgroundColor: 'white'
}
