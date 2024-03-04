<template lang="pug">
QuizLayout
  template(v-slot:images)
    NuxtImg.backgroundImg(
      :src="'quiz4_background'"
      format="webp"
      alt="quiz2"
      preload
      placeholder)

  template(v-slot:description)
    span.descriptionText 你來到了一家神秘的茶館，老闆是一位智者。他說，這裡的茶不僅可以滿足你的口腹之欲，還能洗滌你的靈魂。

  template(v-slot:options)
    QuizButton(@click='optionA' :backgroundColor='"#ee8700"')
      span 品嚐這杯茶

    QuizButton(@click='optionB' :backgroundColor='"#ee8700"')
      span 只關心它的味道

</template>

<script setup>
const dataStore = useDataStore();

const optionA = () => {
  dataStore.quizAnswer.D = 'A'
  navigateTo('/Result')
}

const optionB = () => {
  dataStore.quizAnswer.D = 'B'
  navigateTo('/Result')
}

</script>


<style lang="sass" scoped>
.backgroundImg
  position: absolute
  width: 120%
  transform: translateY(-30%)
  z-index: -1

.descriptionText
  font-size: 32px
  animation: fadeIn 1s ease-out forwards

@media (max-width: 960px)
  .backgroundImg
    width: 140%
    height: 150%

  .descriptionText
    font-size: 22px
</style>
