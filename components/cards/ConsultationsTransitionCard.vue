<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart
      :title="$t('相談窓口相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-chart-querents'"
      :chart-data="querentsGraph"
      :date="date"
      :unit="$t('件.reports')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import formatGraph from '@/utils/formatGraph'
import TimeChart from '@/components/charts/TimeChart.vue'

export default {
  components: {
    TimeChart
  },
  data() {
    return {
      date: String,
      querentsGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.data
      this.querentsGraph = formatGraph(json.querents.data)
      this.date = json.querents.date
    }
  }
}
</script>
