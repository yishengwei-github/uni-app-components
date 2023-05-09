/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-09 10:44:59
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 15:01:39
 * @FilePath: /uni-app-components/packages/ui/components/ux-view/hooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, ComputedRef, reactive, UnwrapNestedRefs } from 'vue'
import { UxViewType } from './types'
import { StyleType, ClassType } from '../types'

// view相关配置
export function hookViewConfigCommon(propsConfig?: UxViewType) {
    // 组件类型
    const view_type: ComputedRef<string> = computed(() => { return propsConfig?.type ?? 'view' })
    // 组件外围style风格
    const view_style: ComputedRef<StyleType> = computed(() => { return propsConfig?.style ?? '' })
    // 组件外围class风格
    const view_class: ComputedRef<ClassType> = computed(() => { return propsConfig?.class ?? '' })
    return {
        view_type,
        view_style,
        view_class
    }
}

// view中props相关配置，跟对应的组件相关，需要泛型解析出来
export function hookViewConfigProps<T extends object>(props: T): UnwrapNestedRefs<T> {
    return reactive(props)
}