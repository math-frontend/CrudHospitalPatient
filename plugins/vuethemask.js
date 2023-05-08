import { mask } from 'vue-the-mask'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('mask', (el, binding) => {
    if (binding.value) {
      mask(el, binding)
    }
  })
})
