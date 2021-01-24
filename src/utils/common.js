// 去抖动
const debounce = function (func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
    if (immediate && !timeout) func.apply(context, args)
  }
}

// 获取拼装前缀后的组件名称
const getComponentName = function (options, name) {
  if (options && name) {
    const nameSpace = options.namespace || ''
    return [nameSpace, name].map(item => {
      return item.slice(0, 1).toUpperCase() + item.slice(1)
    }).join('')
  }
}

// 注册组件
const register = function (Vue, name, component) {
  if (Vue && name && component) {
    const componentName = getComponentName(Vue.prototype.$xosUI, name)
    if (componentName) {
      // 注册全局组件
      Vue.component(componentName, component)
      return componentName
    }
  }
}

// 查找上级组件
const findComponentUpward = function (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

export default {
  debounce,
  register,
  getComponentName,
  findComponentUpward
}
