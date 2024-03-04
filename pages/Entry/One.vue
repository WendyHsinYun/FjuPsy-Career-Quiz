<template lang="pug">
v-row(no-gutters)
  v-col.container(cols='12')
    NuxtImg.backgroundImg(
      :src="'entry1_background'"
      format="webp"
      alt="entry page1"
      preload
      placeholder)

    NuxtImg.adventurerImg(
      :src="'entry1_adventurer'"
      format="webp"
      alt="entry page1"
      preload
      placeholder)

    div.signContainer
      div.signText
        span 輔大心理系邀請你一起做職涯探索

    div.remindContainer
      span.remindText 這只是個趣味測驗，目的在讓大家認識不同心理學的職涯發展，請輕鬆面對
      br
      br
      span.remarkText 感謝微軟Bing技術支援

    button(@click='nextPage') 
      NuxtImg.buttonImg(
        :src="'entry1_button'"
        format="webp"
        alt="entry button"
        width="200"
        preload
        placeholder)
</template>

<script setup>
const nextPage = () => {
  navigateTo('/Entry/Two')
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

  .adventurerImg
    position: absolute
    width: 20vw
    left: 10%
    bottom: -10%

  .signContainer
    position: absolute
    width: 350px
    height: 450px
    top: -10%
    left: 35%
    background-image: url('https://res.cloudinary.com/dyqzurvuj/image/upload/f_auto,q_auto/v1/FJUPSY/entry1_sign')
    background-size: contain
    .signText
      position: absolute
      bottom: 75px
      font-size: 30px
      padding: 25px
      margin: 0px 20px
      box-sizing: border-box
      border-radius: 10px
      background-color: rgba(255, 255, 255, 0.7)

  .remindContainer
    position: absolute
    width: 350px
    bottom: 30%
    left: 65%
    padding: 25px
    margin: 0px 20px
    box-sizing: border-box
    border-radius: 10px
    background-color: rgba(255, 255, 255, 0.9)
    .remindText
      font-size: 26px
    .remarkText
      margin-top: 10px
      font-size: 20px

  button
    position: absolute
    width: 100px
    bottom: 15%
    left: 70%
    animation: bounce 1s infinite
      

</style>