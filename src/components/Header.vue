<template>
  <div>
    <h1 class="mx-5 my-3">Question {{ questionStatus }}</h1>
    <div class="bar border w-25 mx-5 my-3">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

.bar {
  height: 50px;
  border: 3px solid bisque;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: bisque;
}
</style>
