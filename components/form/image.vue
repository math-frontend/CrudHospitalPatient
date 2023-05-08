<template>
<v-container>
  <v-row align="center">
    <v-col cols="2" v-show="imageUrl">
      <v-avatar size="90px">
        <v-img :src="imageUrl" />
      </v-avatar>
    </v-col>
    <v-col>
      <Field :name="name" v-slot="{ handleBlur }">
        <input
          class="hidden"
          id="imageUpload"
          type="file"
          accept="image/*"
          @blur="handleBlur"
          @change="handleChangeImage"
        />
      </Field>
      <label
        for="imageUpload"
        class="mr-2 pointer v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated"
      >
        {{ imageUrl ? 'Alterar imagem' : 'Inserir imagem' }}
      </label>
      <v-btn v-show="imageUrl" type="button" @click="removeImagePreview">Remover imagem</v-btn>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import { Field, useField } from 'vee-validate';

const { errorMessage, value: imageUrl } = useField(props.name);

const props = defineProps({
  label: String,
  name: String
})

async function handleChangeImage (event) {
  const file = event.target.files[0];
  convertImageBase64(file, (e) => updateImagePreview(e))
}

function updateImagePreview (image) {
  imageUrl.value = image
}

function removeImagePreview () {
  imageUrl.value = null
}
</script>
