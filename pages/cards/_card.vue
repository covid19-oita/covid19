<template>
  <div>
    <patients-breakdown-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <patients-transition-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <patients-detail-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
    />
    <patients-by-residence
      v-else-if="this.$route.params.card == 'patients-by-residence'"
    />
    <inspections-transition-card
      v-else-if="this.$route.params.card == 'number-of-tested-cases'"
    />
    <patients-by-age-card
      v-else-if="this.$route.params.card == 'patients-by-age'"
    />
    <sickbeds-used-rate-card
      v-else-if="this.$route.params.card == 'patietns-and-sickedbeds'"
    />
    <consultations-transition-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-consultation-desk'
      "
    />
    <usage-stats-by-industry-card
      v-else-if="this.$route.params.card == 'usage-stats-by-industry'"
    />
    <usage-stats-transition-card
      v-else-if="this.$route.params.card == 'usage-stats-transition'"
    />
    <subsidy-consultation-transition-card
      v-else-if="this.$route.params.card == 'subsidy-consultation-transition'"
    />
    <subsidy-application-transition-card
      v-else-if="this.$route.params.card == 'subsidy-application-transition'"
    />
  </div>
</template>

<script>
import PatientsBreakdownCard from '@/components/cards/PatientsBreakdownCard.vue'
import PatientsTransitionCard from '@/components/cards/PatientsTransitionCard.vue'
import PatientsDetailCard from '@/components/cards/PatientsDetailCard.vue'
import PatientsByResidence from '@/components/cards/PatientsByResidence.vue'
import InspectionsTransitionCard from '@/components/cards/InspectionsTransitionCard.vue'
import PatientsByAgeCard from '@/components/cards/PatientsByAgeCard.vue'
import SickbedsUsedRateCard from '@/components/cards/SickbedsUsedRateCard.vue'
import ConsultationsTransitionCard from '@/components/cards/ConsultationsTransitionCard.vue'
import UsageStatsByIndustryCard from '@/components/cards/support/UsageStatsByIndustryCard.vue'
import UsageStatsTransitionCard from '@/components/cards/support/UsageStatsTransitionCard.vue'
import SubsidyConsultationTransitionCard from '@/components/cards/support/SubsidyConsultationTransitionCard.vue'
import SubsidyApplicationTransitionCard from '@/components/cards/support/SubsidyApplicationTransitionCard.vue'

export default {
  components: {
    PatientsBreakdownCard,
    PatientsTransitionCard,
    PatientsDetailCard,
    PatientsByResidence,
    InspectionsTransitionCard,
    PatientsByAgeCard,
    SickbedsUsedRateCard,
    ConsultationsTransitionCard,
    UsageStatsByIndustryCard,
    UsageStatsTransitionCard,
    SubsidyConsultationTransitionCard,
    SubsidyApplicationTransitionCard
  },
  async fetch({ store, app }) {
    await app.$axios.get(app.$env.apiUrl).then(response => {
      store.commit('setData', response.data)
    })
    await app.$axios.get(app.$env.supportUrl).then(response => {
      store.commit('setSupport', response.data)
    })
  },
  data() {
    let title
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        break
      case 'patients-by-residence':
        title = this.$t('居住地別陽性患者数')
        break
      case 'patients-by-age':
        title = this.$t('年代別陽性患者数')
        break
      case 'patietns-and-sickedbeds':
        title = this.$t('入院患者数と病床数')
        break
      case 'number-of-tested-cases':
        title = this.$t('検査実施数')
        break
      case 'number-of-reports-to-covid19-consultation-desk':
        title = this.$t('相談窓口相談件数')
        break
      case 'usage-stats-transition':
        title = this.$t(
          '新型コロナウイルス関連の大分県における融資の利用状況 (融資実績)'
        )
        break
      case 'usage-stats-by-industry':
        title = this.$t(
          '新型コロナウイルス関連の大分県における融資の利用状況 (業種別件数)'
        )
        break
      case 'subsidy-consultation-transition':
        title = this.$t('雇用調整助成金の申請に関する相談件数')
        break
      case 'subsidy-application-transition':
        title = this.$t('雇用調整助成金の支給決定件数')
        break
    }

    const data = {
      title
    }
    return data
  },
  head() {
    const url = 'https://stopcovid19.metro.tokyo.lg.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。'
    )}`

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('大分県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            this.$t('対策サイト')
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
