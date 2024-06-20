<script setup lang="ts">
import {useScore} from "../composables/scores.ts";
console.log(useScore().score.value)
</script>

<template>
  <div v-if="useScore().score.value < 0" class="result">
    <h2>Côté obscure</h2>
    <img src="../assets/dark_side_image.jpg" alt="Côté Obscur" class="side-image" />
<!--    check ortho preparte-toi-->
    <p>Tu es plutot granité rouge ! Prépare-toi à régner sur le monde des desserts avec ce goût puissant et décadent. Et souviens-toi, la Force est délicieuse avec toi !</p>
  </div>
  <div v-else class="result">
    <h2>Côté lumineux</h2>
    <img src="../assets/light_side_image.jpg" alt="Côté Lumineux" class="side-image" />
    <p>Tu es plutot granité bleu ! Goût doux et apaisant, apportant équilibre et harmonie à tous ceux qui le dégustent. Que la crème soit avec toi !</p>
  </div>

</template>

<style scoped>
.result {
  text-align: center;
  margin: 20px;
}

.side-image {
  width: 200px;
  height: auto;
  margin: 10px 0;
}
</style>