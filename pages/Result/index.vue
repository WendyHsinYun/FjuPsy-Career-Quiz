<template lang="pug">
v-row 
  v-col(cols='12').fill-height
    ResultLayout(v-if='Object.entries(result).length > 0' :result='result')
    
    slot(v-else) 
      Loader

</template>

<script setup>
const dataStore = useDataStore();

const result = ref({})

const mapResultName = (answers) => {
  let resultName = '';
  for (const [sequence, answer] of Object.entries(answers)) {
    resultName += answer;
  }
  return resultName;
};

const mapResult = () => {
  const resultName = mapResultName(dataStore.quizAnswer)
  result.value = mappedData[resultName]
}

let timer;

onMounted(()=>{
  timer = setTimeout(()=>{
    mapResult();
  }, 1000)
})

const toEntry = () => {
  dataStore.clearAnswers()
  clearTimeout(timer)
  navigateTo('/Entry/Two')
}
</script>
  