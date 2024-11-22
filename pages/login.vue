<script lang="ts" setup>
import Auth from '~/components/auth/auth.vue';

const user = useSupabaseUser();
if (user) {
  await navigateTo('/account');
}
const supabase = useSupabaseClient();
supabase.auth.onAuthStateChange(async (event, _session) => {
  if (event === 'SIGNED_IN') {
    await navigateTo('/account');
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center w-dvw h-dvh font-lato">
    <Auth v-if="!user" />
  </div>
</template>