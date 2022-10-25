<template>
  <v-col>
    <v-row>
      <v-col>
        <form-request />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <H1>Lista de Solicitações</H1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate color="primary">
              <template v-slot:actions>
                <v-icon color="white">
                  mdi-magnify
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="mt-1">
                <v-col cols="12" lg="4" md="4" sm="4">
                  <v-text-field
                    label="ID"
                    outlined
                    dense
                    placeholder="ID"
                    hide-details="auto"
                  />
                </v-col>
                <v-col cols="12" lg="4" md="4" sm="4">
                  <v-text-field
                    label="Nome"
                    outlined
                    dense
                    placeholder="Nome"
                    hide-details="auto"
                  />
                </v-col>
                <v-col cols="12" lg="4" md="4" sm="4">
                  <v-text-field
                    label="Email"
                    outlined
                    dense
                    placeholder="Email"
                    hide-details="auto"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex justify-end">
                  <v-btn class="mr-2" color="secondary">
                    Limpar
                  </v-btn>

                  <v-btn color="primary">
                    Pesquisar
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <datatable />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-pagination :length="6" :value="1" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Datatable from './Datatable.vue'
import FormRequest from './FormRequest.vue'

export default {
  components: {
    Datatable,
    FormRequest
  }
}
</script>
