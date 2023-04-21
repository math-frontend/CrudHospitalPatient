<template>
  <p>Index {{ storage?.theme }}</p>
</template>

<script setup>
const storage = ref(null)
const listTodo = ref([])
const todoData = ref({
  id: 'Abc222',
  name: '',
  description: '',
  done: false
})

onMounted(() => {
  storage.value = localStorage
})
</script>