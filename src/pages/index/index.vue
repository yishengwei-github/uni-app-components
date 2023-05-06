<!--
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-04 09:55:31
 * @FilePath: /uni-app-components/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <ux-list></ux-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import config from "../../../packages/ui/lib/config/config";
console.log(config["ux-components"]);
const title = ref("Hello");
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
