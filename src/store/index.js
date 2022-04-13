import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

//三个模块
import cart from './modules/cart'
import catetory from './modules/catetory'
import user from './modules/user'


export default createStore({
modules:{
  cart,
  catetory,
  user,

},
plugins:[
    // 默认储存在localStorage上
    createPersistedState({
        key:"erabbit-pc",
        path:["user","cart"]
    })
]
})
