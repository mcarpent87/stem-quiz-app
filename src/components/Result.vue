<template>
  <div class="results">
    <p class="fw-bold">Your Score:</p>
    <h1>
      {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }} = {{ quizPercent }}%
    </h1>
    <RouterLink to="/" class="btn btn-primary mt-4">Home</RouterLink>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);

const quizPercent = (
  (numberOfCorrectAnswers / quizQuestionLength) *
  100
).toFixed(1);
</script>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}
</style>
