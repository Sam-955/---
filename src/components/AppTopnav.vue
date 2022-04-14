<template>
<div>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- <template v-if="profile.token"> -->
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{" "+profile.name}}</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        <!-- </template> -->
        <!-- <template v-else> -->
           <li><a href="javascript:;">请先登录</a></li>
           <li><a href="javascript:;">免费注册</a></li>
        <!-- </template> -->
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
      </ul>
     
    </div>
  </nav>
</div>
</template>

<script>
//根据当前登录状态显示用户名和退出登录
import {useStore} from "vuex"
import{toRaw} from "@vue/reactivity"
import { computed } from '@vue/runtime-core'
export default{
  name:'AppTopnav',
  setup(){
    //获得用户当前信息才能控制切换导航菜单
    const store=useStore()
    //这里用了解析结构
    // const {profile}=store.state.user
    const profile=computed(()=>{
      return store.state.user.profile
    })
    // var s=toRaw(profile)
   
      return {
        profile,
      
      }
  }
}
</script>

<style lang="less" scoped>
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        .hoverShadow();
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
    
  }
}
</style>
