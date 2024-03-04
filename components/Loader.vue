<template lang="pug">
.layout
  .grid
    .item1
    .item2
    .item3
    .item4
  span 探索結果中...
</template>

<style lang="sass" scoped>

.layout
  margin: auto
  display: flex
  width: 100vw
  height: 100vh
  background-color: #ee8700
  color: rgb(255, 255, 255)

.grid
  margin: auto
  margin-right: 1px
  width: 50px
  height: 50px
  display: grid
  gap: 0px
  grid-template-columns: auto auto
  animation: rotate 1s linear 0s infinite

.item1, .item2, .item3, .item4
  margin: auto
  width: 15px
  height: 15px
  border-radius: 0%
  background-color: rgb(255, 255, 255)

span
  margin: auto
  margin-left: 5px
  font-size: 36px
  
@keyframes rotate
  0%
    rotate: 0deg
    transform: scale(0.6)

  50%
    rotate: 100deg
    transform: scale(0.4)

  100%
    rotate: 360deg
    transform: scale(0.6)

@keyframes text-reveal
  0%, 100%
    width: 0
  
  50%
    width: 100%
  




</style>