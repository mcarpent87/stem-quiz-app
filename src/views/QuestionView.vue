<template>
  <div>
    <h1>Question</h1>
    <p>{{ quiz.questions }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import quizzes from "../data/data.json";

const route = useRoute();
const quiz = quizzes.find((q) => q.id === parseInt(route.params.id));
</script>

<style lang="scss" scoped></style>
