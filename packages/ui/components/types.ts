/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-27 14:31:50
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-04 09:26:47
 * @FilePath: /private-mobile-platform/packages/common/components/common/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CSSProperties } from 'vue'

export type ClassType = any

export type StyleType = string | CSSProperties

export type ResponseType = {
    
}

export type MescrollUpOpsPageType = {
    num: number, // 当前页码,默认0,回调之前加1,即callback(page)从1开始;
    size: number, // 每页数据的数量; 默认10
    time: number // 加载第一页数据服务器返回的时间 (可空); 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
}

// 回到顶部按钮的配置
export type MescrollUpOpsToTopType = {
    src: string, // 图片路径,必须配置src才会显示; (若想禁用,则src为空串即可)
    offset: number, // 列表滚动{offset}px显示回到顶部按钮
    duration : number, // 回到顶部的动画时长, 默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过js模拟,比较耗性能; 所以非特殊情况不建议修改)
    zIndex: number, // fixed定位z-index值 (1.2.0新增)
    right: number, // 到右边的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
    bottom: number, // 到底部的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
    safearea: boolean, // bottom的偏移量是否加上底部安全区的距离, 默认false. 适配iPhoneX时使用 (具体页面如不配此项,则取mescroll组件props的safearea值. 1.2.0新增)
    width: number, // 回到顶部图标的宽度 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
    radius: string, // 圆角 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
    left: string // 到左边的距离. 此项有值时,right不生效. (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
}

// 列表第一页无任何数据时,显示的空布局
export type MescrollUpOpsEmptyType = {
    use: boolean, // 是否启用
    icon: string, // 空布局的图标路径 (支持网络路径)
    tip: string, // 提示文本
    btnText: string, // 按钮文本
    fixed: boolean, // 是否使用定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,所以最终还是会降级为absolute)
    top: string, // fixed定位的top值 (完整的单位值,如"100rpx", "10%";)
    zIndex: number // fixed定位z-index值
}

export type MescrollUpOpsType = {
    use: boolean, // 默认值true,是否启用上拉加载,如果配置false,则不会初始化上拉加载的布局
    auto: boolean, // 默认值true,是否在初始化完毕之后自动执行一次上拉加载的回调,当配置为false时,建议down的auto也为false,因为downCallback默认调用resetUpScroll,最终还会触发upCallback。如果是想实现返回刷新页面,那么其实不需要设置auto为false
    isBounce: boolean, // 是否允许橡皮筋回弹效果, 默认不允许; 1.1.5新增，1.3.0版本已废弃, 已通过renderjs自动判断, 无需配置mescroll-touch
    page: MescrollUpOpsPageType, // 默认值 {num : 0 ,size : 10 ,time : null}
    noMoreSize: number, // 默认值5，如果列表已无数据,可设置列表的总数量要大于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看，这就是为什么无更多数据 有时候不显示的原因了
    textLoading: string, // 默认值'加载中 ...'，上拉加载中的文本
    textNoMore: string, // 默认值'-- END --'，没有更多数据的提示文本
    bgColor: string, // 默认值'transparent'，下拉区域背景颜色 (1.2.4新增)
    textColor: string, // 默认值'gray'，下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)，支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本)
    toTop: MescrollUpOpsToTopType, // 默认值{src: null,offset: 1000,duration: 300,zIndex: 9990,right: 20,bottom: 120,safearea: false,width: 72,radius: "50%",left: null}
    empty: MescrollUpOpsEmptyType, // 默认值{use: true,icon: null,tip: "暂无相关数据",btnText: "",fixed: false,top: "100rpx",zIndex: 99}
    isBoth: boolean, // 默认值false,上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新
    isLock: boolean, // 默认值false,是否锁定上拉加载,如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁
    offset: number, // 默认值150,距底部多远时,触发upCallback ; 1.1.0新增 (仅mescroll-uni生效)mescroll-body配置的是pages.json的 onReachBottomDistance
    onScroll: boolean, // 默认值false,是否监听滚动事件, 默认false (仅mescroll-uni可用;mescroll-body是页面的onPageScroll)监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项
}

export type MescrollDownOpsType = {}