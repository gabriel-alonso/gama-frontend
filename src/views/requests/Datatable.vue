<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="requests"
      item-key="protocol"
      class="table-rounded"
      :loading="isLoadingRequests"
      hide-default-footer
    >
      <template #[`item.name`]="{item}">
        <div class="d-flex flex-column">
          <span
            class="d-block font-weight-semibold text--primary text-truncate"
          >
            {{ item.name }}
          </span>
          <small>{{ item.protocol }}</small>
        </div>
      </template>

      <template #[`item.status`]="{item}">
        <v-chip small class="font-weight-medium">
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    isRequestsLoading: {
      type: Boolean
    }
  },

  computed: {
    ...mapGetters('requestsModule', ['requests', 'isLoadingRequests'])
  },

  methods: {
    ...mapActions('requestsModule', ['findAll'])
  },

  async mounted() {
    await this.findAll()
  },

  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'NOME', value: 'name' },
        { text: 'E-MAIL', value: 'email' },
        { text: 'CPF', value: 'cpf' },
        { text: 'TIPO', value: 'type' },
        { text: 'STATUS', value: 'status' },
        { text: 'DESCRIÇÃO', value: 'description' },
        { text: 'AÇÃO', value: 'action' }
      ]
    }
  }
}
</script>
