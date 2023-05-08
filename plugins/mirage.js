import { makeServer } from '~/server'

export default defineNuxtPlugin((app) => {
  if (process.env.NODE_ENV === "development") {
    makeServer()
    console.log('Server MirageJs running on development mode')
  }
})