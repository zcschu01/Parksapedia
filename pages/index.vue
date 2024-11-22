<script lang="ts" setup>
  import type { ParkData } from '~/models/park';

  const { data } = await useFetch<Array<ParkData>>('/api/parks', { key: 'parks' })
  const parkStore = useParkStore()
  parkStore.setParks(data.value ?? [])
</script>
<template>
  <div class="p-[10px]">
    <h1 class="text-[64px] font-lato font-bold">List of National Parks</h1>
    <div class="flex flex-col gap-y-[20px]">
      <Park v-for="(park, index) in data" :key="park.id" :park="park" :index="index"/>
    </div>
  </div>
</template>