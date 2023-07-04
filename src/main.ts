import { createApp } from 'vue'
import './style.css'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import App from './App.vue'
import './assets/styles/index.scss'

import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'

import gloablComponent from './components/index'

const app = createApp(App)
app.use(gloablComponent)
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
