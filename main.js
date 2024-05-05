import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      showIncome1: true,
      showIncome2: false,
      showIncome3: false,
    };
  },
  methods: {
    addIncome2() {
      this.showIncome1 = true;
      this.showIncome2 = true;
      this.showIncome3 = false;
    },
  },
}).mount('#income');