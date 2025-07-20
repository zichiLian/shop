<template>
  <div class="home-hero">
    <div class="container">
      <div class="carousel-list">
      <div class="list-menu">
        <div>手机</div>
        <div>电视</div>
        <div>家电</div>
        <div>笔记本 平板 显示器</div>
        <div>出行 穿戴</div>
        <div>耳机 音箱</div>
        <div>健康 儿童</div>
        <div>生活 箱包</div>
        <div>智能 路由器</div>
        <div>电源 配件</div>
      </div>
      </div>
      <div class="carousel">
  <swiper
    :navigation="true"
    :modules="[SwiperAutoplay,SwiperNavigation,SwiperEffectFade]"
    :slides-per-view="1"
    :loop="true"
    :effect="'fade'"
    :autoplay="{ delay: 3000 }"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" :alt="slide.title">
    </swiper-slide>
  </swiper>
      </div>
    </div>
    <div class="menu_news">
      <div class="menu_service">
        <span><el-icon><Edit/></el-icon><p>保障服务</p></span>
        <span><el-icon><Search/></el-icon><p>企业团购</p></span>
        <span><el-icon><Edit/></el-icon><p>F码通道</p></span>
        <span><el-icon><Edit/></el-icon><p>米粉卡 </p></span>
        <span><el-icon><Edit/></el-icon><p>以旧换新</p></span>
        <span><el-icon><Edit/></el-icon><p>话费充值</p></span>
      </div>
      <div class="news_img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e981f78d2ac17c504975a719cb8b069d.png"/></div>
      <div class="news_img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7404444f0c79b4bbb63e07724f502b86.png"/></div>
      <div class="news_img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce384835b97655abd1448f3e45eb48ff.png"/></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import 'swiper/css/effect-fade';
import { Edit, Search } from '@element-plus/icons-vue'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay , Navigation ,EffectFade} from 'swiper/modules'

const SwiperEffectFade = EffectFade
const SwiperNavigation = Navigation
const SwiperAutoplay = Autoplay
const slides = ref([
  {id:1,image:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a25b54b7b8072cbb2a058e58c6e1765.jpg',duration:5000},
  {id:2,image:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2123d32f96441804f05e4407635945.jpg',duration:5000},
  {id:3,image:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/969bbe0838d03f66e68e170b1ff3adbe.jpg',duration:5000},
  {id:4,image:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c9726653e156360c02c9640a20e9c5f.jpg',duration:5000},
  {id:5,image:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e3f9630cd04bb2e4d37d1b136b4fae9.jpg',duration:5000}
])

</script>

<style>
@import 'swiper/css';
.swiper-slide>img {
  width:1000px;
  height:400px;
}


.swiper{
  width:1000px;
  height:450px;
}

.list-menu{
  padding-top:5px;
  height:400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: #3f3d3d;
}
.list-menu>div{
  background: #3f3d3d;
  color:#ffffff;
  width:266px;
  height:30px;
  padding-top:5px;
  padding-left:30px;
  text-align: left;
  font-size: 13px;
}
.menu_news{
  width:1226px;
   display: flex;
   gap:10px;
  flex-direction: row;
  margin-left:auto;
  margin-right:auto;
}
.menu_service{
   display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.menu_service>span{
  width:76px;
  height:82px;
  font-size:12px;
  color:white;
}
.menu_service>span>p{
  padding-left:12px;
}

.menu_service{
  width:234px;
  height:170px;
  background: #3f3d3d;
}


.news_img>img{
  width:316px;
  height:170px;
}

el-icon>svg{
  width:50px;
  padding-left:20px;
  padding-top:20px;
}


</style>
