<template>
  <v-col>
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
                <v-col cols="12" lg="4" md="4" sm="4">
                  <v-text-field
                    label="Idade"
                    outlined
                    dense
                    placeholder="Idade"
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
        <dashboard-datatable />
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
import {
  mdiPoll,
  mdiLabelVariantOutline,
  mdiCurrencyUsd,
  mdiHelpCircleOutline
} from '@mdi/js'

import DashboardDatatable from './DashboardDatatable.vue'

export default {
  components: {
    DashboardDatatable
  },
  setup() {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%'
    }

    const totalSales = {
      statTitle: 'Refunds',
      icon: mdiCurrencyUsd,
      color: 'secondary',
      subtitle: 'Past Month',
      statistics: '$78',
      change: '-15%'
    }

    // vertical card options
    const newProject = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%'
    }

    const salesQueries = {
      statTitle: 'Sales Quries',
      icon: mdiHelpCircleOutline,
      color: 'warning',
      subtitle: 'Last week',
      statistics: '15',
      change: '-18%'
    }

    return {
      totalProfit,
      totalSales,
      newProject,
      salesQueries
    }
  }
}
</script>
