<template>
  <div class="WhatsNew">
    <div class="WhatsNew-heading">
      <h3 class="WhatsNew-title">
        <v-icon size="24" class="WhatsNew-title-icon">
          mdi-information
        </v-icon>
        {{ $t('最新のお知らせ') }}
      </h3>
    </div>
    <news-list-item :items="newsItems" />
  </div>
</template>

<script lang="ts">
import NewsListItem from '@/components/NewsListItem.vue'

export default {
  components: {
    NewsListItem
  },
  data() {
    return {
      newsItems: {}
    }
  },
  created() {
    this.setDataUsingAPI()
  },
  methods: {
    async setDataUsingAPI() {
      await this.$axios.get(process.env.newsUrl).then(response => {
        const json = response.data
        this.newsItems = json.newsItems
      })
    }
  }
}
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;

  .WhatsNew-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .WhatsNew-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }
  }
}
</style>
