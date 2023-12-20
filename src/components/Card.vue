<template>
    <div class="container options-container mt-5 d-flex flex-row justify-content-evenly">
        <div class="card" v-for="quiz in quizzes" :key="quiz.id" style="width: 18rem;">
            <img :src="quiz.img" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">{{ quiz.name }}</h5>
            <p class="card-text"> {{ quiz.questions.length }} Questions</p>
            <a href="#" class="btn btn-primary">Start</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        quizzes: Object
    }
}
</script>

<style lang="scss" scoped>

</style>
