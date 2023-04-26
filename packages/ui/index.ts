/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 13:40:24
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-04-26 14:02:28
 * @FilePath: /uni-app-components/packages/ui/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import config from './libs/config'
const install = (Vue) => {

  const $ui = {
      config
    };

    Vue.config.globalProperties.$ui = $ui;
  };
  
  export default {
    install,
  };
  