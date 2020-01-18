import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      favorite: [],
      
    },
    mutations: {
     addToFav(state, item) {
        state.favorite.push(item)
     },

     removeToFav(state, item) {
       state.favorite.splice(item, 1)
     }
    }
  })
}

export default createStore