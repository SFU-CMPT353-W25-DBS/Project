<template>
  <Card style="margin-top: 30px" class="articleWrapper">
    <template #header>
      <div class="articleHeader">
        <h1>{{ doc?.title }}</h1>
        <NuxtLink :to="{ name: 'blog' }">
          <Button class="p-background-fuchsia-900">Go Back</Button>
        </NuxtLink>
      </div>
    </template>
    <template #content>
      <template v-if="doc">
        <ContentRenderer :value="doc" />
        <div style="height: 250px !important" />
      </template>
      <template v-else>
        <div class="flex justify-center items-center h-full">
          <h1>Article not found</h1>
        </div>
      </template>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection("blog")
    .path(`/${route.params!.slug as string}`)
    .first();
});
</script>

<style scoped>
:root {
  background-color: var(--p-zinc-100);
}

.articleHeader {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.articleWrapper:deep(.p-card-content) {
  line-height: 1.25;
}

@media screen and (max-width: 600px) {
  .articleHeader {
    flex-direction: column;
    align-items: flex-start;
  }
  .articleHeader h1 {
    margin-bottom: 10px;
  }
}
</style>
