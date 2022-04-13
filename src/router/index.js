import { createRouter, createWebHashHistory } from 'vue-router'

//路由懒加载,一个组件生成一个js文件
const Layout=()=>import("@/views/Layout")
const Home=()=>import("@/views/home")


// 路由规则
const routes = [
    
     {path:'/',
     component:Layout,
     children:[
          {
           path:"",
           component:Home,
          }
     ]
    }

]

// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router

