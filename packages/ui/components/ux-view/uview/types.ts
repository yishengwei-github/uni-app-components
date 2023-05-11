/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-05-09 10:55:29
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-05-11 10:55:10
 * @FilePath: /uni-app-components/packages/ui/components/ux-view/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//<u-icon></u-icon>
export type UIconType = {
    /**
     * 图标名称，见示例图标集，如名称带有/，会被认为是图片图标
     * 现有的图标可见https://vkuviewdoc.fsq.pub/components/icon.html
     */
    name: string

    /**
     * 默认值inherit
     * 图标颜色
     */
    color: string

    /**
     * 默认值inherit
     * 图标字体大小，单位rpx
     */
    size: string | number

    /**
     * 一个用于区分多个图标的值，点击图标时通过click事件传出
     */
    index: string

    /**
     * 图标按下去的样式类，用法同uni的view组件的hover-class参数
     * 详见：https://uniapp.dcloud.net.cn/component/view.html#
     */
    hoverClass: string

    /**
     * 图标右侧/下方的label文字
     */
    label: string

    /**
     * 默认值28
     * label字体大小，单位rpx
     */
    labelSize: string | number

    /**
     * 默认值#606266
     * label字体颜色
     */
    labelColor: string

    /**
     * 默认值uicon
     * 自定义字体图标库时，需要写上此值
     * 详见：https://www.uviewui.com/guide/customIcon.html
     */
    customPrefix: string

    /**
     * 默认值6
     * label在右方时与图标的距离，单位rpx
     */
    marginLeft: string | number

    /**
     * 默认值6
     * label在下方时与图标的距离，单位rpx
     */
    marginTop: string | number

    /**
     * 默认值6
     * label在上方时与图标的距离，单位rpx
     */
    marginBottom: string | number

    /**
     * 默认值6
     * label在左侧时与图标的距离，单位rpx
     */
    marginRight: string | number

    /**
     * 默认值right
     * 可选值bottom / top / left
     * label相对于图标的位置(left和top为1.4.1新增)
     */
    labelPos: string

    /**
     * 图标的样式，可以设置字体大小，颜色等，对象形式，size和color优先级高于此参数
     */
    customStyle: Object

    /**
     * name为图片路径时图片的宽度，单位任意，数值默认为rpx单位
     */
    width: string | number

    /**
     * name为图片路径时图片的高度，单位任意，数值默认为rpx单位
     */
    height: string | number

    /**
     * 如果某些场景，如果图标没有垂直居中，可以调整此参数，单位任意，数值默认为rpx单位
     */
    top: string | number

    /**
     * 默认值false
     * 是否为DecimalIcon
     */
    showDecimalIcon: boolean

    /**
     * 默认值#ececec
     * 背景颜色，可接受主题色，仅Decimal时有效
     */
    inactiveColor: string

    /**
     * 默认值50
     * 显示的百分比，仅Decimal时有效
     */
    percent: string | number

    /**
     * 点击图标时触发
     * @index: 通过props传递的index值
     */
    clickCallback: Function
}

//<u-image></u-image>
export type UImageType = {
    /**
     * 图片地址，强烈建议使用绝对或者网络路径
     */
    src: string

    /**
     * 默认值aspectFill
     * 裁剪模式详见https://uniapp.dcloud.net.cn/component/image.html#
     */
    mode: string

    /**
     * 默认值100%
     * 宽度，单位任意，如果为数值，则为rpx单位
     */
    width: string | number

    /**
     * 默认值auto
     * 高度，单位任意，如果为数值，则为rpx单位
     */
    height: string | number

    /**
     * 默认值square
     * 可选值circle
     * 图片形状，circle-圆形，square-方形	
     */
    shape: string

    /**
     * 默认值0
     * 圆角值，单位任意，如果为数值，则为rpx单位
     */
    borderRadius: string | number

    /**
     * 默认值true
     * 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效
     */
    lazyLoad: boolean

    /**
     * 默认值true
     * 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效
     */
    showMenuByLongpress: boolean

    /**
     * 默认值photo
     * 可选值详见：https://vkuviewdoc.fsq.pub/components/icon.html
     * 加载中的图标，或者小图片
     */
    loadingIcon: boolean

    /**
     * 默认值error-circle
     * 可选值详见：https://vkuviewdoc.fsq.pub/components/icon.html
     * 加载失败的图标，或者小图片
     */
    errorIcon: boolean

    /**
     * 默认值true
     * 是否显示加载中的图标或者自定义的slot
     */
    showLoading: boolean

    /**
     * 默认值true
     * 是否显示加载错误的图标或者自定义的slot
     */
    showError: boolean

    /**
     * 默认值true
     * 是否需要淡入效果
     */
    fade: boolean

    /**
     * 默认值false
     * 只支持网络资源，只对微信小程序有效
     */
    webp: boolean

    /**
     * 默认值500
     * 搭配fade参数的过渡时间，单位ms
     */
    duration: string | number

    /**
     * 默认值#f3f4f6
     * 背景颜色
     */
    bgColor: string
}

//<u-button></u-button>
export type UButtonType = {
    /**
     * 
     */
    type: string
}