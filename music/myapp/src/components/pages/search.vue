<template>
    <div>
      <!-- 热门歌手第三层 -->
    <div class="ge">
   <div v-for="gexin of gexins" :key="gexin.id" class="ged" @click="ged(gexin.id)">
   <img :src="gexin.picUrl"/>
    <div class="name">{{gexin.name}}</div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
data(){
 return{
    gexins:[],
 }
},
methods:{
  ged(k){
          this.$router.push('/de/'+k)
  }
},
  // 我直接写的静态页面然后再去调用接口给他循环遍历
  mounted() {

       this.$http({
        // url: "/music/top/artists"
        url:this.apis.artists
      }).then(res => {
        //
        // console.log(res);
        //上面是res是变量名字,下面就必须叫res(这个名字可以随便改但是要对应上)
          this.gexins = res.data.artists
      }),
         this.$http({
        // url: "/music/top/artists"
           url:this.apis.artistlist
      }).then(res => {
        //
        // console.log(res);
        //上面是res是变量名字,下面就必须叫res(这个名字可以随便改但是要对应上)
        //   this.gexins = res.data.artists
      })
  }
}
</script>
<style scoped>
/* 个性推荐 */
.ge{
    width: 100%;
   
 
}
.ge img{
    width:2rem;
  
   float: left;
  margin-left: 0.09rem;
  margin-top: 0.1rem;

}
.ged{
    width: 100%;
    height: 2rem;
    border: 0.05px solid #999999;
    margin-top: 0.3rem;
}
.ged img{
     float:left;
   
}
.name{
    float: right;
    width: 3.4rem;
    height: 0.6rem;
    font-size: 0.5rem;
    margin-top: 0.7rem;
}
</style>