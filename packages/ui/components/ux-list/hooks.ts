/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-21 10:19:59
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-08 13:51:00
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/pmslc-list-hooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, reactive, ref, Ref, ComputedRef, defineAsyncComponent } from 'vue'
import { UxListConfig, UxListDataType, UxListPageDataType } from './types'
import { default_upOps, default_downOps, default_pageStartData, default_itemCardStyle, default_itemNormalStyle } from './defaults'
import { StyleType, ClassType, MescrollUpOpsType, MescrollDownOpsType } from '../types'
import MeScroll from 'mescroll-uni/mescroll-uni'
import { log } from '../../lib/utils/utils'

export const MescrollBody = defineAsyncComponent(
    () => import("mescroll-uni/mescroll-body.vue")
);
  
// mescroll组件相关配置
export const hookMescrollConfig = (propsConfig: UxListConfig) => {
    // mescroll的up配置
    const mescroll_up: MescrollUpOpsType = propsConfig?.upOps ?? default_upOps(propsConfig)
    // mescroll的down配置
    const mescroll_down: MescrollDownOpsType = propsConfig?.downOps ?? default_downOps(propsConfig)
    // mescroll的fixed配置,默认true
    const mescroll_fixed: ComputedRef<boolean> = computed(() => { return propsConfig?.fixed ?? true })
    // mescroll的height配置,默认''
    const mescroll_height: ComputedRef<number | string> = computed(() => { return propsConfig?.height ?? '' })
    // mescroll的top配置,默认0
    const mescroll_top: ComputedRef<number | string> = computed(() => { return propsConfig?.top ?? 0 })
    // mescroll的topbar配置,默认false
    const mescroll_topbar: ComputedRef<boolean | string> = computed(() => { return propsConfig?.topbar ?? false })
    // mescroll的bottom配置,默认0
    const mescroll_bottom: ComputedRef<number | string> = computed(() => { return propsConfig?.bottom ?? 0 })
    // mescroll的bottombar配置,默认true
    const mescroll_bottombar: ComputedRef<boolean> = computed(() => { return propsConfig?.bottombar ?? true })
    // mescroll的safearea配置,默认false
    const mescroll_safearea: ComputedRef<boolean> = computed(() => { return propsConfig?.safearea ?? false })
    // mescroll的国际化配置
    const mescroll_i18n = propsConfig?.i18n
    // mescroll的emptyclick监听
    const mescroll_emptyclick = (mescroll) => { propsConfig?.emptyclick(mescroll) }
    // mescroll的topclick监听
    const mescroll_topclick = (mescroll) => { propsConfig?.topclick(mescroll) }
    // mescroll的scroll监听
    const mescroll_scroll = (mescroll) => { propsConfig?.scroll(mescroll) }
    // mescroll的style配置
    const mescroll_style: ComputedRef<StyleType> = computed(() => { return propsConfig?.customStyle ?? '' })
    // mescroll的class配置
    const mescroll_class: ComputedRef<ClassType> = computed(() => { return propsConfig?.customClass ?? '' })
    // 通过up参数获取默认的page配置
    const pageData: UxListPageDataType = default_pageStartData(mescroll_up)
    // mescroll本体
    const mescrollRef = ref<MeScroll>()
    // mescroll初始化 @init
    const onMescrollInit = (mescroll) => {
        mescrollRef.value = mescroll
    }
    // 参数
    var params = {
        ...pageData
    }
    // 上拉加载更多回调，@up
    const onLoadMore = async (page) => {
        if (propsConfig?.requestSelf) {
            return
        }
        if (!page) return
        params = propsConfig?.computedParams({
            current: page.num,
            pageSize: page.size
        })
        const data = await reloadData()
        if (data.success) {
            mescrollRef?.value?.endBySize(data.result.length, data.total)
        } else {
            mescrollRef?.value?.endErr()
        }
    }
    // 下拉刷新，@down
    const onRefresh = async () => {
        log('刷新')
        if (propsConfig?.requestSelf) {
            return
        }
        mescrollRef?.value?.resetUpScroll()
    }
    // 请求返回的数据
    const response: UxListDataType = ref([]) /** request返回的拼接好的数据 */
    // 请求数据
    const reloadData = async () => {
        // 发起请求
        const requestCallback = await propsConfig?.request(params) || {
            result: [],
            total: 1,
            success: true
        }
        log('requestCallback', requestCallback.data)
        // 如果当前页数为1，则直接赋值
        if (params?.current ?? 1 === 1) {
            response.value = requestCallback.data.result
        } else { // 如果当前页数不为1，则往后增加数据
            response.value = response.value.concat(requestCallback.data.result)
        } 
        return requestCallback
    }
    return {
        mescroll_up,
        mescroll_down,
        mescroll_fixed,
        mescroll_height,
        mescroll_top,
        mescroll_topbar,
        mescroll_bottom,
        mescroll_bottombar,
        mescroll_safearea,
        mescroll_i18n,
        mescroll_emptyclick,
        mescroll_topclick,
        mescroll_scroll,
        mescroll_style,
        mescroll_class,
        response,
        onMescrollInit,
        onLoadMore,
        onRefresh
    }
}

// 列表每项相关配置
export const hookItemConfig = (propsConfig: UxListConfig) => {
    const item_style: ComputedRef<StyleType> = computed(() => {
        return propsConfig?.itemStyle ? propsConfig?.itemStyle : propsConfig?.isCard ? default_itemCardStyle : default_itemNormalStyle
    })

    return {
        item_style,
        itemClickCallBack: propsConfig?.itemClickCallBack
    }
}

export default {
    hookMescrollConfig,
    hookItemConfig
}