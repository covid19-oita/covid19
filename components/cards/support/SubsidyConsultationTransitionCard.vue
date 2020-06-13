<template>
  <v-col cols="12" md="6" class="DataCard">
    <multi-bar-chart
      :title="$t('雇用調整助成金の申請に関する相談件数')"
      :title-id="'subsidy-consultation-transition'"
      :chart-id="'subsidy-consultation-transition'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('件.tested')"
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
import { formatSubsidyConsultation } from '../../../utils/jsonToChartData'
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

      this.chartData = formatSubsidyConsultation(json.subsidy.data)
      const val1 = this.sum(this.chartData[0])
      const val2 = this.sum(this.chartData[1])
      const sum = val1 + val2
      const unit = this.$t('件.tested')
      this.info = {
        lText: sum.toLocaleString(),
        mText: this.$t('累計値'),
        sText: `${this.$t('うち')} ①${val1}${unit} ②${val2}${unit}`,
        unit
      }
      this.legends = [
        '① ' + this.$t('労働局 (TEL 097-535-2100) への1週間ごとの相談件数'),
        '② ' + this.$t('大分県 (TEL 0120-575-626) への1週間ごとの相談件数')
      ]
      this.xLabels = json.subsidy.labels
      this.date = json.subsidy.date
    },
    sum(array) {
      return array.reduce((acc, cur) => {
        return acc + cur
      })
    }
  }
}
</script>
