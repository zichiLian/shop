<template>
<div class="cart">
  <div class="cart_header">
    <div class="LOGO"></div>
    <div class="cart_Title">我的购物车</div>
    <div class="cart-tips">温馨提示:产品是否购买成功,以最终下单为准哦，请尽快结算</div>
    <div class="cart-user">登陆|注册</div>
  </div>
  <div class="cart_content">
    <div class="product_title">
     <div class="all_click">全选</div>
      <div class='click_name'>商品名称</div>
      <div class="col-price">单价</div>
      <div class="col-num">数量</div>
      <div class="col-tol">小记</div>
      <div class="col-action">操作</div>
    </div>
    <div class="product_content">
      <div class="col-check"></div>
      <div class="product_img"></div>
      <div class="col-name">商品信息</div>
      <div class="col-price">对应价格</div>
      <div class="col-num"></div>
      <div class="col-tol"></div>
      <div class="col-action"></div>
      <div class="send"></div>
    </div>
    <div class="cart-service">此处加载对应服务</div>
  </div>
  <div class="opinion">
    <div class="to-shop">继续购物</div>
    <div class="tol-num">已选择 件</div>
    <div class="tol-price">合计：<span class="price"></span></div>
    <div class="primary">去结算</div>
  </div>
</div>
  <div class="guess_title">买购物车中商品的人还买了</div>
<!--  <div class="guess_like">-->
<!--    <span class="guess_product">-->
<!--      <img/>-->
<!--      <h2>遍历商品信息</h2>-->
<!--      <p class="guess_price">价格</p>-->
<!--      <p class="guess_tips">评价数</p>-->
<!--    </span>-->
<!--  </div>-->

</template>

<script>

</script>

<style scoped>

.cart {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #333;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  background: #f5f5f5;
  min-height: 100vh;
}


.cart_header {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  background: white;
  position: relative;
}

.LOGO {
  width: 100px;
  height: 40px;
  background: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/logo.png') no-repeat;
  background-size: contain;
  margin-right: 30px;
}

.cart_Title {
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
}

.cart-tips {
  color: #757575;
  font-size: 14px;
  flex-grow: 1;
}

.cart-user {
  color: #757575;
  font-size: 14px;
  cursor: pointer;
}

.cart-user:hover {
  color: #ff6700;
}


.product_title {
  display: grid;
  grid-template-columns: 50px 1fr 120px 120px 120px 80px;
  align-items: center;
  padding: 15px 0;
  background: white;
  margin-top: 20px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  color: #757575;
}

.all_click {
  display: flex;
  align-items: center;
  justify-content: center;
}


.product_content {
  display: grid;
  grid-template-columns: 50px 100px 1fr 120px 120px 120px 80px;
  align-items: center;
  padding: 20px 0;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}

.product_img {
  width: 80px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 4px;
  margin-right: 15px;
}

.col-name {
  padding-left: 20px;
  font-weight: 500;
}

.col-price {
  font-weight: bold;
}

.col-num {
  display: flex;
  align-items: center;
}

.col-num button {
  width: 30px;
  height: 30px;
  border: 1px solid #e0e0e0;
  background: white;
  font-size: 16px;
  cursor: pointer;
}

.col-num input {
  width: 50px;
  height: 30px;
  border: 1px solid #e0e0e0;
  text-align: center;
  margin: 0 5px;
}

.col-tol {
  font-weight: bold;
  color: #ff6700;
}

.col-action {
  color: #757575;
  font-size: 14px;
  cursor: pointer;
}

.col-action:hover {
  color: #ff6700;
}

.send {
  position: absolute;
  bottom: 5px;
  left: 150px;
  font-size: 12px;
  color: #ff6700;
  background: #fff5f0;
  padding: 2px 5px;
  border-radius: 2px;
}


.cart-service {
  background: white;
  padding: 15px 20px;
  border-radius: 0 0 8px 8px;
  margin-bottom: 20px;
  color: #757575;
  font-size: 14px;
}


.opinion {
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 8px;
}

.to-shop {
  color: #757575;
  cursor: pointer;
  margin-right: 20px;
}

.to-shop:hover {
  color: #ff6700;
}

.tol-num {
  margin-right: auto;
  color: #757575;
}

.tol-price {
  font-size: 18px;
  margin-right: 20px;
}

.tol-price .price {
  color: #ff6700;
  font-weight: bold;
  font-size: 24px;
}

.primary {
  background: #ff6700;
  color: white;
  padding: 12px 40px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.primary:hover {
  background: #f25800;
}


.guess_title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 4px solid #ff6700;
}

.guess_like {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-bottom: 50px;
}

.guess_product {
  background: white;
  padding: 15px;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
  display: block;
}

.guess_product:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.guess_product img {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 10px;
}

.guess_product h2 {
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guess_price {
  color: #ff6700;
  font-weight: bold;
  margin-bottom: 5px;
}

.guess_tips {
  color: #757575;
  font-size: 12px;
}

</style>
