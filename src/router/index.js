import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('views/login/login')
const Layout = () => import('views/layout/layout')
const Home = () => import('@/views/home/home')
const Content = () => import('@/views/content/content-management')
const Material = () => import('@/views/material/material')
const Comment = () => import('@/views/comment/comment')
const Publish = () => import('@/views/publish/publish')
const Fans = () => import('@/views/fans/fans')
const Settings = () => import('@/views/settings/settings')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/content',
        name: 'content',
        component: Content
      },
      {
        path: '/material',
        name: 'material',
        component: Material
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/comment',
        name: 'comment',
        component: Comment
      },
      {
        path: '/fans',
        name: 'fans',
        component: Fans
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
