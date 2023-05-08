<template>
  <section>
    <Form
      @submit="onSubmit"
      @invalid-submit="onInvalidSubmit"
      :validation-schema="schemaRulesForm"
      :initial-values="initialValuesFormPatients"
    >
      <v-card>
        <v-card-title class="pl-9 pt-8">
          <span v-if="mode === 'edit'" class="text-h5">Editar paciente</span>
          <span v-else class="text-h5">Novo paciente</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12">
                <formImage name="image" label="Alterar imagem"/>
              </v-col>
              <v-col xs="12" sm="12" md="6" cols="12">
                <formInput class="pa-1" label="Nome Completo do Paciente*" name="fullNamePatient" placeholder="Nome Completo do Paciente*" />
              </v-col>
              <v-col xs="12" sm="12" md="6" cols="12">
                <formInput class="pa-1" label="Nome Completo da Mãe*" name="fullNameMother" placeholder="Nome Completo da Mãe*" />
              </v-col>
              <v-col xs="12" sm="12" md="3" cols="12">
                <formInput class="pa-1" label="Data de Nascimento*" name="dateOfBirth" mask="##/##/####" placeholder="Data de Nascimento*" />
              </v-col>
              <v-col xs="12" sm="12" md="4" cols="12">
                <formInput class="pa-1" label="CPF*" name="cpf" mask="###.###.###-##" placeholder="CPF*" />
              </v-col>
              <v-col xs="12" sm="12" md="5" cols="12">
                <formInput class="pa-1" label="CNS*" name="cns" mask="### #### #### ####" placeholder="CNS*" />
              </v-col>
              <v-col xs="12" sm="12" md="3" cols="12">
                <formInput class="pa-1" label="CEP*" v-model="cep" mask="#####-###" name="addressCep" placeholder="CEP*" />
              </v-col>
              <v-col xs="12" sm="12" md="2" cols="12">
                <formInput class="pa-1" label="Estado*" name="addressState" placeholder="Estado" />
              </v-col>
              <v-col xs="12" sm="12" md="3" cols="12">
                <formInput class="pa-1" label="Cidade*" name="addressCity" placeholder="Cidade" />
              </v-col>
              <v-col xs="12" sm="12" md="4" cols="12">
                <formInput class="pa-1" label="Bairro*" name="addressNeighborhood" placeholder="Bairro" />
              </v-col>
              <v-col xs="12" sm="12" md="2" cols="12">
                <formInput class="pa-1" label="Número*" name="addressNumber" placeholder="Número" />
              </v-col>
              <v-col xs="12" sm="12" md="10" cols="12">
                <formInput class="pa-1" label="Complemento" name="addressComplement" placeholder="Complemento" />
              </v-col>
            </v-row>
            <small>* Indica campos obrigatório</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          class="text-none text-white text-subtitle-1 mr-7"
          color="primary"
          size="large"
          type="submit"
          variant="flat"
        >
        {{ mode === 'edit' ? 'Salvar' : 'Adicionar' }}
        </v-btn>
        </v-card-actions>
      </v-card>
    </Form>
  </section>
</template>

<script setup>
import { Form } from 'vee-validate'

const emit = defineEmits(['close']);

const route = useRoute()
const router = useRouter()
const editingPatientId = route.params.id

const initialValuesFormPatients = ref()
const cep = ref()
const props = defineProps({
  mode: {
    type: String,
    default: 'add'
  }
})

onMounted(() => {
  if (!!editingPatientId && props.mode === 'edit') {
    goEditPatient(editingPatientId)
  }
})

watch(cep, (value) => getAddressViaCep(value))

// cep autocomplete
async function getAddressViaCep (value) {
  if (value.length === 9) {
    const data = await getInfoViaCep(value)
    console.log('ViaCep', data)
  }
  console.log('ViaCep length', value.length)
}

// Form
async function onSubmit (value, { resetForm }) {
  const editing = editingPatientId

  if (!editing) {
    await addPatient(value)
  } else {
    await updatePatient(editing, value)
  }

  emit('close', true)
  initialValuesFormPatients.value = {}
  resetForm()
}

function onInvalidSubmit({ values, errors, results }) {}

async function goEditPatient (index) {
  const data = await getPatient(index)

  // insert info in input for edit
  initialValuesFormPatients.value = {
    image: data.image,
    fullNamePatient: data.fullNamePatient,
    fullNameMother: data.fullNameMother,
    dateOfBirth: data.dateOfBirth,
    cpf: data.cpf,
    cns: data.cns,
    addressCep: data.address.cep,
    addressState: data.address.state,
    addressCity: data.address.city,
    addressNeighborhood: data.address.neighborhood,
    addressComplement: data.address.complement,
    addressNumber: data.address.number
  }
}
</script>


<!-- <v-btn class="mr-2" type="button" @click="getPatient(patient.id)">Visualizar</v-btn>
<v-btn class="mr-2" type="button" @click="goEditPatient(patient.id)">Editar</v-btn>
<v-btn class="mr-2" type="button" @click="removePatient(patient.id)">Remover</v-btn> -->