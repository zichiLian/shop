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
      <div class="old_price">原始价格</div>
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
  <div class="product_footer">
    <h2>价格说明</h2>
    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png"/>
  </div>
</template>

<script>

</script>
<style scoped>

.buy_page {
  color: #333;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}


.buy_header {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

.buy_header > div:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-right: 30px;
}

.buy_cate {
  color: #666;
  font-size: 14px;
}

.buy_service {
  display: flex;
  margin-left: auto;
  gap: 25px;
}

.buy_service a {
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.buy_service a:hover {
  color: #ff6700;
}

.buy_content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  padding: 30px 0;
}

.product_img {
  height: 500px;
  background: #f5f5f5;
  border-radius: 8px;
}

.product_content h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.product_content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
}

.product_price {
  font-size: 28px;
  color: #ff6700;
  font-weight: bold;
  margin: 20px 0;
}

.product_send {
  padding: 8px 12px;
  background: #fff8e6;
  color: #ff6700;
  border-radius: 4px;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 20px;
}

.address_box {
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 30px;
  position: relative;
}

.address_box::before {
  content: "配送至";
  position: absolute;
  top: -10px;
  left: 10px;
  background: white;
  padding: 0 5px;
  font-size: 12px;
  color: #999;
}

.buy_sku {
  margin: 30px 0;
}

.sku_title {
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.title_study {
  color: #ff6700;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
}

.sku_size {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.sku_size > div {
  padding: 8px 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.sku_size > div:hover {
  border-color: #ff6700;
  color: #ff6700;
}


.product_service {
  margin-top: 40px;
}

.service_box {
  margin-bottom: 25px;
}

.service_content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 10px;
}

.service_content > div {
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.service_content > div:hover {
  border-color: #ff6700;
  box-shadow: 0 2px 10px rgba(255, 103, 0, 0.1);
}


.buy_button {
  background: #ff6700;
  color: white;
  text-align: center;
  padding: 15px 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 30px 0 15px;
  transition: background 0.3s;
}

.buy_button:hover {
  background: #f25800;
}

.like {
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}

.like:hover {
  color: #ff6700;
}


</style>
