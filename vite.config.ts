/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-04-26 15:54:50
 * @FilePath: /uni-app-components/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import { defineConfig } from "vite";
import { getPlugins } from './build'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@static': path.resolve(__dirname, './src/static'),
      '@yishengwei/components-ui': path.resolve(
        __dirname,
        './packages/ui'
      )
    }
  },
  plugins: getPlugins(),
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        secure: false
      },
    }
  }
});
