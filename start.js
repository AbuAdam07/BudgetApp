Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incomeCards: [
      { title: 'Income 1', content: 0 },
      { title: 'Income 2', content: 0 }
    ],
    expenseCards: [
      { title: 'Expense 1', content: 0 },
      { title: 'Expense 2', content: 0 }
    ]
  },
  mutations: {
    updateContent(state, payload) {
      const card = state[payload.type].find(card => card.title === payload.title);
      card.content = payload.content;
    }
  },
  actions: {
    updateContent({ commit }, payload) {
      commit('updateContent', payload);
    }
  }
})