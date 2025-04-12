<template>
  <Card class="visCard" :id="sectionId">
    <template #header v-if="showTitle">
      <h2 class="visTitle">
        <Button
          @click="copySectionLink"
          v-tooltip.bottom="{
            value: 'Copy section link',
            showDelay: 500,
          }"
          text
          size="large"
          rounded
        >
          <template #icon>
            <Icon name="mdi:link-variant" />
          </template>
        </Button>
        {{ showTitle }}
      </h2>
      <p class="visDescription">
        <i>
          {{ showDescription }}
        </i>
      </p>
    </template>
    <template #content>
      <iframe
        :src="`/Project/visuals/${fileName}`"
        width="100%"
        height="600px"
        frameborder="0"
        style="border-radius: 18px"
      ></iframe>
    </template>

    <template #footer v-if="sources">
      <Panel
        :header="`Source${sources.length === 1 ? '' : 's'}`"
        style="border-radius: 16px"
        col
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
  fileName: string;
  showTitle?: string;
  showDescription?: string;
  sources?: {
    author: string;
    name: string;
    url?: string;
  }[];
}

const props = defineProps<IVisualizationData>();

const sectionId = computed(
  () => `visualization-${props.fileName.replaceAll(".", "")}`
);

function copySectionLink() {
  const section = document.getElementById(sectionId.value);
  if (section) {
    const sectionLink = `${window.location.origin}${window.location.pathname}#${sectionId.value}`;
    navigator.clipboard.writeText(sectionLink);
  } else {
    console.error("Section not found:", sectionId.value);
  }
}
</script>

<style scoped>
.visCard {
  background-color: var(--p-stone-50);
  border-radius: 32px;
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
