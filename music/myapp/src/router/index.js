import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/Index'
import Recommend from '../components/pages/recommend'
import Song from '../components/pages/song'
import Search from '../components/pages/search'
import Sear from '../components/pages/sear'
import Play from '../components/pages/play'
import De from '../components/pages/de'
import Fan from '../components/pages/fan'
Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'/index',
    component:Index,
    // 二级路由字迹路由
    children:[
      {
        path:'recommend',
        component:Recommend
      },
      {
        path:'song',
        component:Song
      },
      {
        path:'search',
        component:Search
      },
      {
        path:'sear',
        component:Sear
      },
      // 二级路由重定向
      {
        path:'',
        redirect:'recommend'
      }
    

    ]
  },
  {
   path:'/playlist/:id',
   component:Song
  },
  {
    path:'/play/:id',
    component:Play
   },
   {
    path:'/de/:id',
    component:De
   },
   {
    path:'/fan/:id',
    component:Fan
   },
  // 一级重定向
  {
    path:'*',
    redirect:'index'
  }
  
  ]
})
