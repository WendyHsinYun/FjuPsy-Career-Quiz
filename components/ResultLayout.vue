<template lang="pug">
v-row(no-gutters)
  v-col(cols='12').container
    NuxtImg.backgroundImg(
      :src="backgroundImg"
      format="webp"
      alt="background"
      preload
      placeholder)

    button(@click='restart')
      NuxtImg.buttonImg(
        :src="'v1/FJUPSY/restart'"
        format="webp"
        alt="restart"
        preload
        placeholder)

    div.descriptionContainer
      span.title 適合你的職業是 {{ title }}

      span.subTitle 根據測驗結果，你具備以下的特質

      ul
        li.trait(v-for='trait in traits') {{ trait }}

      span.summary {{ summary }}

      div.podcastContainer
        a(:href="podcastUrl" target="_blank")
          NuxtImg.podcastImg(
            :src="podcastImg"
            format="webp"
            alt="podcast"
            preload
            placeholder)
        div.clickMe
</template>


<script setup>
const dataStore = useDataStore();

const props = defineProps({
  result: {
    type: Object,
    default: () => {},
  },
})

const restart = () => {
  dataStore.clearAnswers()
  navigateTo('/Entry/Two')
}

const backgroundImg = ref('')
const title = ref('')
const traits = ref([])
const summary = ref('')
const podcastUrl = ref('')
const podcastImg = ref('')

watch(()=> props.result, (newValue)=>{
  backgroundImg.value = newValue.backgroundImg
  title.value = newValue.title
  traits.value = newValue.traits
  summary.value = newValue.summary
  podcastUrl.value = newValue.podcastUrl
  podcastImg.value = newValue.podcastImg
}, { immediate: true })

</script>

<style lang="sass" scoped>
.container
  position: absolute
  overflow: hidden
  height: 100vh
  .backgroundImg
    position: absolute
    width: 100%
    z-index: -1
    transform: translateY(-10%)

  .buttonImg
    width: 200px
    position: absolute
    left: 10%
    bottom: 10%
    border-radius: 20px
    padding: 0px
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3)
    box-sizing: border-box
    transition: all .5s ease
    
  .buttonImg:hover
    transform: translate(1px, -1px)
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.4)

  .descriptionContainer
    position: absolute
    width: 35%
    top: 10%
    left: 50%
    padding: 24px
    box-sizing: border-box
    border-radius: 15px
    background-color: rgba(255, 255, 255, 0.9)
    padding: 20px 35px
    display: flex
    flex-direction: column
    gap: 15px

    .title
      font-size: 28px
      font-weight: bold

    .subTitle
      font-size: 22px

    li 
      margin-left: 20px
      font-size: 18px

    .summary
      font-size: 20px

    .podcastContainer
      display: flex
      justify-content: center

    .podcastContainer::after 
      content: "☚ Click"
      font-size: 22px
      font-weight: bold
      color: #ee8700
      margin-top: 10%
      animation: clickBounce 1s infinite

    .podcastContainer
      .podcastImg
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2)
        transition: all .5s ease
        width: 220px
      .podcastImg:hover
        transform: translate(1px, -1px)
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.4)

@media (max-width: 960px)
  .container
    .backgroundImg
      position: absolute
      width: 250%
      transform: translateY(0%)
    .buttonImg
      width: 130px
      bottom: 5%
      left: 15%
    .descriptionContainer
      width: 75%
      top: 5%
      left: 15%
      box-sizing: border-box
      border-radius: 15px
      background-color: rgba(255, 255, 255, 0.9)
      padding: 20px 25px
      gap: 12px

      .title
        font-size: 18px
        font-weight: bold
      .subTitle
        font-size: 16px
      li 
        font-size: 16px
      .summary
        font-size: 14px
      .podcastContainer
        .podcastImg
          width: 90%
          transform: translateX(5%)
</style>
