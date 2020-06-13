<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:description>
      <ul :class="$style.notes">
        <li>{{ $t(description) }}</li>
      </ul>
    </template>
    <horizontal-bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="320"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :m-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script>
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default {
  components: { DataView, DataViewBasicInfoPanel, OpenDataLink },
  props: {
    description: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'pie-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    info: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    displayInfo() {
      if (this.isNotLoaded()) {
        return {
          lText: '',
          sText: '',
          unit: ''
        }
      }

      // TODO: Display total patients.
      const chartData = this.chartData[this.chartData.length - 1]
      const total = chartData.cumulative.toLocaleString()
      return {
        lText: total,
        sText: this.info,
        unit: this.unit
      }
    },
    displayData() {
      if (this.isNotLoaded()) {
        return {
          lText: '',
          sText: '',
          unit: ''
        }
      }

      return {
        labels: this.chartData.map(d => {
          return this.$t(d.label)
        }),
        datasets: [
          {
            data: this.chartData.map(d => {
              return d.transition
            }),
            backgroundColor: '#1d8d1d',
            borderWidth: 0,
            datalabels: {
              color: 'white',
              font: {
                size: '14',
                weight: 'bold'
              }
            }
          }
        ]
      }
    },
    displayOption() {
      if (this.isNotLoaded()) {
        return {}
      }

      return {
        tooltips: {
          enabled: false
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    /**
     * APIでデータを取得する前ならtrue
     */
    isNotLoaded() {
      return this.chartData.length === 0
    }
  }
}
</script>

<style lang="scss" module>
.Graph-Desc {
  margin: 10px 0;
  font-size: 12px;
  //  color: $gray-3;
  color: red;
}
.link {
  text-decoration: none;
}

ul.notes {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0 !important;
  font-size: 12px;
  color: $gray-3;

  > li {
    list-style-type: none;
  }
}
</style>
