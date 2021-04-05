<template>
    <div class="nav">
        <!-- 二级路由 -->
       <router-link to="/index/recommend" active-class="active">推荐</router-link>
       <router-link to="/index/song"  active-class="active">音乐</router-link>
           <router-link to="/index/search"  active-class="active">歌手排行</router-link>
            <router-link to="/index/sear"  active-class="active">搜索</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav{
    /* 弹性布局横着来 */
       display: flex;
       flex-direction:row;
       background: #ffffff;
      
}
/* router-link是a标签 */
.nav a{
    flex: 1;
    font-size: 0.34rem;
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
    text-decoration: none;
    color: black;
    
}
.nav a.active{
       color:blue;
       border-bottom: 0.04rem solid blue;
}
</style>