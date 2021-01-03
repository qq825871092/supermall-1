import vue from 'vue'
import  vueRouter from 'vue-router'

vue.use(vueRouter)
const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')
const detail = () => import('../views/detail/detail')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail/:iid',
    component:detail
  }
]

const router = new vueRouter({
  routes,
  mode:'history'
})

export default  router
