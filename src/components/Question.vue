<template>
  <div class="card mx-5 w-50">
    <div class="card-body">
      <h5 class="card-title question mx-4">
        {{ question.text }}
      </h5>
    </div>
    <div class="options-container w-50">
      <div
        v-for="option in question.options"
        :key="option.id"
        class="option card-subtitle mx-5"
        @click="emitSelectedOption(option.isCorrect)"
      >
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);

const { question } = defineProps(["question"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: lightblue;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
  height: 50px;
}
</style>
