<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-chart-patients'"
      :chart-data="patientsGraph"
      :date="date"
      :unit="$t('人')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
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
      patientsGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.data
      this.patientsGraph = formatGraph(json.patients_summary.data)
      this.date = json.patients_summary.date
    }
  }
}
</script>
