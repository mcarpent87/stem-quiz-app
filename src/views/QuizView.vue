<template>
  <div>
    <h3>{{ quiz.name }}</h3>
    {{ quiz }}
    <RouterView />
  </div>
</template>

<script setup>
import { useRoute, RouterView } from "vue-router";
import quizzes from "../data/data.json";

const route = useRoute();

const quiz = quizzes.find((q) => q.id === parseInt(route.params.id));
</script>

<style lang="scss" scoped></style>
