<template lang="pug">
QuizLayout
  template(v-slot:images)
    NuxtImg.backgroundImg(
      :src="'v1/FJUPSY/quiz3_background'"
      format="webp"
      alt="quiz2"
      preload
      placeholder)

  template(v-slot:description)
    span.descriptionText 你在城市的中心廣場上遇到了一位藝術家，他正在創作一幅畫。他問你，你覺得這幅畫是：

  template(v-slot:options)
    QuizButton(@click='optionA' :backgroundColor='"#ee8700"')
      span 關於街景

    QuizButton(@click='optionB'  :backgroundColor='"#ee8700"')
      span 關於孤獨

</template>

<script setup>
const dataStore = useDataStore();

const optionA = () => {
  dataStore.quizAnswer.C = 'A'
  navigateTo('/Quiz/Four')
}

const optionB = () => {
  dataStore.quizAnswer.C = 'B'
  navigateTo('/Quiz/Four')
}
</script>

<style lang="sass" scoped>
.backgroundImg
  position: absolute
  width: 120vw
  transform: translateY(-30%)
  z-index: -1

.descriptionText
  font-size: 32px
  animation: fadeIn 1s ease-out forwards

@media (max-width: 960px)
  .backgroundImg
    width: 180%
    height: 150%

  .descriptionText
    font-size: 20px
</style>
