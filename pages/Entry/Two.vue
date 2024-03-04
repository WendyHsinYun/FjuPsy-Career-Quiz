<template lang="pug">
v-row(no-gutters)
  v-col.container(cols='12')
    NuxtImg.backgroundImg(
      :src="'entry2_background'"
      format="webp"
      alt="entry page2"
      preload
      placeholder)

    div.descriptionContainer
      span.descriptionText 當我們踏上故事的旅程，我們發現自己置身於一個神秘的城市，這裡的每個角落都充滿了獨特的魔力。我們的目的是探索這城市，並了解居民的心靈世界。

    button(@click='nextPage') 
      NuxtImg.buttonImg(
        :src="'entry2_button'"
        format="webp"
        alt="entry2 button"
        width="120"
        preload
        placeholder)
</template>

<script setup>

const nextPage = () => {
  navigateTo('/Quiz/One')
}
</script>

<style lang="sass" scoped>
.container
  overflow: hidden
  position: absolute
  height: 100vh
  z-index: -1
  .backgroundImg
    position: absolute
    width: 100%
    top: -10%

  .descriptionContainer
    position: absolute
    width: 50%
    top: 10%
    left: 5%
    padding: 30px
    box-sizing: border-box
    border-radius: 15px
    background-color: rgba(255, 255, 255, 0.9)
    .descriptionText
      font-size: 32px

  button
    position: absolute
    bottom: 15%
    left: 75%
    animation: bounce 1s infinite
      
@keyframes bounce
  0%, 100%
    transform: translateY(0)
  50%
    transform: translateY(-10px)
</style>