<template>
  <div>
    <!-- 轮播图 -->
    <swiper
      v-if="banners.length"
      class="swiper"
      ref="mySwiper"
      :options="swiperOption"
      @someSwiperEvent="callback"
    >
      <swiper-slide v-for="banner of banners" :key="banner.targetId">
        <img :src="banner.imageUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>

    <!-- 推荐歌单第一层 -->
    <h1 class="h1">推荐歌单</h1>

    <div class="box">
      <!-- 遍历图片第二层 -->
      <div class="item" v-for="item of arr" :key="item.id"
       @click="tolist(item.id)">
        <!-- 把图片写法动态的,带":"需要绑定 -->
        <img :src="item.picUrl" alt />
        <p class="title">{{item.name}}</p>
      </div>
    </div>
    <!-- 热门歌手第三层 -->
    <!-- <h1 class="h1">热门歌手推荐</h1>
    <div class="ge">
   <div v-for="gexin of gexins" :key="gexin.id">
   <img :src="gexin.picUrl"/>
    </div>
    </div> -->
   <div class="b-fanxing">
      <div class="fan">繁星音乐平台</div>
   </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  // 在写一个数组
  data() {
    return {
      arr: [],
      banners: [],
   
      swiperOption: {
        //   根据v-if="banners.length"
        loop: true,
        // 自动轮播
        autoplay: true,
        // 轮播一次设置为2秒
        speed: 2000,
        // 上下轮播
        //      direction: 'vertical',
        //      grabCursor: true,
        //      autoHeight: true,
        //      pagination: '.swiper-pagination',
        // 分页的圆形按钮
        pagination: {
          el: ".swiper-pagination",
          //    类型圆点
          type: "bullets",
          clickable: true,
          dynamicBullets: false
        },
        navigation: {
          //    左右按钮
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  // 点击
  methods: {
    callback() {},
    // getPersonalized(){
    //     return this.$http.get(this.apis.recommend)
    // },
    // getBanner(){
    //     return this.$http.get(this.api.banner)
    // }
    // 跳转然后加上动态参数
    tolist(i){
       this.$router.push('/playlist/'+i)
    }
  },

  // 我直接写的静态页面然后再去调用接口给他循环遍历
  mounted() {
    this.$http({
    //   url: "/music/personalized?limit=9"
       url:this.apis.recommend
    }).then(res => {
      //
      //上面是res是变量名字,下面就必须叫res(这个名字可以随便改但是要对应上)
      this.arr = res.data.result;
    }),
      this.$http({
        // url: "/music/banner"
        url:this.apis.banner
      }).then(res => {
        //
        // console.log(res);
        //上面是res是变量名字,下面就必须叫res(这个名字可以随便改但是要对应上)
        this.banners = res.data.banners;
      })
      
  }
};
</script>
<style scoped>
.h1 {
  border-left: 3px solid black;
  font-size: 0.4rem;
  /* 内边距 */
  padding-left: 0.2rem;
  /* 外边距 */
  margin: 0.1rem;
}
.box {
  display: flex;
  /* 弹性布局隔行显示 */
  flex-wrap: wrap;
  /* 间距 */
  justify-content: space-around;
}
.box .item {
  width: 30%;
  /* 超出去的文字就会隐藏 */
  overflow: hidden;
}
.box .item img {
  width: 100%;
}
.box .item .title {
  font-size: 0.02rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
/* 轮播图 */
.swiper {
  height: 3rem;
}
.swiper img {
  width: 100%;
  height: 100%;
}
/* 个性推荐 */
.ge{
    width: 100%;
    height: 4.3rem;
 overflow: hidden;
}
.ge img{
    width:2rem;
    height:2rem;
   float: left;
  margin-left: 0.09rem;
  margin-top: 0.1rem;

}
.b-fanxing{
    width: 100%;
    height: 2rem;
}
.b-fanxing .fan{
  font-size: 0.5rem;
  text-align: center;
  line-height:2rem;
  color: black;
}
</style>