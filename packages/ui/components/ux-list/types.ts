/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-24 16:38:09
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 13:58:57
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref } from 'vue'

import { ClassType, StyleType, MescrollUpOpsType, MescrollDownOpsType, MescrollI18nType } from '../types'

export type UxListDataType = Ref<Array<any>>

// 这个要结合后端传参来设置
export type UxListPageDataType = {
    /**
     * 当前页码
     */
    current: number,
    /**
     * 页面数量
     */
    pageSize: number
}

//列表组件传参
export type UxListParamsType<T = any> = (pageData: UxListPageDataType) => T

//列表配置项
export type UxListConfig = {
    /**
     * 上拉加载的配置参数
     */
    upOps: MescrollUpOpsType,
    /**
     * 下拉刷新的参数配置
     */
    downOps: MescrollDownOpsType,
    /**
     * 是否通过fixed定位来固定mescroll-uni的高度,默认true; (mescroll-body不生效,因为无需固定高度)
     * 当配置:fixed="false"时,则mescroll-uni高度跟随父元素, 此时父元素必须有固定的高度,否则列表滚动异常
     * 所以不想使用fixed, 建议通过flex固定高度 或 配置height来固定mescroll-uni的高度,详见下一行:
     */
    fixed: boolean,
    /**
     * 对mescroll-uni可简单快捷设置的高度, 此项有值,则不使用fixed (1.2.0新增)
     * 对mescroll-body可设置最小高度,默认100%,使列表不满屏仍可下拉 (1.2.1新增)
     * 支持100, "100rpx", "100px", "100%"格式的值
     * 其中纯数字则默认单位rpx, 百分比则相对于windowHeight
     */
    height: number | string,
    /**
     * 下拉刷新区域往下偏移的距离
     * 比如希望偏移100rpx, 则top="100", 传的值是rpx的数值
     * 当:fixed="true", 此时top为fixed的top (已自动加上window-top的值)
     * 当:fixed="false"则为padding-top
     * 1.2.0版本开始支持"100rpx", "100px", "100%"格式的值
     */
    top: number | string,
    /**
     * top的偏移量是否加上状态栏高度 (mescroll-uni当fixed为false时不生效, mescroll-body生效) 1.1.9新增
     * 使用场景: 取消原生导航栏时,配置此项可自动加上状态栏高度的偏移量
     * 1.2.6版本: 支持传入字符串背景,如 色值'#ffff00', 背景图'url(xxx) 0 0/100% 100%', 渐变'linear-gradient(xx)'
     * 支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html
     */
    topbar: boolean | string,
    /**
     * 上拉加载区域往上偏移的距离
     * 比如希望偏移100rpx, 则bottom="100", 传的值是rpx的数值
     * 当:fixed="true", 此时bottom为fixed的bottom (已自动加上window-bottom的值)
     * 当:fixed="false"则为padding-bottom
     * 1.2.0版本开始支持"100rpx", "100px", "100%"格式的值
     */
    bottom: number | string,
    /**
     * tab页是否偏移TabBar的高度,避免列表被TabBar遮住, 默认true
     * 仅h5生效,仅h5需要, 1.2.7新增
     */
    bottombar: boolean,
    /**
     * bottom的偏移量是否加上底部安全区的距离 (1.2.0新增)
     * 适配iPhoneX时使用, 此项值对回到顶部按钮生效
     */
    safearea: boolean,
    /**
     * 国际化语言配置, 参考 mescroll-i18n.vue 的示例 超简单
     */
    i18n: MescrollI18nType,
    /**
     * 点击empty配置的btnText按钮回调 (返回mescroll实例对象)
     */
    emptyclick: Function,
    /**
     * 点击回到顶部的按钮回调 (返回mescroll实例对象)
     */
    topclick: Function,
    /**
     * 滚动监听 (需在up配置onScroll:true;仅mescroll-uni可用;mescroll-body是页面的onPageScroll)
     * console.log('当前滚动条的位置:' + mescroll.scrollTop + ', 是否向上滑:'+mescroll.isScrollUp)
     */
    scroll: Function,
    /**
     * 作用在mescroll-body父元素的class属性
     */
    customClass: ClassType,
    /**
     * 作用在mescroll-body父元素的style属性
     */
    customStyle: StyleType,
    /**
     * 每项父元素风格
     */
    itemStyle: StyleType,
    /**
     * 是否是卡片模式
     */
    isCard: boolean,
    /**
     * 数据源
     */
    dataSource: UxListDataType,
    /**
     * 是否自己请求接口处理数据
     * 设置为true之后默认配置 @default_upOps 会自动关闭上拉加载更多
     */
    requestSelf: boolean,
    /**
     * 将外部调用方传进的参数和UxListPageDataType参数合并
     */
    computedParams: UxListParamsType,
    /**
     * 请求接口方法回调
     */
    request: Function,
    /**
     * 列表单项点击事件回调
     * @param item 单个数据源
     * @returns 
     */
    itemClickCallBack: (item: Object) => {}
  }