/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-09 16:06:28
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 16:53:48
 * @FilePath: /uni-app-components/packages/ui/components/ux-general/hooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { UxGeneralType } from "./types";
import { guid } from "../../lib/utils/utils";

// 数据源处理，每项都加入UUID
export function computedDataSource(dataList?: Array<UxGeneralType>): Array<UxGeneralType> {
    const resultList = dataList?.map(item => {
        if (item.children && item.children.length) {
            item.children = computedDataSource(item.children)
        }
        return {
            ...item,
            key: guid()
        }
    })
    return resultList ?? []
}