<template>
   <div class="detail">
       
       <!-- <audio :src="songurl" controls></audio> -->
       <audio ref="myaudio" :src="songurl"></audio>
       <div class="logo">
       </div>

    
          <div class="disc">
           <img src="/static/img/disc-ip6.png"/>
          <!-- <img class="songImg" :src="songinfo.al.picUrl"/> -->
         <img :class="{songmove:isplay,songImg:true,songstop:!isplay}" :src="songinfo.al.picUrl" />
      
       </div>
       <button class="btn" @click="play()">{{tip}}</button>
      <!-- <div @click="e(id)"></div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
           songurl:'',
          isplay:false,
           tip:"播放",
            songinfo:{
                al:{
                    picUrl:''
                }
            }
       }
    },
  mounted(){
  this.songurl ='https://music.163.com/song/media/outer/url?id='+this.$route.params.id+'.mp3 '
 this.$http({
             url:this.apis.songdetail+'?ids='+this.$route.params.id
         }).then(res=>{
            //  console.log(res)
            this.songinfo = res.data.songs[0]
         })
  },
  methods:{
     play(){
            var audio = this.$refs.myaudio;
            if(!this.isplay){
              audio.play();
              this.isplay = true;
              this.tip= '暂停'
            }else{
            audio.pause();
            this.isplay = false;
             this.tip ='播放'
            }
      
        },
  }
   
}
</script>
<style scoped>
.detail {
    width: 100vw;
    height: 100vh;
    background: #666;
}

.detail .disc{
    text-align: center;
}
.detail .disc img{
   width: 5rem;
   height: 5rem;
}
.detail .disc .songImg{
    position:absolute;
    top: 0.93rem;
    left:1.65rem;
    width: 3.1rem;
    height: 3.1rem;
 border-radius: 50% 50%;
 /* animation:circle 3s linear infinite; */
}
.songmove{
    
    animation:circle 3s linear infinite;
}
.songstop{
          animation:circle 3s linear infinite;
          animation-play-state: paused;
}
.btn{
    width: 2rem;
    height: 1rem;
    line-height: 1rem; 
    background: #d43c33;
    border: none;
    color: #ffffff;
    border-radius: 1rem;
    font-size: 0.4rem;
    margin-left: 2rem;
     
}
/* .iem{
    width: 3rem;
    height: 0.5rem;
} */
/* .ite{
     width: 3rem;
    height: 0.5rem;
} */
@keyframes circle{
    0%{
        transform:rotate(0deg)
    }
    100%{
      transform:rotate(360deg)
    }
}
</style>