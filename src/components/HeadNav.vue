<template>
<div class = 'head'>
  <div class='container'>
    <div class="head_left" >
      <p>{{name}}</p>
      <span> | </span>
      <p>{{shop}}</p>
      <span> | </span>
      <p>{{phone}} </p>
      <span> | </span>
      <p> {{car}} </p>
      <span> | </span>
      <p>{{cloud}} </p>
      <span> | </span>
      <p>{{lot}} </p>
      <span> | </span>
      <p> {{pin}} </p>
      <span> | </span>
      <p> {{ai}} </p>
      <span> | </span>
      <p>{{photo}} </p>
      <span> | </span>
      <p> {{rule}} </p>
      <span> | </span>
      <p> {{app}}</p>
      <span> | </span>
      <p> {{select}}</p>
      <span> | </span>
    </div>
    <div class="head_right">
      <p>{{login}}</p>
      <span> | </span>
      <p>{{sign}}</p>
      <span> | </span>
      <p>{{mail}}</p>
      <span> | </span>
      <p class="shopcar">{{shopcar}}</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const name = '小米官网'
const shop = '小米商城'
const phone = '小米澎湃OS'
const car = '小米汽车'
const cloud = '云服务'
const lot = 'loT'
const pin = '有品'
const ai = '小爱开放平台'
const photo = '资质证照'
const rule = '协议规则'
const app = '下载APP'
const select = 'Select Location'
const login = '登陆'
const sign = '注册'
const mail = '消息通知'
const shopcar = '购物车'

</script>

<style scoped>
.head {
  background-color: #030303;
  color: #b0b0b0;
  box-shadow: 0 0 10px;
  width: 100%;
}

.head_left,
.head_right {
  display: flex;
  align-items: center;
}

.head_left > p,
.head_right > p {
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
}

.head_left > p:hover,
.head_right > p:hover {
  color: white;
}

.shopcar {
  font-weight: bold;
}
</style>

