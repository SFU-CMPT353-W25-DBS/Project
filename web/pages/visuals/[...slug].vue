<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      align-items: center;
      min-height: 100dvh;
      flex-direction: column;
    "
  >
    <VisualsVisualizationIFrame
      v-if="matchedVisualization"
      v-bind="matchedVisualization"
      fullscreen
      style="width: 100%"
      ref="downloadContent"
      :isDownloading="isDownloading"
    />
    <Button
      style="align-self: flex-end; margin-top: 12px"
      rounded
      @click="downloadAsImage"
      :loading="isDownloading"
    >
      Download as Image
    </Button>
  </div>
</template>

<script setup lang="ts">
import { toPng } from "html-to-image";
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

const downloadContent = useTemplateRef("downloadContent");
const isDownloading = ref(false);
function downloadAsImage() {
  isDownloading.value = true;

  nextTick(() => {
    if (!downloadContent.value) return;
    toPng(downloadContent.value.$el, { skipFonts: true })
      .then(dataUrl => {
        console.log(dataUrl);
        window.open(dataUrl, "_blank");
      })
      .finally(() => {
        isDownloading.value = false;
      });
  });
}
</script>
