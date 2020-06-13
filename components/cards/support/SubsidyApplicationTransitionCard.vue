<template>
  <v-col cols="12" md="6" class="DataCard">
    <multi-bar-chart
      :title="$t('雇用調整助成金の支給決定件数')"
      :title-id="'subsidy-application-transition'"
      :chart-id="'subsidy-application-transition'"
      :chart-data="chartData"
      :date="date"
      :items="legends"
      :labels="xLabels"
      :info="info"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/226c523f-178d-4180-8a1c-16e492757378'
      "
    />
  </v-col>
</template>

<script>
// import formatGraph from '@/utils/formatGraph'
import {
  formatSubsidyApplication,
  labelSubsidyApplication
} from '../../../utils/jsonToChartData'
import MultiBarChart from '@/components/charts/MultiBarChart.vue'

export default {
  components: {
    MultiBarChart
  },
  data() {
    return {
      date: String,
      info: Object,
      chartData: [],
      legends: [],
      xLabels: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.support

      this.chartData = formatSubsidyApplication(json.subsidy_summary.data)
      this.info = {
        lText: this.chartData[1][this.chartData[1].length - 1].toLocaleString(),
        mText: this.$t('累計値'),
        sText: this.$t('支給決定件数'),
        unit: this.$t('件.tested')
      }
      this.legends = [
        '① ' + this.$t('申請書受付件数 (累計値)'),
        '② ' + this.$t('支給決定件数 (累計値)')
      ]
      this.xLabels = labelSubsidyApplication(json.subsidy_summary.data)
      this.date = json.subsidy_summary.date
    }
  }
}
</script>
