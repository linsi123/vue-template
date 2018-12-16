// TODO 设置全局路由守卫
const beforeEach = (to, from, next) => {
  next()
}
const afterEach = () => {}

export default router => {
  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
  return router
}
