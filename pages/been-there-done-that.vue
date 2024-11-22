<script setup lang="ts">
const parkStore = useParkStore()
const parks = parkStore.getParks
</script>
<template>
  <div class="flex flex-col self-center text-black">
    <div v-for="park in parks" :key="park">
      {{ park }}
    </div>
  </div>
</template>