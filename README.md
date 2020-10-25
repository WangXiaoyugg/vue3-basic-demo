# vue3-basic

1. vue3特点
  a. 性能提升， 打包体积减少，内存减少，渲染速度更快
  b. composition API, ref/reactive, computed/watch, 生命周期，自定义hooks
  c. 其他新特性，Teleport, Suspense, 全局API的修改和优化， 更多的实验特性
  d. 更好的Typescript支持
2. 为什么有vue3？
  a. vue2 随着功能增长，复杂的组件变得难以维护， 逻辑分散
  b. mixin的缺点，命名冲突，不清楚暴露出来的变量作用，重用到其他的component会出现问题
  c. vue2对于typescript的支持非常有限
3. vue3+typescript开发环境搭建
  ```
  npm i @vue/cli -g
  vue -V
  vue create vue3-basic
  ```
4. ref、reactive, toRefs, toRef的使用
5. watch, computed的使用
6. 自定义Hooks的使用，并使用泛型改造
7. defineComponent对ts的更友好支持
8. teleport和suspense的使用  
9. 全局API的修改
  a. vue2的全局API遇到的问题
    ⅰ. 单元测试中，全局配置非常容易污染全局环境
    ⅱ. 在不同的apps中，共享一份不同配置的Vue对象非常困难
  b. createApp 返回 app的实例
    ⅰ. 全局配置Vue.config -> app.config
      1. config.productionTip被删除
      2. config.keyCodes 被删除
      3. config.ignoredElements 改名为config.isCustomElement
    ⅱ. 全局注册类
      1. Vue.component -> app.component
      2. Vue.directives -> app.directives
    ⅲ. 行为扩展类
      1. Vue.mixin -> app.mixin
      2. Vue.use -> app.use
  c. 全局API 的TreeShaking,  如: nextTick, provide, inject, observable


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
