<script setup lang="ts">
import {reactive, ref} from "vue";
import { quiz } from "../assets/quiz.ts";
import QuestionCard from "./questionCard.vue";
import type {Question} from "../types/question.ts"
import Result from "./result.vue";

const currentQuestionIndex = ref(0);
const currentQuestion = reactive<Question>(quiz[currentQuestionIndex.value]);
const showCongratulations = ref(false);

function handleAnswer() {
  if (currentQuestionIndex.value < quiz.length - 1) {
    currentQuestionIndex.value++;
    currentQuestion.content = quiz[currentQuestionIndex.value].content
    currentQuestion.firstAnswer = quiz[currentQuestionIndex.value].firstAnswer
    currentQuestion.secondAnswer = quiz[currentQuestionIndex.value].secondAnswer
    currentQuestion.imagePath = quiz[currentQuestionIndex.value].imagePath
  } else {
    showCongratulations.value = true;
  }
}
</script>

<template>
  <div>
    <QuestionCard
        v-if="!showCongratulations"
        :question="currentQuestion"
        @submitAnswer="handleAnswer"
    />
    <div v-else>
      <Result />
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
