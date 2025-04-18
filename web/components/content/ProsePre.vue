<template>
  <div
    v-if="showHeader"
    style="
      padding: 10px;
      background-color: #f8fafc;
      border-radius: 16px 16px 0px 0px;
      border: 1px solid #e4e4e7;
      border-bottom: none;
      display: flex;
      flex-direction: row;
      align-items: center;
    "
  >
    <Icon
      v-if="languageToIcon[language]"
      :name="`vscode-icons:file-type-${languageToIcon[language]}`"
      size="24"
      style="margin-right: 5px;"
    />
    {{ props.filename || props.language }}
  </div>
  <div
    style="
      background-color: #f8fafc;
      padding: 10px;
      padding-top: 0px;
      padding-bottom: 0px;
      border-radius: 16px;
      border: 1px solid #e4e4e7;
    "
    :class="{
      codeWithTitle: showHeader,
    }"
  >
    <pre :class="$props.class"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
  showHeader: {
    type: Boolean,
    default: true
  }
});

const showHeader = computed(() => {
  return props.showHeader && props.language && props.language !== "text";
});

const languageToIcon: Record<string, string> = {
  js: "js",
  ts: "typescript",
  html: "html",
  css: "css",
  vue: "vue",
  json: "json",
  csv: "text",
  shell: "shell",
  md: "markdown",
  yaml: "yaml",
  mdc: "markdown",
  python: "python",
  py: "python",
  sh: "shell",
  bash: "shell",
};
</script>

<style scoped>
pre code .line {
  display: block;
}

.codeWithTitle {
  border-radius: 0px 0px 16px 16px !important;
}
</style>
