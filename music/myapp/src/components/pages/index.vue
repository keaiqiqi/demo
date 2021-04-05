<template>
<div>
  <!-- 一级路由 -->

   <div class="f-fanxidi">
      <div class="fs">stars Music</div>
     <!-- <i class="el-icon-user"></i> -->
   </div>
  <!-- 二级路由 -->
   <v-nav></v-nav>
 
   <div class="content">
<router-view></router-view>
   </div>
   
   <!-- 推荐 -->
 
</div>
</template>
<script>
import vNav from '../views/nav'
export default {
    components:{
       vNav
    }
}
</script>
<style scoped>
 .f-fanxidi{
   width: 100%;
   height:40px;
 }
 .fs{
   /* width: 100%;
   height: 146px;
   background:url('/static/img/banner-s.png');
   position:absolute; */
  color:black;
  font-size: 0.4rem;
  /* margin-left: 3rem; */
  text-align:center;
 }

 
</style> 