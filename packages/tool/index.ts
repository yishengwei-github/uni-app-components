/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-04 09:59:34
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-04 13:59:16
 * @FilePath: /uni-app-components/packages/tool/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import uuid from "./lib/uuid"

const install = (Vue) => {
    const $tool = {
        uuid
    };

    Vue.config.globalProperties.$tool = $tool;
};

export default {
    uuid,
    install,
};