<template>
  <!--html-->
  <div class="app">
    <HeadNav/>
    <div v-if="isHomePage"><HomeView/></div>
    <div v-if="BuyPage"><Buy/></div>
    <div v-if="isCart"><Cart/></div>
    <ShopMain/>
  </div>
</template>

<script setup lang="ts">
//JS TS
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
import HeadNav from './components/HeadNav.vue'
import ShopMain from '@/components/ShopMain.vue';
import HomeView from "@/views/HomeView.vue";
import Buy from '@/views/Buy.vue'
import Cart from '@/components/Cart.vue'

const isHomePage = computed(() => route.path === '/')
const BuyPage= computed(() => route.path === '/buy')
const isCart = computed(() => route.path === '/cart')
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
