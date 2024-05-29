<template>
  <div class="flex flex-col gap-y-[10px] font-lato">
    <a v-if="park.url" :href="park.url">
      <h2 class="text-[20px] font-normal">{{ park.fullName }}</h2>
    </a>
    <h2 v-else class="text-[20px]">{{ park.fullName }}</h2>
    <p class="text-[14px] font-light">{{ park.description }}</p>
    <div class="images-wrapper">
      <NuxtImg v-for="image in park.images" :src="image.url" :alt="image.altText" height="250" width="250" :loading="loading" decoding="async" class="rounded-md mb-[5px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ParkData } from '~/models/park'

const props = defineProps({
  park: {
    type: Object as PropType<ParkData>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const loading = props.index > 1 ? 'lazy' : 'eager'
</script>
<style scoped>
.images-wrapper {
  line-height: 0;
  -webkit-column-count: 5;
  -webkit-column-gap: 5px;
  -moz-column-count: 5;
  -moz-column-gap: 5px;
  column-count: 5;
  column-gap: 5px;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
}
</style>