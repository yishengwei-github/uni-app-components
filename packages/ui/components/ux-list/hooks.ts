/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-02-21 10:19:59
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-04-28 14:13:44
 * @FilePath: /private-mobile-platform/packages/common/components/common/pmslc-list/pmslc-list-hooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, reactive, ref, ComputedRef, UnwrapNestedRefs } from 'vue'
import { UxListConfig, UxListDataType, UxListPageDataType } from './types'
import { default_upOps, default_downOps, default_pageStartData, default_itemCardStyle, default_itemNormalStyle } from './defaults'
import { StyleType, ClassType, MescrollUpOpsType, MescrollDownOpsType } from '../types'
import MeScroll from 'mescroll-uni/mescroll-uni'

export const hookMescrollConfig = (propsConfig: UxListConfig) => {
    // mescroll的style配置
    const mescroll_style: ComputedRef<StyleType> = computed(() => { return propsConfig?.customStyle ?? '' })
    // mescroll的class配置
    const mescroll_class: ComputedRef<ClassType> = computed(() => { return propsConfig?.customClass ?? '' })
    // mescroll的up配置
    const mescroll_up: UnwrapNestedRefs<MescrollUpOpsType> = reactive(propsConfig?.upOps ?? default_upOps(propsConfig))
    const mescroll_down: UnwrapNestedRefs<MescrollDownOpsType> = reactive(propsConfig?.downOps ?? default_downOps(propsConfig))
    const pageData: UxListPageDataType = default_pageStartData(mescroll_up)
    const mescrollRef = ref<MeScroll>()
    const onMescrollInit = (mescroll) => {
        mescrollRef.value = mescroll
    }
    var params = {
        ...pageData
    }
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
    const onRefresh = async () => {
        if (process.env.NODE_ENV === 'development') {
            console.log('This is a development environment.');
          } else if (process.env.NODE_ENV === 'production') {
            console.log('This is a production environment.');
          }
        if (propsConfig?.requestSelf) {
            return
        }
        mescrollRef?.value?.resetUpScroll()
    }
    // 触发数据回调
    const response: UxListDataType = ref([]) /** request返回的拼接好的数据 */
    const reloadData = async () => {
        const requestCallback = await propsConfig?.request(params) || {
            result: [],
            total: 1,
            success: true
        }
        console.log('requestCallback', requestCallback.data)
        if (params?.current ?? 1 === 1) {
            response.value = requestCallback.data.result
        } else {
            response.value = response.value.concat(requestCallback.data.result)
        } 
        return requestCallback
    }
    return {
        mescroll_style,
        mescroll_class,
        mescroll_up,
        mescroll_down,
        response,
        reloadData,
        onMescrollInit,
        onLoadMore,
        onRefresh
    }
}

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