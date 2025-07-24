import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/buy',
      name:'buy',
      component:() => import('@/views/Buy.vue'),
      children:[
        {
          path:'/buys',name:'buys',
          component:() => import('@/views/Buys.vue'),
         meta:{ title:'商品信息'}
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:()=> import('@/components/Cart.vue')
    },
    // {
    //   path:"*",
    //   name:'error',
    //   component:()=>import('@/views/Error.vue')
    // }
  ],
})

export default router
