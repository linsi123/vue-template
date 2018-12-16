import Vue from 'vue'
import Router from 'vue-router'
import setGuards from './guards'

Vue.use(Router)
/**
 * 懒加载函数
 * @param path
 * @return {function(): Promise<T | never>}
 */
const lazyLoader = path => () =>
  import(`@/views/${path}.vue`).then(m => m.default)

const router = setGuards(
  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: lazyLoader('Home')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: lazyLoader('About')
      },
      {
        path: '/todo',
        name: 'todo',
        component: lazyLoader('Todo')
      }
    ]
  })
)

export default router
