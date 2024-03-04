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
        :src="'restart'"
        format="webp"
        alt="restart"
        width="200"
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
            width="220"
            preload
            placeholder)
        CursorIcon.cursorIcon
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
      .podcastImg
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2)
        transition: all .5s ease
      .podcastImg:hover
        transform: translate(1px, -1px)
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.4)
      .cursorIcon
        position: absolute
        right: 100px
        bottom: 100px
        animation: clickBounce 2s infinite
</style>
