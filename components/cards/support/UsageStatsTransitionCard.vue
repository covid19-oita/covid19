<template>
  <v-col cols="12" md="6" class="DataCard">
    <stacked-bar-chart
      :title="
        $t('新型コロナウイルス関連の大分県における融資の利用状況 (融資実績)')
      "
      :title-id="'usage-stats-transition'"
      :chart-id="'usage-stats-transition'"
      :chart-data="chartData"
      :date="date"
      :items="legends"
      :labels="xLabels"
      :info="info"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/9c609301-4800-4f06-a400-62ba5eb489ba'
      "
    />
  </v-col>
</template>

<script>
import { formatUsageStatsTransition } from '../../../utils/jsonToChartData'
import StackedBarChart from '@/components/charts/StackedBarChart.vue'

export default {
  components: {
    StackedBarChart
  },
  data() {
    return {
      date: String,
      chartData: [],
      info: Object,
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

      this.chartData = formatUsageStatsTransition(json.loan_achivements.data)
      const lasts = this.pickLastNumber(this.chartData)
      const unit = this.$t('億円')
      this.info = {
        lText: (lasts[0] + lasts[1]).toString(),
        mText: this.$t('累計値'),
        sText: `${this.$t('うち')} ①${lasts[0]}${unit} ②${lasts[1]}${unit}`,
        unit
      }
      this.legends = [
        '① ' + this.$t('がんばろう！おおいた資金繰り応援資金 (累計値)'),
        '② ' + this.$t('新型コロナウイルス感染症緊急対策特別資金 (累計値)')
      ]
      this.xLabels = json.loan_achivements.labels
      this.date = json.loan_achivements.date
    },
    pickLastNumber(chartDataArray) {
      return chartDataArray.map(array => {
        return array[array.length - 1]
      })
    }
  }
}
</script>
