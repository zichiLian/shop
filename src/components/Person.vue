<template>
<div class = 'head'>
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
</template>

<script lang="ts"     >
export default {
  name:'head',
  data(){
    return{
      name:'小米官网',
      shop:'小米商城',
      phone:'小米澎湃OS',
      car:'小米汽车',
      cloud:'云服务',
      lot:'loT',
      pin:'有品',
      ai:'小爱开放平台',
      photo:'资质证照',
      rule:'协议规则',
      app:'下载APP',
      select:'Select Location',
      login:'登陆',
      sign:'注册',
      mail:'消息通知',
      shopcar:'购物车'
    }
},
  methods:{
    showTel(){
      alert(this.login);
    }
  }
}
</script>

<style scoped>

.head{
  display: flex;
  background-color: #030303;
  color: #b0b0b0;
  box-shadow: 0 0 10px;
  width:100%;
}
.head_left{
  display: flex;
  flex-direction: row;
}
.head_left .head_right>p{
  padding:5px;
  font-size:12px;
  /*border-right:#333333 1px solid;*/
}
.head_right{
  margin-left:200px;
  display: flex;
  flex-direction: row;
}

</style>
