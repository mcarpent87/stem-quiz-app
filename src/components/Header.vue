<template>
  <div>
    <h1>Question {{ questionStatus }}</h1>
    <div class="bar">
      <div class="completion"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { questionStatus } = defineProps(["questionStatus"]);
</script>

<style lang="scss" scoped></style>
