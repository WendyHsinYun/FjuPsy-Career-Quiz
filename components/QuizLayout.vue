<template lang="pug">
v-row(no-gutters)
  v-col(cols='12').container
    slot(name='images')

    div.descriptionContainer
      slot(name='description')

    div.optionsContainer
      slot(name='options')
</template>

<script setup>
</script>

<style lang="sass" scoped>
.container
  position: absolute
  overflow: hidden
  height: 100vh
  .descriptionContainer
    position: absolute
    width: 40%
    top: 15%
    left: 45%
    padding: 24px
    box-sizing: border-box
    border-radius: 15px
    background-color: rgba(255, 255, 255, 0.9)

  .optionsContainer
    position: absolute
    width: 40%
    height: auto
    top: 55%
    left: 45%
    display: flex
    flex-direction: column
    gap: 30px
    align-items: center

@media (max-width: 960px)
  .container
    .descriptionContainer
      left: 20%
      width: 65%
      top: 10%
    .optionsContainer
      left: 10%
      width: 80%
</style>