<template>
  <v-col cols="12" md="6" class="DataCard">
    <horizontal-bar-chart
      :description="'年代が公開されていない患者は含まれていません。'"
      :title="$t('年代別陽性患者数')"
      :title-id="'patients-by-age'"
      :chart-data="ageGraph"
      :date="date"
      :info="info"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart.vue'
import { convertDateToSimpleFormat } from '~/utils/formatDate'

export default {
  components: {
    HorizontalBarChart
  },
  data() {
    return {
      date: String,
      info: {},
      ageGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.data
      this.ageGraph = formatVariableGraph(json.age.data)
      this.date = json.age.date
      this.info = {
        lText: this.ageGraph[
          this.ageGraph.length - 1
        ].cumulative.toLocaleString(),
        sText: this.$t('{date}の累計', {
          date: convertDateToSimpleFormat(this.date)
        }),
        unit: this.$t('人')
      }
    }
  }
}
</script>
