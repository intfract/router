import { Router } from './router.js'

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/about": "/pages/about.html",
  "/lorem": "/pages/lorem.html",
}

const router = new Router(routes)