<template lang="pug">
button(:style="{ 'background-color': backgroundColor }")
  slot
</template>

<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: '',
  }
})
</script>

<style lang="sass" scoped>
button 
  width: 60%
  padding: 20px
  font-size: 24px
  color: white
  box-sizing: border-box
  border-radius: 15px
  transition: all .5s ease
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)
  font-weight: bold
  letter-spacing: 1.5px

button:hover
  background-color: #748E8D
  transform: translateY(-5px)
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3)
</style>