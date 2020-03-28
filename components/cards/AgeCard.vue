<template>
  <v-col cols="12" md="6" class="DataCard">
    <age-bar-chart
      title="年代別陽性患者数"
      :title-id="'patients-by-age'"
      :chart-id="'time-bar-chart-patients-by-age'"
      :chart-data="ageGraph"
      :date="age.last_update"
      :unit="'人'"
      :url="'https://web.pref.hyogo.lg.jp/kk03/corona_hasseijyokyo.html'"
      :show-button="false"
    />
  </v-col>
</template>
<script lang="ts">
import age from '@/data/age.json'
import AgeBarChart from '@/components/AgeBarChart.vue'
import formatVariableGraph from '@/utils/formatVariableGraph'

export default {
  components: {
    AgeBarChart
  },
  data() {
    const ageGraph = formatVariableGraph(age.data)
    const data = {
      ageGraph,
      age
    }
    return data
  }
}
</script>
