<template>
<div class="buy_page">
  <div class="buy_header">
    <div>商品名称</div>
    <div class="buy_cate">商品系列</div>
    <div class="buy_service">
      <a>概述页</a>
      <a>参数页</a>
      <a>F码通道</a>
      <a>咨询客服</a>
      <a>用户评价</a>
    </div>
  </div>

  <div class="buy_content">
    <div class="product_img"></div>
    <div class="product_content">
      <h2>商品昵称</h2>
      <p>密密麻麻的商品介绍</p>
      <p>商品性质</p>
      <div class="product_price">商品价格</div>
      <div class="product_send">赠品</div>
      <div class="address_box">地址</div>
      <div class="buy_sku">
        <div class="product_size">
          <div class="sku_title">选择版本</div>
          <div class="sku_size">各个版本（此处循环遍历进数据）</div>
          <div class="sku_title">选择颜色</div>
          <div class="sku_size">各个颜色（同理）</div>
        </div>
        <div class="product_service">
          <div class="service_box">
            <div class="sku_title">选择小米的尊享换新计划</div>
            <div class="title_study">了解尊享换新计划</div>
            <div class="service_content">此处加载不同数据的不同换新计划</div>
          </div>

          <div class="service_box">
            <div class="sku_title">选择小米的意外保护</div>
            <div class="title_study">了解意外保护</div>
            <div class="service_content">此处加载不同数据的不同售后</div>
          </div>

          <div class="service_box">
            <div class="sku_title">选择小米的云空间服务</div>
            <div class="title_study">了解云空间服务</div>
            <div class="service_content">此处加载不同数据的不同换新计划</div>
          </div>
        </div>
      </div>
      <div class="buy_button">加入购物车</div>
      <div class="like">喜欢</div>
    </div>
  </div>

</div>
</template>

<script>

</script>

<style scoped>

</style>
