import packages from './packages'
import config from './config'
import utils from './utils'
import { version } from '../package'

const install = (Vue, options = {}) => {
  if (xosUI.installed) {
    return
  }
  xosUI.installed = true
  // 处理配置信息
  const $xosUI = {
    ...config,
    ...options
  }
  // 存储配置信息
  Vue.prototype.$xosUI = $xosUI
  // 注册组件包
  xosUI.packageNames = []
  for (const name in packages) {
    const componentName = utils.common.register(Vue, name, packages[name])
    xosUI.packageNames.push(componentName)
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const xosUI = {
  packages,
  install,
  installed: false,
  packageNames: [],
  version
}

window.xosUI = xosUI

export default xosUI

export {
  utils
}
