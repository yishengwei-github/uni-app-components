/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 14:49:22
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-04-26 16:16:33
 * @FilePath: /uni-app-components/packages/ui/components/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCurrentInstance } from './context'
import { AppContext, onMounted, reactive } from 'vue'

var currentInstance

export function register() {
    console.log('currentInstance')
    onMounted(() => {
        currentInstance = useCurrentInstance()
        console.log('currentInstance', currentInstance)
    })
}

export function guid() {
    return currentInstance?.appContext?.config?.globalProperties?.$ui?.guid()
}