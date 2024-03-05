<template lang="pug">
QuizLayout
  template(v-slot:images)
    NuxtImg.backgroundImg(
      :src="'v1/FJUPSY/quiz1_background'"
      format="webp"
      alt="quiz1"
      preload
      placeholder)

    NuxtImg.roleImg(
      :src="'v1/FJUPSY/quiz1_role'"
      format="webp"
      alt="quiz1"
      preload
      placeholder)

  template(v-slot:description)
    span.descriptionText 你走在狹窄的巷弄中，遇到了一位神秘的老人。他的眼神中透露出無限的智慧，他邀請你坐下來，分享他的故事。你會選擇：

  template(v-slot:options)
    QuizButton(@click='optionA' :backgroundColor='"#395e5d"')
      span 坐下來聆聽他的故事

    QuizButton(@click='optionB'  :backgroundColor='"#395e5d"')
      span 繼續獨自探索
</template>

<script setup>
const dataStore = useDataStore();

const optionA = () => {
  dataStore.quizAnswer.A = 'A'
  navigateTo('/Quiz/Two')
}

const optionB = () => {
  dataStore.quizAnswer.A = 'B'
  navigateTo('/Quiz/Two')
}
</script>

<style lang="sass" scoped>
.backgroundImg
  position: absolute
  width: 150%
  z-index: -1

.roleImg
  position: absolute
  z-index: 0
  width: 25%
  left: 10%
  bottom: 0%

.descriptionText
  font-size: 28px
  animation: fadeIn 1s ease-out forwards

@media (max-width: 960px)
  .backgroundImg
    height: 100%
  .roleImg
    width: 30%
  .descriptionText
    font-size: 20px
</style>
