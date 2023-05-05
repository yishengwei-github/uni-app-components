/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 13:40:24
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-05 09:53:32
 * @FilePath: /uni-app-components/packages/ui/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import config from './lib/config'
const install = (Vue) => {
  const $ui = {
    config
  };
  Vue.config.globalProperties.$ui = $ui;
};

export default {
  install,
};
  