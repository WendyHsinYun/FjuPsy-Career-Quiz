<template lang="pug">
QuizLayout
  template(v-slot:images)
    NuxtImg.backgroundImg(
      :src="'quiz2_background'"
      format="webp"
      alt="quiz2"
      preload
      placeholder)

  template(v-slot:description)
    span.descriptionText 你來到了一座古老的神廟，傳說中有一個隱藏的寶藏。

  template(v-slot:options)
    QuizButton(@click='optionA' :backgroundColor='"#c7ae68"')
      span 進入神廟，解開謎題，尋找寶藏，但也可能面臨危險

    QuizButton(@click='optionB' :backgroundColor='"#c7ae68"')
      span 回頭，離開這神秘的地方，保持安全。

</template>

<script setup>
const dataStore = useDataStore();

const optionA = () => {
  dataStore.quizAnswer.B = 'A'
  navigateTo('/Quiz/Three')
}

const optionB = () => {
  dataStore.quizAnswer.B = 'B'
  navigateTo('/Quiz/Three')
}
</script>

<style lang="sass" scoped>
.backgroundImg
  position: absolute
  width: 120%
  transform: translateY(-30%)
  z-index: -1

.descriptionText
  font-size: 28px
  animation: fadeIn 1s ease-out forwards

@media (max-width: 960px)
  .backgroundImg
    height: 150vh
  
  .descriptionText
    font-size: 20px
</style>
