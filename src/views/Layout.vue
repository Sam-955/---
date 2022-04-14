<template>
<div class="contain">
  <app-topnav/>
  <app-header/>
  <div class="mian">
      <!-- 二级路由 -->
      <router-view></router-view>
  </div>
  <app-footer/>
</div>
</template>

<script >
import AppTopnav from "@/components/AppTopnav"
import AppHeader from  "@/components/AppHeader"
import AppFooter from '@/components/AppFooter'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  name: 'XtxLayout',
  components:{
    AppTopnav,
    AppHeader,
    AppFooter,
  },
  setup(){
    const store=useStore()
    const list=computed(()=>{
      return store.state.category.list
    })
    return{list}
  }
}

</script>

<style scoped lang="less">
.app-body{
  min-height: 600px;
}
</style>
