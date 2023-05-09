/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-04-26 13:40:40
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-09 10:40:07
 * @FilePath: /uni-app-components/packages/ui/index.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*

declare module 是 TypeScript 中用来声明外部模块（或库）类型的语法。当我们使用第三方库时，需要在 TypeScript 中声明该库的类型信息，这样 TypeScript 才能正确地进行类型检查和语法提示。
declare module 的语法如下:
declare module 'library-name' {
  // 类型声明
}
其中 library-name 是库的名称，类型声明 部分是对该库的类型信息的声明。在 类型声明 部分，我们可以使用 interface、type、namespace 等关键字来声明该库的类型信息。例如：
declare module 'lodash' {
  interface Lodash {
    chunk(array: any[], size: number): any[][];
    // ...
  }

  const lodash: Lodash;

  export default lodash;
}
这个例子中，我们使用 declare module 来声明 lodash 这个第三方库的类型信息。在 类型声明 部分，我们使用 interface 来声明 Lodash 这个类的类型信息，包括它的属性和方法。然后使用 const 来声明一个常量 lodash，表示该库的默认导出。最后使用 export default 将常量 lodash 导出，以便其他 TypeScript 文件可以使用它。

在声明完第三方库的类型信息后，我们就可以在代码中直接使用该库了，同时也能获得 TypeScript 的类型检查和语法提示的支持。
*/
/// <reference types="@yishengwei/uni-app-components-types" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}