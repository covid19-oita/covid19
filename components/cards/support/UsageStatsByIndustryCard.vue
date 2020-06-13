<template>
  <v-col cols="12" md="6" class="DataCard">
    <horizontal-bar-chart
      :title="
        $t('新型コロナウイルス関連の大分県における融資の利用状況 (業種別件数)')
      "
      :title-id="'usage-stats-by-industry'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('件.tested')"
      :info="$t('累計値')"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/a56764ef-baba-4972-8877-e773c24d27ca'
      "
    />
  </v-col>
</template>

<script>
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart.vue'

export default {
  components: {
    HorizontalBarChart
  },
  data() {
    return {
      date: String,
      chartData: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.support

      this.chartData = formatVariableGraph(
        json.loan_achivements_by_industry.data
      )
      this.date = json.loan_achivements_by_industry.date
    }
  }
}
</script>
