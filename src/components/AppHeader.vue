<template>
 <header class='app-header'>
  <div class="container">
     <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
     <app-header-nav/>
     <div class="search">
       <i class="iconfont icon-search"></i>
       <input type="text" placeholder="搜一搜">
     </div>
     <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
     </div>
  </div>
</header>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue'
export default{
  name:"AppHeader",
  components:{
    AppHeaderNav
  }
}
</script>

<style lang="less" scoped>
</style>
