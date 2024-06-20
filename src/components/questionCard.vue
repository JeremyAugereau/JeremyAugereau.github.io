<script setup lang="ts">
import { reactive } from "vue";
import { useScore } from "../composables/scores.ts";
import type { Question } from "../types/question.ts";

const props = defineProps<{ question: Question }>();
const question = reactive<Question>(props.question);
const score = useScore();
const emits = defineEmits(["submitAnswer"]);

function selectAnswer(point: number) {
  score.add(point);
  emits("submitAnswer");
}
</script>

<template>
  <div>
    <p class="question">{{ question.content }}</p>
    <div v-if="question.imagePath">
      <img :src="question.imagePath" alt="quiz_image" />
    </div>
    <div class="answers">
      <button @click="selectAnswer(question.firstAnswer.score)" :style="{ background: question.firstAnswer.color }">
        {{ question.firstAnswer.content }}
      </button>
      <button @click="selectAnswer(question.secondAnswer.score)" :style="{ background: question.secondAnswer.color }">
        {{ question.secondAnswer.content }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.question {
  margin-bottom: 1rem;
}

.answers {
  display: flex;
  justify-content: space-between;
}

button {
  flex: 1;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  text-align: center;
}

button:hover {
  background-color: #0056b3;
}
</style>
