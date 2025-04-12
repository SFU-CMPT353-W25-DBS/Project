<template>
  <VisualsVisualizationIFrame
  style="position: absolute; width: 100dvw; min-height: 100dvh; left: 0; top: 0"
  v-if="matchedVisualization"
  v-bind="matchedVisualization"
  fullscreen
  />
</template>

<script setup lang="ts">
import visualizations from "~/assets/visualizations";

const route = useRoute();

const matchedVisualization = computed(() => {
  const slug = route.params.slug as string[];
  const fileNameNoExt = slug[0];
  return visualizations.find(v => v.fileNameNoExt === fileNameNoExt);
});

definePageMeta({
  validate({ params }) {
    const slug = params.slug as unknown;

    if (Array.isArray(slug)) {
      if (slug.length === 1 && typeof slug[0] === "string") {
        return (
          visualizations.find(v => v.fileNameNoExt === slug[0]) !== undefined
        );
      }
    }

    return false;
  },
});
</script>
