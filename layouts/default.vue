<template>
  <v-app>
    <v-navigation-drawer
      color="blue-darken-1"
      absolute
      rail
    >
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="white"
        size="36"
      >

        <v-img src="https://st4.depositphotos.com/13768208/39777/i/600/depositphotos_397779328-stock-photo-surprised-caucasian-man-with-curly.jpg" alt="image_profile" />
      </v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>
      <v-list>
        <v-list-item active link>
          <template v-slot:prepend>
            <v-icon icon="mdi-account-injury-outline"></v-icon>
          </template>
        </v-list-item>
        <v-list-item link>
            <template v-slot:prepend>
              <v-icon icon="mdi-calendar"></v-icon>
            </template>
        </v-list-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-icon icon="mdi-list-box"></v-icon>
          </template>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-navigation-drawer width="280" color="white">
      <div class="ma-8">
        <p class="text-h6 text-md-h5 text-lg-h5 font-weight-bold">Pacientes</p>
      </div>
      <v-list class="pa-4">
        <v-list-item rounded="xl" title="Lista de pacientes" active link>
          <template v-slot:prepend>
            <v-icon color="blue-darken-2" icon="mdi-arrow-right"></v-icon>
          </template>
        </v-list-item>
        <v-list-item rounded="xl" title="Agendamentos" link></v-list-item>
        <v-list-item rounded="xl" title="Agendamentos" link></v-list-item>
        <v-list-item rounded="xl" title="Prontuários" link></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
