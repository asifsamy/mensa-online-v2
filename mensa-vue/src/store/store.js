import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        order:{title:'',description:'',price:0,calories:0,qty:0},
        orders:[],
    }
})