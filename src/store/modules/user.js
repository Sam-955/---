// 用户模块
export default{
    namespaced:true,
    state(){
        return{
        //用户信息
        profile:{
            id:"",
            avatar:"",
            nickName:"",
            account:"",
            mobile:"",
            token:"",
                }
               }
            },
    mutations:{
       setUser(state,playload){
           state.profile=playload
                            } 
      },
      
}