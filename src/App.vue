<template>
  <!--html-->
  <div class="app">
    <HeadNav/>
    <RouterView />
    <ShopMain/>
  </div>
</template>

<script setup lang="ts">
//JS TS

import {computed, ref} from 'vue'
import HeadNav from './components/HeadNav.vue'
import ShopMain from '@/components/ShopMain.vue';
import HomeView from "@/views/HomeView.vue";
import Buy from '@/views/Buy.vue'
import Cart from '@/components/Cart.vue'


const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const routes = {
  '/': HomeView,
  '/buy': Buy,
  '/cart': Cart,
}
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

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
