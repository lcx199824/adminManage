import axios from '@/libs/api.request'

export function getTableUser () {
  return axios.request({
    url: '/admin/getTableUser',
    method: 'get'
  })
}
export function getTableDemand () {
  return axios.request({
    url: '/admin/getTableDemand',
    method: 'get'
  })
}
export function getTablePhoto () {
  return axios.request({
    url: '/admin/getTablePhoto',
    method: 'get'
  })
}
export function groupByCategory () {
  return axios.request({
    url: '/admin/groupByCategory',
    method: 'get'
  })
}
export function getInforCardData () {
  return axios.request({
    url: '/admin/getInforCardData',
    method: 'get'
  })
}
export function getDemandBySeason () {
  return axios.request({
    url: '/admin/getDemandBySeason',
    method: 'get'
  })
}
export function getCategory(){
  return axios.request({
    url:'/admin/getCategory',
    method:'get'
  })
}
export function updateCategoryName({newName,id}){
  const data = {newName,id}
  return axios.request({
    url:'/admin/updateCategoryName',
    data,
    method:'post'
  })
}
export function addNewCategory({newCategory}){
  return axios.request({
    url:'/admin/addNewCategory',
    data:{
      newCategory
    },
    method:'post'
  })
}
export function removeUserById({id}){
  return axios.request({
    url:'/admin/removeUserById',
    data:{
      id
    },
    method:'post'
  })
}
export function removeDemandById({id}){
  return axios.request({
    url:'/admin/removeDemandById',
    data:{
      id
    },
    method:'post'
  })
}
export function removePhotoById({id}){
  return axios.request({
    url:'/admin/removePhotoById',
    data:{
      id
    },
    method:'post'
  })
}
