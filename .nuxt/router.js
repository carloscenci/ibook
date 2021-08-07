import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64781211 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a3bc30d0 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _4dd78fed = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _b138ca7a = () => interopDefault(import('../pages/book/_id/index.vue' /* webpackChunkName: "pages/book/_id/index" */))
const _815ba776 = () => interopDefault(import('../pages/category/_name.vue' /* webpackChunkName: "pages/category/_name" */))
const _17942c96 = () => interopDefault(import('../pages/book/_id/read.vue' /* webpackChunkName: "pages/book/_id/read" */))
const _f7a02654 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _64781211,
    name: "about"
  }, {
    path: "/dashboard",
    component: _a3bc30d0,
    name: "dashboard"
  }, {
    path: "/login",
    component: _4dd78fed,
    name: "login"
  }, {
    path: "/book/:id",
    component: _b138ca7a,
    name: "book-id"
  }, {
    path: "/category/:name?",
    component: _815ba776,
    name: "category-name"
  }, {
    path: "/book/:id?/read",
    component: _17942c96,
    name: "book-id-read"
  }, {
    path: "/",
    component: _f7a02654,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
