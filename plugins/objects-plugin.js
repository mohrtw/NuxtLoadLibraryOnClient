import Vue from 'vue'
import SO from './someObjects';

const ObjectsPlugin = {

    install(Vue, options) {
        Vue.component('globe', SO)
    }
  };
  
  Vue.use(ObjectsPlugin)

  export default ObjectsPlugin;