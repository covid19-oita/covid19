<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" />
    <share-buttons />
    <whats-new :items="newsItems" />
    <card-row class="DataBlock">
      <patients-breakdown-card />
      <patients-transition-card />
      <patients-detail-card />
      <patients-by-residence />
      <inspections-transition-card />
      <patients-by-age-card />
      <!-- <sickbeds-used-rate-card /> -->
      <consultations-transition-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import ShareButtons from '@/components/ShareButtons.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import CardRow from '@/components/cards/CardRow.vue'
import PatientsBreakdownCard from '@/components/cards/PatientsBreakdownCard.vue'
import PatientsTransitionCard from '@/components/cards/PatientsTransitionCard.vue'
import PatientsDetailCard from '@/components/cards/PatientsDetailCard.vue'
import PatientsByResidence from '@/components/cards/PatientsByResidence.vue'
import InspectionsTransitionCard from '@/components/cards/InspectionsTransitionCard.vue'
import PatientsByAgeCard from '@/components/cards/PatientsByAgeCard.vue'
// import SickbedsUsedRateCard from '@/components/cards/SickbedsUsedRateCard.vue'
import ConsultationsTransitionCard from '@/components/cards/ConsultationsTransitionCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    ShareButtons,
    WhatsNew,
    CardRow,
    PatientsBreakdownCard,
    PatientsTransitionCard,
    PatientsDetailCard,
    PatientsByResidence,
    InspectionsTransitionCard,
    PatientsByAgeCard,
    // SickbedsUsedRateCard,
    ConsultationsTransitionCard
  },
  async fetch({ store, app }) {
    await app.$axios.get(app.$env.apiUrl).then((response: any) => {
      store.commit('setData', response.data)
    })
    await app.$axios.get(app.$env.newsUrl).then((response: any) => {
      store.commit('setNews', response.data)
    })
  },
  data() {
    const data = {
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新感染動向')
      },
      newsItems: [...this.$store.state.news.newsItems].sort(function(
        a: any,
        b: any
      ) {
        if (a.date > b.date) return -1
        if (a.date < b.date) return 1
        return 0
      })
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
