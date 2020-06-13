<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested-cases'"
      :chart-id="'time-chart-tested'"
      :chart-data="inspectionsGraph"
      :date="date"
      :unit="$t('件.tested')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import TimeChart from '@/components/charts/TimeChart.vue'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeChart
  },
  data() {
    return {
      date: String,
      inspectionsGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.data
      this.inspectionsGraph = formatGraph(json.inspections_summary.data)
      this.date = json.inspections_summary.date
    }
  }
}
</script>
