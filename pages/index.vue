<script lang="ts" setup>
  import type { ParkData } from '~/models/park';

  const { data } = await useFetch<Array<ParkData>>('/api/parks', { key: 'parks' })
  const parkStore = useParkStore()
  parkStore.setParks(data.value ?? [])

  const user = useSupabaseUser();
</script>
<template>
  <div class="p-[10px]">
    <div class="w-dvw h-4 flex justify-end pr-2">
      <nuxt-link :to="user ? 'account' : 'login'">
        {{ user ? 'Account' : 'Sign In / Sign Up' }}
      </nuxt-link>
    </div>
    <h1 class="text-[64px] font-lato font-bold">List of National Parks</h1>
    <div class="flex flex-col gap-y-[20px]">
      <Park v-for="(park, index) in data" :key="park.id" :park="park" :index="index"/>
    </div>
  </div>
</template>