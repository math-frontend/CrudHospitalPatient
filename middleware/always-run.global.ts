export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/') {
    return navigateTo('/patient', { redirectCode: 301 })
  }
})