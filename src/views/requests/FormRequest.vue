<template>
  <v-form class="multi-col-validation">
    <v-row>
      <v-col>
        <H1> Nova solicitação</H1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="firstName"
          label="Nome"
          outlined
          dense
          placeholder="Nome"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="lastName"
          label="E-mail"
          outlined
          dense
          placeholder="E-mail"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          dense
          placeholder="CPF"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="city"
          label="Tipo"
          outlined
          dense
          placeholder="Tipo"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="country"
          label="Descrição"
          outlined
          dense
          placeholder="Descrição"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn color="primary">
          Enviar
        </v-btn>
        <v-btn type="reset" outlined class="mx-2">
          Limpar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiCellphone,
  mdiLockOutline
} from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline
      }
    }
  }
}
</script>
