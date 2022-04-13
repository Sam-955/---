//创建新的axios实例
// 请求拦截  token
//响应拦截  处理无效数据，
// 导出函数 代用axios 实例发请求，返回值promise
import axios from "axios"
import store from "@/store"
import router from "@/router"
export const baseURL="http://pcapi-xiaotuxian-front-devtest.itheima.net/"
const instance =axios.create({
     // axios 一些配置
     baseURL,
     timeout:5000
})
// 请求拦截
instance.interceptors.request.use((config)=>{
    //拦截业务逻辑
    // 进行请求配置修改 
    // 如果本地有token就在头部携带
    console.log('request请求')
    const{profile}=store.state.user
    // 判断是否有token
    if(profile.token){
        // 设置token
        config.headers.Authorization=`Bearer${profile.token}`
    }
    return config
},err=>{
  return Promise.reject(err)
}
)

//响应拦截（请求成功）
instance.interceptors.response.use((res)=>{return res.data},err=>{
    //401状态码，进入该函数
    if(err.response&&err.response.status===401){
        //清空本地无效信息
        store.commit("user/setUser",{})
        //跳转到登录页码
        // 当前路由地址
        // 组件里面获取路由地址：$route.fullpath(地址上包括参数)，$route.path(地址上不包括参数)
        
        // js模块汇总：router.currentRouter.value.fullPath
        // 将字符串解析成浏览器能识别的URl编码 ，防止地址解析出问题
        const fullPath=encodeURLrouter(encodeURLrouter.currentRoute.value.fullPath)
        router.push('/login?redirectUrl='+'fullPath')
        // 跳转需要传参
    }
    return Promise.reject(err)
})
// 请求工具函数
export default(url,method,submitData)=>{
  //负责发送请求：请求地址，提交的数据，请求方式
   return instance({
       url:url,
       //判断请求方式
       // 如果是get请求，使用params传递submitData，?a=10&c=10
       //post, 需要使用data 传递submiData ,请求体传参
       // const a={name:25,age:30}  a.name, a.age a["name"],a["age"],a[x>y "name":"age"]
       method:method,
       // 设置动态的key，写js表达式,Get get可能会出现大小写不统一，用toLowerCase
       [method.toLowerCase==="get"?'params':'data']:submitData
   })

}