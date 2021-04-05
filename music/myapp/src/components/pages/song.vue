<template>
    <div>
        <div class="hotop" :style="'background: url('+bgimg+');'">
            <img :src="bgimg" style="width:100px;height:100px;margin:0.2rem;float:left"/>
             <div class="sg-b">{{sg}}</div>
        </div>
        <div class="box">
      <div class="item" v-for="(song,index) of songs" :key="song.id" @click="toDetail(song.id)">
        <div class="num">{{index > 8 ?index + 1:'0' +(index+1)}}</div>
        <div class="info">
            <div class="song">{{song.name}}</div>
            <!-- 在里面会有一个ar,要循环 -->
            <div class="singer">
         <span v-for="singer of song.ar" :key="singer.id">
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
            songs:[],
            bgimg:'/static/img/banner-s.png',
            sg:'11111'
        }
    },
    // 动态参数
    methods:{
        toDetail(m){
               this.$router.push('/play/'+m)
        }
    },
    // 请求接口
    mounted(){
        //路由中有id 就获取歌单里面的列表如果没有就获取榜单上的
        // 当我点哪个歌单进入的都是热歌榜，如果有id就用this.apis.playlist用这个链接
        // 负责就用this.apis.hot
        // 当有id的时候就用到拼接
        var url = this.$route.params.id ? this.apis.playlist+'?id='+this.$route.params.id : this.apis.hot
        this.$http({
            // url:this.apis.hot
            url
        }).then(res=>{
            // console.log(res)
            this.songs= res.data.playlist.tracks;
            this.updateTime = res.data.playlist.updateTime;
            this.bgimg = res.data.playlist.coverImgUrl;
            this.sg = res.data.playlist.description
        })
    }
}
</script>
<style scoped>
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