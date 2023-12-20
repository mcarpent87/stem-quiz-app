<template>
  <div>
    <div class="container">
      <div class="header my-3 d-flex">
        <h1 class="fw-bold me-5">Quizzes</h1>
        <input
          type="text"
          class="form-control w-25"
          placeholder="Search..."
          aria-label="search"
          v-model.trim="search"
        />
      </div>
        <Card :quizzes="quizzes" />
    </div>
  </div>
</template>

<script>
import q from './data/data.json';
import Card from './components/Card.vue'

export default {
  name: 'stem-quizzes',
  data() {
    return {
      quizzes: [], // Initialize as an empty array
      originalQuizzes: [], // Store the original data separately
      search: ''
    };
  },
  components: {
    Card
  },
  mounted() {
    // Copy the quiz data from the imported JSON file to quizzes and originalQuizzes
    this.quizzes = [...q];
    this.originalQuizzes = [...q];
  },
  watch: {
    search(newSearchTerm) {
      // Filter from the original data stored in originalQuizzes
      this.quizzes = this.originalQuizzes.filter((quiz) => {
        return quiz.name.toLowerCase().includes(newSearchTerm.toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
