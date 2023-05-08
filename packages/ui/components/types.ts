/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-27 14:31:50
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 13:59:26
 * @FilePath: /private-mobile-platform/packages/common/components/common/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CSSProperties } from 'vue'

// class
export type ClassType = any

// style
export type StyleType = string | CSSProperties

// 国际化-下拉刷新相关配置
export type MescrollI18nDownOpsType = {
    /**
     * 下拉刷新-文字
     */
    textInOffset: string,
    /**
     * 释放刷新-文字
     */
    textOutOffset: string,
    /**
     * 加载中-文字
     */
    textLoading: string,
    /**
     * 加载成功-文字
     */
    textSuccess: string,
    /**
     * 加载失败-文字
     */
    textErr: string
}

// 国际化-上拉加载空数据
export type MescrollI18nUpEmptyOpsType = {
    /**
     * 空数据提示-文字
     */
    tip: string
}

// 国际化-上拉加载相关配置
export type MescrollI18nUpOpsType = {
    /**
     * 加载中-文字
     */
    textLoading: string,
    /**
     * 没有更多-文字
     */
    textNoMore: string,
    /**
     * 空数据
     */
    empty: MescrollI18nUpEmptyOpsType
}

// 国际化配置
export type MescrollI18nOptionType = {
    /**
     * 国际化-下拉刷新相关配置
     */
    down: MescrollI18nDownOpsType,
    /**
     * 国际化-上拉加载相关配置
     */
    up: MescrollI18nUpOpsType
}

// 国际化
export type MescrollI18nType = {
    /**
     * 中文
     */
    zh: MescrollI18nOptionType,
    /**
     * 英文
     */
    en: MescrollI18nOptionType
}

// 页码、数据量
export type MescrollUpOpsPageType = {
    /**
     * 当前页码,默认0,回调之前加1,即callback(page)从1开始;
     */
    num?: number,
    /**
     * 每页数据的数量; 默认10
     */
    size?: number,
    /**
     * 加载第一页数据服务器返回的时间 (可空); 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
     */
    time?: number
}

// 回到顶部按钮的配置
export type MescrollUpOpsToTopType = {
    /**
     * 图片路径,必须配置src才会显示; (若想禁用,则src为空串即可)
     */
    src?: string,
    /**
     * 列表滚动{offset}px显示回到顶部按钮
     */
    offset?: number,
    /**
     * 回到顶部的动画时长, 默认300ms 
     * (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过js模拟,比较耗性能; 所以非特殊情况不建议修改)
     */
    duration?: number,
    /**
     * fixed定位z-index值 (1.2.0新增)
     */
    zIndex?: number,
    /**
     * 到右边的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
     */
    right?: number,
    /**
     * 到底部的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
     */
    bottom?: number,
    /**
     * bottom的偏移量是否加上底部安全区的距离, 默认false.
     * 适配iPhoneX时使用 (具体页面如不配此项,则取mescroll组件props的safearea值. 1.2.0新增)
     */
    safearea?: boolean,
    /**
     * 回到顶部图标的宽度 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
     */
    width?: number,
    /**
     * 圆角 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
     */
    radius?: string,
    /**
     * 到左边的距离. 此项有值时,right不生效. 
     * (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
     */
    left?: string
}

// 列表第一页无任何数据时,显示的空布局
export type MescrollUpOpsEmptyType = {
    /**
     * 是否启用
     */
    use?: boolean,
    /**
     * 空布局的图标路径 (支持网络路径)
     */
    icon?: string,
    /**
     * 提示文本
     */
    tip?: string,
    /**
     * 按钮文本
     */
    btnText?: string,
    /**
     * 是否使用定位,默认false; 
     * 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,所以最终还是会降级为absolute)
     */
    fixed?: boolean,
    /**
     * fixed定位的top值 (完整的单位值,如"100rpx", "10%";)
     */
    top?: string,
    /**
     * fixed定位z-index值
     */
    zIndex?: number
}

//<mescroll-body :up="MescrollUpOpsType" />
export type MescrollUpOpsType = {
    /**
     * 是否启用上拉加载,默认值true
     * 如果配置false,则不会初始化上拉加载的布局
     */
    use?: boolean,
    /**
     * 是否在初始化完毕之后自动执行一次上拉加载的回调,默认值true
     * 当配置为false时,建议down的auto也为false,因为downCallback默认调用resetUpScroll,
     * 最终还会触发upCallback。如果是想实现返回刷新页面,那么其实不需要设置auto为false
     */
    auto?: boolean,
    /**
     * 是否允许橡皮筋回弹效果, 默认不允许
     * 1.1.5新增，1.3.0版本已废弃,已通过renderjs自动判断, 无需配置mescroll-touch
     */
    isBounce?: boolean,
    /**
     * 默认值 {num : 0 ,size : 10 ,time : null}
     */
    page?: MescrollUpOpsPageType,
    /**
     * 默认值5
     * 如果列表已无数据,可设置列表的总数量要大于5条才显示无更多数据;
     * 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看，
     * 这就是为什么无更多数据 有时候不显示的原因了
     */
    noMoreSize?: number,
    /**
     * 默认值'加载中 ...'
     * 上拉加载中的文本
     */
    textLoading?: string,
    /**
     * 默认值'-- END --'
     * 没有更多数据的提示文本
     */
    textNoMore?: string,
    /**
     * 默认值'transparent'
     * 下拉区域背景颜色 (1.2.4新增)
     */
    bgColor?: string,
    /**
     * 默认值'gray'
     * 下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)，支持背景图和渐变: 
     * 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本)
     */
    textColor?: string,
    /**
     * 默认值{src: null,offset: 1000,duration: 300,zIndex: 9990,right: 20,bottom: 120,safearea: false,width: 72,radius: "50%",left: null}
     */
    toTop?: MescrollUpOpsToTopType,
    /**
     * 默认值{use: true,icon: null,tip: "暂无相关数据",btnText: "",fixed: false,top: "100rpx",zIndex: 99}
     */
    empty?: MescrollUpOpsEmptyType,
    /**
     * 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新,默认值false
     */
    isBoth?: boolean,
    /**
     * 是否锁定上拉加载,默认值false
     * 如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁
     */
    isLock?: boolean,
    /**
     * 距底部多远时,触发upCallback,默认值150
     * 1.1.0新增 (仅mescroll-uni生效)mescroll-body配置的是pages.json的 onReachBottomDistance
     */
    offset?: number,
    /**
     * 是否监听滚动事件, 默认false
     * (仅mescroll-uni可用;mescroll-body是页面的onPageScroll)监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项
     */
    onScroll?: boolean,
}

export type MescrollDownOpsType = {
    /**
     * 是否启用下拉刷新，默认true
     * 如果配置false,则不会初始化下拉刷新的布局
     */
    use?: boolean

    /**
     * 是否在初始化完毕之后自动执行一次下拉刷新的回调 callback,默认true
     */
    auto?: boolean

    /**
     * 是否使用系统自带的下拉刷新,默认false
     * 仅mescroll-body生效
     * 值为true时,需在pages配置"enablePullDownRefresh":true 和 "mp-alipay":{"allowsBounceVertical":"YES"}
     * 详请参考mescroll-native的案例 (1.2.1版本新增)
     */
    native?: boolean

    /**
     * 下拉的距离在offset范围内的提示文本,默认'下拉刷新'
     */
    textInOffset?: string

    /**
     * 下拉的距离大于offset范围的提示文本,默认'释放更新'
     */
    textOutOffset?: string

    /**
     * 加载中的提示文本,默认'加载中 ...'
     */
    textLoading?: string

    /**
     * 加载成功的提示文本 (1.3.3新增),默认'加载成功'
     */
    textSuccess?: string

    /**
     * 加载失败的提示文本 (1.3.3新增),默认'加载失败'
     */
    textErr?: string

    /**
     * 延时结束的时长, 也是显示加载成功/失败的时长; 单位ms (1.3.3新增),默认100
     */
    beforeEndDelay?: number

    /**
     * 下拉区域背景颜色 (1.2.4新增),默认transparent
     * 支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本)
     * 支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html
     * 建议同步配置pages.json的"backgroundColorTop"
     */
    bgColor?: string

    /**
     * 下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增), 默认gray
     */
    textColor?: string

    /**
     * 默认false
     * 如果设置auto=true ( 在初始化完毕之后自动执行下拉刷新的回调 ) ,
     * 那么是否显示下拉刷新的进度需配置down的callback才生效
     */
    autoShowLoading?: boolean

    /**
     * 是否锁定下拉刷新, 默认false
     * 如果配置true,则会锁定不可下拉,可通过调用mescroll.lockDownScroll(false)解锁
     */
    isLock?: boolean

    /**
     * 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调,默认80
     */
    offset?: number

    /**
     * 下拉的节流配置 (值越大每秒更新下拉状态的频率越高, 当您发觉下拉卡顿时可尝试调高/低此值)
     * 1.3.0版本已废弃, 已通过wxs提高性能, 无需手动节流
     */
    // fps?: number

    /**
     * 默认1
     * 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
     */
    inOffsetRate?: number

    /**
     * 默认0.2
     * 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例
     * 值越接近0,高度变化越小,表现为越往下越难拉
     */
    outOffsetRate?: number

    /**
     * 默认20
     * 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
     */
    bottomOffset?: number

    /**
     * 触发下拉最少要偏移的角度(滑动的轨迹与水平线的锐角值),取值区间 [0,90];
     * 默认45度,即向下滑动的角度大于45度(方位角为45°~145°及225°~315°)则触发下拉;
     * 而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突
     */
    minAngle?: number
}