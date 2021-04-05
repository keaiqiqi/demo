<template>
    <div>
        <div class="s-sou">
            <img  src="/static/img/search.png">
            <input type="text" placeholder="请输入关键字" v-model="ipt">
           <span class="search_h"  v-show="ipt!=''" @click="btncancel()">x</span>
        </div>
        <div class="hot" v-show="ipt==''"> 
       <h1 class="remen">热门搜索</h1>
         <div>
             <!-- <a href.prevent="#" v-for="(item,index) of hots :key="index">{{item.first}}</a> -->
         <a href="#" v-for="item of hots" :key="item.index" @click="ipt=item.first">{{item.first}}</a>
         </div>
         </div>
         <!-- 搜索结果 -->
          <div class="box" v-show="ipt!=''">
      <div class="item" v-for="(song,index) of songs" :key="song.id" @click="see(song.id)">
        <div class="num">{{index > 8 ?index + 1:'0' +(index+1)}}</div>
        <div class="info">
            <div class="song">{{song.name}}</div>
         
            <div class="singer">
         <span v-for="singer of song.artists" :key="singer.id">
           {{singer.name}}
       </span>
            </div>
        </div>
        <div class="icon">
                <span class="bs-ico"></span>  
              </div>
             </div>
               </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hots:[],
           ipt:'' ,
           songs:[]
        }
    },
    methods:{
        btncancel(){
            this.ipt=''
            this.songs =[]
        },
        see(p){
           this.$router.push('/fan/'+p)
        }
    },
    mounted(){
        this.$http({
            url:this.apis.searchhot
        }).then(res=>{
            // console.log(res)
            this.hots = res.data.result.hots
        })
    },
 
  watch:{
      ipt(){
        if(this.ipt==''){
           return;
        }
           this.$http({
               url:this.apis.search,
               params:{
                   keywords:this.ipt
               }
           }).then(res=>{
            //    console.log(res)
            this.songs = res.data.result.songs
           })
      }
  }
}
</script>
<style lang="stylus" scoped>
.s-sou{
    width:6rem;
    height: 0.7rem;
    background: rgb(235, 232, 232);
    margin: 0.3rem;
    border-radius: 20px 20px ;
    position: relative;
}
.s-sou input{
   position:absolute;
   margin-top: 0.05rem;
   width: 4rem;
   height: 0.5rem;
   border: none;
   margin-left: 0.6rem;
   background: rgb(235, 232, 232);
   outline none 
}
.s-sou .search_h
    font-size 0.3rem
    margin-left 5.3rem
    width 0.4rem
    height 0.4rem
     display inline-block
    margin-top 0.15rem
    position absolute
    background:#fff;
    border-radius:50% 50%;
    text-align center
    line-height 0.4rem
    color #cccccc
  
    
 


.s-sou img{
   position:absolute;
   width: 0.4rem;
   height: 0.4rem;
   margin-top: 0.15em;
   margin-left: 0.08rem;


}
.remen 
    font-size 0.4rem

a
    height 0.8rem;
    font-size 0.3rem;
    border-radius 20px 20px;
    line-height 0.8rem;
    margin-left 0.09rem;
    text-decoration:none;
    display inline-block;
    color #000;
    border 0.5px solid #ccc;
    margin-top 0.04rem

.item{
    display: flex;
    flex-direction:row;
    margin-bottom: 0.2rem;
    padding:0.2rem; 
}
.item .num{
    margin-top:.2rem;
    font-size: 0.3rem;
    margin-left: 0.1rem;
}
.item .info{
    margin-left: .3rem;
}
.item .info .song{
    font-size: 0.4rem;
    color: #000;
    /* 当播放器无法改变位置时给歌曲名字设置宽度  */
    width: 4.7rem;
}
.item .info .singer{
    font-size: 0.2rem;
    color: #999;
    margin-top: 0.1rem ;
}
/* 先找到前三个.item 然后在.num */
.item:nth-child(-n+3) .num{
    color:palevioletred;
}
.icon{
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50% 50%;
    border: 0.02rem solid #999;
    margin-top: 0.15rem;
    float: right;
 
}
 .icon .bs-ico{
  /* 三角形 */
    height:0;
    border-top:5px solid transparent;
    border-bottom:5px solid transparent;
    border-right:8px solid black;
    display: inline-block;
    margin-bottom: 0.63rem;
    margin-left: 0.071rem;

}
.hotop{
    width:100%;
    height:3rem;

}
.sg-b{
    font-size: 0.4rem;
    width: 3.9rem;
    display: inline-block;
    color: #ffffff;
    top:0px;
    overflow: hidden;
    padding-top: 0.4rem;
}
</style>