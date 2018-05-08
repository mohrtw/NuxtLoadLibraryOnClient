import Vue from 'vue'
import Vuex from 'vuex'
import otherObjects from '../plugins/otherObjects';

Vue.use(Vuex);

//debugger

const store = () => new Vuex.Store({
    state: {
      OO: otherObjects
    }
  });

export default store;