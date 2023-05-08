<template>
  <v-row justify="center">
    <v-dialog v-model="modal" width="800" content-class="scrollable-dialog">
      <formTemplatePatient mode="add" @close="closeModal"></formTemplatePatient>
    </v-dialog>
  </v-row>
</template>

<script setup>
  const router = useRouter()
  const modal = ref(true)

  watch(modal, () => closeModal())

  function closeModal () {
    router.replace('/patient')
  }
</script>