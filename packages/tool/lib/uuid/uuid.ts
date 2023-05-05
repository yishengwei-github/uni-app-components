/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:51:20
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 14:33:21
 * @FilePath: /uni-app-components/packages/tool/lib/uuid.ts
 * @Description: 生成UUID
 */

export function generateUUID(): string {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
  
