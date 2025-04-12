<script setup lang="ts">
import visualizations from '~/assets/visualizations';
</script>

<template>
  <Teleport to="#header">
    <Header/>
  </Teleport>

  <div
    v-for="visualization in visualizations"
    :key="visualization.fileNameNoExt"
    class="visualization"
  >
    <LazyVisualsVisualizationIFrame
      v-bind="visualization"
      hydrateOnVisible
    />
  </div>
</template>

<style scoped>
.visualization {
  margin: 20px;
  border-radius: 18px;
}
</style>
