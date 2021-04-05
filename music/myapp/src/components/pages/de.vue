<template>
    <div>
        <!-- <div v-for="ar of ads" :key="ar.index"> -->
            <img :src="ads.picUrl"/>
            <div class="b-one">{{ads.ti}}</div>
            <div class="b-two">{{ads.txt}}</div>
                <div class="b-three">{{ads.briefDesc}}</div>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
               ads:'',
            //    as:''
        }
    },
    mounted(){
       var url = this.$route.params.id ? this.apis.lyric+'?id='+this.$route.params.id : this.apis.hot
              this.$http({
             url
         }).then(res=>{
            //  console.log(res)
            // this.songinfo = res.data.songs[0]
            this.ads = res.data.introduction[0]
            this.ads = res.data.artists.alias
         })
    },
}
</script>
<style scoped>
.b-one{
    font-size: 0.34rem;
}
.b-two{
    font-size: 0.5rem;
}
.b-three{
    font-size: 0.5rem;
}
</style>