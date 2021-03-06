import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MemberJoin from '../views/MemberJoin.vue'
import MemberOut from '../views/MemberOut.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'main',
        name: 'Main',
        component: Main
      },
      {
        path: 'join',
        name: 'MemberJoin',
        component: MemberJoin
      },
      {
        path: 'out',
        name: 'MemberOut',
        component: MemberOut
      }
    ]
  }
  // {
  //   path: '/join',
  //   name: 'MemberJoin',
  //   component: MemberJoin
  // },
  // {
  //   path: '/out',
  //   name: 'MemberOut',
  //   component: MemberOut
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
