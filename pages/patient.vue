<template>
  <v-container>
    <v-row>
      <v-col>
        <section>
          <v-row>
            <v-col>
              <v-text-field variant="outlined" placeholder="Pesquisar pacientes" v-model="search"></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col align="end" class="pa-6">
              <v-btn to="/patient/add">Novo paciente</v-btn>
            </v-col>
          </v-row>
        </section>
        <section>
          <v-container>
            <v-row>
              <v-col>
                <v-sheet rounded="lg" class="pa-4">
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Foto
                        </th>
                        <th class="text-left">
                          Nome completo
                        </th>
                        <th class="text-left">
                          Número do CNS
                        </th>
                        <th class="text-left">
                          CEP
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="pointer"
                        v-for="item in searchListPatients"
                        @click="$router.push(`/patient/edit/${item.id}`)"
                        :key="item.id"
                      >
                        <td>
                          <v-avatar>
                            <v-img :src="item.image"></v-img>
                          </v-avatar>
                        </td>
                        <td>{{ item.fullNamePatient }}</td>
                        <td>{{ item.cns }}</td>
                        <td>{{ item.address.cep }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </section>
        <NuxtPage />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const search = ref()
watch(search, (value) => searchPatients({ name: value }))

onMounted(async () => {
  await getPatients()
})
</script>