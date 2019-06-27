import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        order:{title:'',description:'',price:0,calories:0,qty:0},
        orders:[],
        order_total:0,
        balance:'',
    },
    getters:{
        countOrders: state => {
			return state.orders.length
        },
        
    },
    mutations:{
        cleanOrders: state => {
			while(state.orders.length){
				state.orders.pop()
            }
            return state.order_total = 0
        },
    },
    actions:{
        cleanOrders: context => {
            context.commit('cleanOrders')
        },
    },
    
    // STACKOVERFLOW QUESTION 
    // mutations:{
    //     triggerFunction: (state,title,description,price,calories) => {
	// 		state.order.title = title,
	// 		state.order.description = description,
	// 		state.order.price = price,
	// 		state.order.calories = calories
	// 		state.order.qty = 1
	// 		state.orders.push(state.order)
    //         console.log(state.order)
    //         console.log(state.orders)
	// 	},
    // },
    // actions:{
    //     triggerFunction: (context,title,description,price,calories) => {
    //         context.commit('triggerFunction',title,description,price,calories)
    //     }
    // },
})