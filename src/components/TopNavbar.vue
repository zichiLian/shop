<template>
  <div class="top-navbar">
    <div class="container">
    <span class="mi_logo">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi.com-assets/shop/img/logo-mi2.png"/>
    </span>
    <span class="zhanwei"></span>

    <span
      v-for="item in navitems"
      class="nav-item"
      @mouseenter="item.show && (active = item.id)"
    >
      {{ item.name }}
    </span>

    <!--下拉框-->
    <div
      class="show-menu"
      :class="{ active: active }"
      @mouseleave="active = null"
    >
      <div class="menu-content" v-if="active">
          <!--v-if条件判断-->

         <!--<a href ='product.link'></a>-->
          <a
            v-for="product in getproducts()"
            :href="product.link"
          >
            <!--<img src='product.image'-->
            <img :src="product.image" width="60">
            {{ product.name }}
            <p class="top-navbar_price">{{product.price}}</p>
          </a>

      </div>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="请输入搜索内容..."
      />
      <button>
        <span class="icon-search">搜索</span>
      </button>
    </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navitems = ref([
  { id: 'phone', name: 'Xiaomi手机',show:true },
  { id: 'redmi', name: 'REDMI手机' ,show:true },
  { id: 'TV',name:'电视',show:true },
  { id: 'book', name: '笔记本',show:true },
  { id: 'pad', name: '平板',show:true },
  { id: 'home', name: '家电',show:true },
  { id: 'route', name: '路由器',show:true },
  { id: 'service', name:'服务中心'},
  { id: 'community', name:'社区'},
])


const products = {
  phone: [
    { name: 'Xiaomi Mix Filp 2 ', link: '#', price:'5999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: 'Xiaomi 15S Pro', link: '#', price:'5499元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: 'Xiaomi Civi 5 Pro ', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: 'Xiaomi 15 Ultra ', link: '#', price:'6499元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: 'Xiaomi 15 ', link: '#', price:'3999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: 'Xiaomi 15 Pro ', link: '#', price:'4999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],
  redmi: [
    { name: 'REDMI K80至尊版', link: '#', price:'2599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: 'REDMI Turbo 4 Pro', link: '#', price:'1899元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: 'REDMI Turbo 4', link: '#', price:'1699元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: 'REDMI 14C', link: '#', price:'469元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: 'REDMI K80 Pro', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: 'REDMI K80', link: '#', price:'2099元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],
  TV:[
    { name: '期间系列-S MiniLED2025', link: '#', price:'3799元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: '旗舰系列-S Pro Mini LED', link: '#', price:'4999元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: '旗舰系列-S Mini LED', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: '巨幕影院-Redmi MAX', link: '#', price:'4999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: '游戏高刷-REDMI X 2025', link: '#', price:'2599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: '性价比爆款-Redmi A', link: '#', price:'1599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],
  book:[
    { name: 'REDMI Book 14锐龙版', link: '#', price:'3799元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: 'REDMI Book Pro16 2025', link: '#', price:'4999元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: 'REDMI Book Pro14 2025', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: 'REDMI Book 14 2025', link: '#', price:'4999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: 'REDMI Book 16 2025', link: '#', price:'2599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: 'REDMI Book 16 2024', link: '#', price:'1599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],
  pad:[
    { name: '期间系列-S MiniLED2025', link: '#', price:'3799元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: '旗舰系列-S Pro Mini LED', link: '#', price:'4999元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: '旗舰系列-S Mini LED', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: '巨幕影院-Redmi MAX', link: '#', price:'4999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: '游戏高刷-REDMI X 2025', link: '#', price:'2599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: '性价比爆款-Redmi A', link: '#', price:'1599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],
  home:[
    { name: '期间系列-S MiniLED2025', link: '#', price:'3799元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: '旗舰系列-S Pro Mini LED', link: '#', price:'4999元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: '旗舰系列-S Mini LED', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: '巨幕影院-Redmi MAX', link: '#', price:'4999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: '游戏高刷-REDMI X 2025', link: '#', price:'2599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: '性价比爆款-Redmi A', link: '#', price:'1599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],
  route:[
    { name: '期间系列-S MiniLED2025', link: '#', price:'3799元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png' },
    { name: '旗舰系列-S Pro Mini LED', link: '#', price:'4999元起', image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png' },
    { name: '旗舰系列-S Mini LED', link: '#', price:'2999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png' },
    { name: '巨幕影院-Redmi MAX', link: '#', price:'4999元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png' },
    { name: '游戏高刷-REDMI X 2025', link: '#', price:'2599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png' },
    { name: '性价比爆款-Redmi A', link: '#', price:'1599元起' ,image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png' },
  ],

}

const active = ref() //默认不激活


const getproducts = () => {
  return  products[active.value] //获取当前active的值
}
</script>

<style>

.top-navbar {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background: #ffffff;
  color:#333 ;
}


.zhanwei{
  width:127px;
}

.mi_logo>img{
  width:56px;
  height:56px;
}

.nav-item {
  padding: 15px 20px;
}


.show-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: whitesmoke;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 100;
  margin: 0;
  height:229px;
  cursor: pointer;
}


.show-menu.active {
  opacity: 1;
  visibility: visible;
}

.menu-content>a>img{
  width:160px;
  height:110px;
}

.show-menu>div {
  display:flex;
  flex-direction:row;
}


.menu-content {
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
}

.menu-content a {
  color: #333;
  width:180px;
  height:166px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
}

.search {
  margin-left:50px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  max-width: 500px;
}
</style>
