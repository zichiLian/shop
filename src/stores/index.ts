import { createStore } from 'vuex'

export default createStore({
  state: {
    // 商品数据
    products: [
      { id: 1, name: '小米13', price: 3999 },
      { id: 2, name: 'Redmi K60', price: 2499 }
    ],

    // 购物车数据
    cart: []
  },

  getters: {
    // 计算购物车总价
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },

    // 计算购物车商品总数
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => {
        return count + item.quantity
      }, 0)
    }
  },

  mutations: {
    // 添加商品到购物车
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
  }

})
