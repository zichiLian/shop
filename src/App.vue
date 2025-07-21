<template>
  <!--html-->
  <div class="app">
    <HeadNav/>
    <TopNavbar/>
    <ServiceNav/>
    <Carousel/>
    <ShopMain/>
  </div>
</template>

<script setup lang="ts">
//JS TS
import HeadNav from './components/HeadNav.vue'
import TopNavbar from './components/TopNavbar.vue'
import Carousel from "@/components/Carousel.vue";
import ServiceNav from "@/components/ServiceNav.vue";
import ShopMain from '@/components/ShopMain.vue';

</script>

<style>
/*CSS*/
#app{
  max-width: none;
  width:100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
}
.container{
  width:1226px;
  margin-left:auto;
  margin-right:auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.price{
  font-size:14px;
  color:#ed732e;
}
</style>
