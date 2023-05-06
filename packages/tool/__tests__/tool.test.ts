/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:51:20
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-06 10:07:37
 * @FilePath: /uni-app-components/packages/tool/__tests__/tool.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { describe, test, expect } from "@jest/globals";

describe("tool", () => {
  test("生成的UUID是否符合规则", () => {
    const uuid = ob.generateUUID();
    ob.log.c("uuid:", uuid);
    const pattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
    expect(uuid).toMatch(pattern);
  });
});
