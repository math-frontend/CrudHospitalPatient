<template>
  <div class="container-input">
    <small>{{ label }}</small>
    <Field :name="name" v-slot="{ field }">
      <v-text-field
        @input="$emit('update:modelValue', $event.target.value)"
        class="pb-2"
        variant="outlined"
        density="compact"
        type="text"
        :placeholder="label"
        :error="!!errorMessage"
        v-bind="field"
        v-mask="mask"
        hide-details
      ></v-text-field>
    </Field>
    <div class="mb-2">
      <small class="text-red" v-if="errorMessage">{{ errorMessage }}</small>
    </div>
  </div>
</template>

<script setup>
import { Field, useField } from 'vee-validate';

const { errorMessage } = useField(props.name);

defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  name: String,
  type: String,
  placeholder: String,
  mask: String
})
</script>
