<template>
  <div>
    <h1>Quiz View</h1>
    {{ quiz }}
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import quizzes from "../data/data.json";

const route = useRoute();

const quiz = quizzes.find((q) => q.id === parseInt(route.params.id));
</script>

<style lang="scss" scoped></style>
