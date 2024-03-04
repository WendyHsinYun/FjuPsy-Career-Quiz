import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    quizAnswer: {},
  }),
  persist: {
    storage: persistedState.sessionStorage,
  },
  getters: {},
  actions: {
    clearAnswers() {
      this.quizAnswer = {};
    },
  },
});
