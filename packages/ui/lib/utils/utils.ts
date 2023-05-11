/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 14:49:22
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-10 16:27:20
 * @FilePath: /uni-app-components/packages/ui/components/utils.ts
 * @Description: 调用底层库
 */

import { UXComponentEnum } from '../enums/enums'

//生成uuid
export function guid(): string {
    return uni.$ob?.generateUUID()
}

//日志
export function log(tag: string, any?: any) {
    uni.$ob?.getLogManager()?.c(tag, any)
}

// 组件props参数拓展
export const propsExtend = function(userOption, defaultOption) {
	if (!userOption) return defaultOption;
	for (let key in defaultOption) {
		if (userOption[key] == null) {
			let def = defaultOption[key];
			if (def != null && typeof def === 'object') {
				userOption[key] = propsExtend({}, def); // 深度匹配
			} else {
				userOption[key] = def;
			}
		} else if (typeof userOption[key] === 'object') {
			propsExtend(userOption[key], defaultOption[key]); // 深度匹配
		}
	}
	return userOption;
}

// 获取传入的枚举中的最大值
export function getUxComponentEnumMaxValue(value: UXComponentEnum | number): number {
    let maxValue = 0;
    for (const key in UXComponentEnum) {
        const enumValue = UXComponentEnum[key];
        if (typeof enumValue === 'number') {
          if ((value & enumValue) === enumValue) {
            maxValue = Math.max(maxValue, enumValue);
          }
        }
    }
    return maxValue;
}

// 获取枚举最大值
export function getUxComponentEnumTotalValue(): number {
    let totalValue = 0;
    for (const key in UXComponentEnum) {
        const enumValue = UXComponentEnum[key];
        if (typeof enumValue === 'number') {
            totalValue = totalValue + enumValue;
        }
    }
    return totalValue;
}