<template>
  <!--html-->
  <div class="app">
    <Head/>
  </div>
</template>

<script lang="ts">
//JS TS
import Head from '../src/components/Person.vue'
export default {
  name: 'App', //组件名
  components:{Head}
}
</script>

<style>
/*CSS*/
#app{
  display: flex;
  flex-direction: column;
}
</style>
