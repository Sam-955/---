import request from "@/utils/request";
// 获取头部数据
export const findAllCategory=()=>{
    return request('/home/category/head',"get")   
}
export const findTopCategory=()=>{
    return {}
}