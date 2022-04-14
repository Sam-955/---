import { topCategory } from "@/api/constants"
import { findAllCategory } from "@/api/category"
import { findTopCategory } from "@/api/category"

export default {
  namespaced: true,
  state:()=>{
    return {
      // 分类信息
      // // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      list:  topCategory.map(item => ({ name: item }))
    }
  },
   // // 需要向后台加载数据，所以需要actions函数获取数据
   actions:{
     async getList(context,value){
         const{result}= await findAllCategory()
          // 获取数据成功，提交mutations进行数据修改
          context.commit('setCategory',result)
     },
    // 给一级分类加上一个控制二级分类显示隐藏的数据open
    async getCategory(context,value){
      const {result} = await findHeadCategory()
      result.forEach((item)=>{item.open=false})
      context.commit("setCategory",result)
    }
    
  },
  // // 加载数据成功后需要修改list所以需要mutations函数
   mutations:{
    setList (state, headCategory) {
      state.list = headCategory
    },
    // 修改当前一级分类下的open数据为true
    show(state,item){
      const category=state.list.find(category=>category.id===item.id)
      category.open=true
    },
    hide(state,item){
      const category=state.list.find(category=>{return category.id===item.id})
      category.open=false
    },
    
  },

}
