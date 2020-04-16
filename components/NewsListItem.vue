<template>
  <ul class="WhatsNew-list">
    <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
      <a
        class="WhatsNew-list-item-anchor"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <time class="WhatsNew-list-item-anchor-time px-2" :datetime="item.date">
          {{ item.date }}
        </time>
        <span class="WhatsNew-list-item-anchor-link">
          {{ item.text }}
          <v-icon
            v-if="!isInternalLink(item.url)"
            class="WhatsNew-item-ExternalLinkIcon"
            size="12"
          >
            mdi-open-in-new
          </v-icon>
        </span>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;

  .WhatsNew-list {
    padding-left: 0;
    list-style-type: none;

    &-item {
      &-anchor {
        text-decoration: none;
        margin: 5px;
        font-size: 14px;

        @include lessThan($medium) {
          display: flex;
          flex-wrap: wrap;
        }

        &-time {
          flex: 0 0 90px;

          @include lessThan($medium) {
            flex: 0 0 100%;
          }

          color: $gray-1;
        }

        &-link {
          flex: 0 1 auto;

          @include text-link();

          @include lessThan($medium) {
            padding-left: 8px;
          }
        }

        &-ExternalLinkIcon {
          margin-left: 2px;
          color: $gray-3 !important;
        }
      }
    }
  }
}
</style>
