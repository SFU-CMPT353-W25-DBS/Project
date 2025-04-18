<template>
  <Card style="margin-top: 30px">
    <template #header>
      <div style="margin-left: 20px;">
        <h1>{{ doc?.title }}</h1>
      </div>
    </template>
    <template #content>
      <ContentRenderer v-if="doc" :value="doc"/>
      <div style="height: 250px !important;"/>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(`/${route.params!.slug as string}`).first();
});
</script>

<style scoped>
:root {
  background-color: var(--p-zinc-100);
}
</style>