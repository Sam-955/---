<template>
  <!-- <div class="container">
    App{{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account:'500$'})">设置用户信息</button>
    <br>
    <button @click="fn">测试ruquest请求</button>
  </div> -->
  <!-- // 根组件完全替换 -->
  <!-- <RouterView/> -->
  <xtxLayout/>
</template>

<script>
// import {useStore} from 'vuex'
// import {request} from '@/utils/request'
import xtxLayout from "./views/Layout"
// import Layout from './views/member/layout.vue'
export default {
  name: 'App',
  components:{xtxLayout},
  setup () {
  //  const fn=function(){
  //    console.log('准备发送路由请求')
  //    request('/member/profile','get',{a:10})
  //  }
  //  return{
  //    fn
  //  }
  }
}
</script>

<style scoped>
</style>
