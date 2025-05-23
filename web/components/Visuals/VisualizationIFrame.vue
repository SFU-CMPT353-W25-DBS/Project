<template>
  <Card
    :class="{
      visCard: true,
      fullscreen: fullscreen,
    }"
    :id="sectionId"
  >
    <template #header>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <VisualsVisualizationIFrameHeaderButtons
          :fullscreen="fullscreen"
          :sectionId="sectionId"
          :fileNameNoExt="fileNameNoExt"
          :isDownloading="isDownloading"
        />
      </div>

      <h2 class="visTitle" v-if="showTitle">
        {{ showTitle }}
      </h2>
      <p class="visDescription" v-if="showDescription">
        <i>
          {{ showDescription }}
        </i>
      </p>
    </template>
    <template #content>
      <iframe
        :src="`${$nuxt.$config.app.baseURL}rawVisuals/${fileNameNoExt}.html`"
        width="100%"
        height="600px"
        frameborder="0"
        style="border-radius: 18px"
        :class="{
          isDownloading: isDownloading,
        }"
      ></iframe>
    </template>

    <template #footer v-if="sources && !isDownloading">
      <Panel
        :header="`Source${sources.length === 1 ? '' : 's'}`"
        style="border-radius: 16px"
        collapsed
        toggleable
      >
        <ul style="list-style-type: circle; padding-left: 10px">
          <li
            v-for="source in sources"
            :key="source.name"
            style="padding-top: 5px; padding-bottom: 5px"
          >
            <a :href="source.url" target="_blank" rel="noopener noreferrer">
              {{ source.author }} • {{ source.name }}
            </a>
          </li>
        </ul>
      </Panel>
    </template>
  </Card>
</template>

<script setup lang="ts">
export interface IVisualizationData {
  fileNameNoExt: string;
  showTitle?: string;
  showDescription?: string;
  sources?: {
    author: string;
    name: string;
    url?: string;
  }[];
}

const props = defineProps<
  IVisualizationData & {
    fullscreen?: boolean;
    isDownloading?: boolean;
  }
>();

const sectionId = computed(
  () => `visualization-${props.fileNameNoExt.replaceAll(".", "")}`
);
</script>

<style scoped>
.visCard {
  background-color: var(--p-stone-100);
  border-radius: 32px;
}

.isDownloading {
  border-radius: 0 !important;
}

.visTitle {
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visDescription {
  text-align: center;
  opacity: 0.9;
}
</style>
