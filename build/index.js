import uni from '@dcloudio/vite-plugin-uni'
import { ViteFilemanager } from 'filemanager-plugin'

export const ViteFileManagerPlugin = ViteFilemanager({
  customHooks: [
    {
      hookName: 'buildStart',
      commands: {
        del: { items: ['./dist'] }
      }
    },
    {
      hookName: 'closeBundle',
      commands: {
        copy: {
          items: [
            {
              source: './dist/build/h5/assets/*',
              destination: './dist/front/front/assets'
            },
            {
              source: './dist/build/h5/static/*',
              destination: './dist/front/front/static'
            },
            {
              source: './dist/build/h5/index.html',
              destination: './dist/front/front'
            }
          ]
        }
      }
    }
  ]
})

export function getPlugins() {
  const plugins = [uni()]
  const { UNI_PLATFORM, UNI_NODE_ENV } = process.env
  if (UNI_NODE_ENV !== 'development' && UNI_PLATFORM === 'h5') {
    plugins.push(ViteFileManagerPlugin)
  }
  return plugins
}
