<template>
    <div class="whole-wrap">
		<div class ="container">
			<div class="section-top-border"> 
				<h3 class="mb-30">Orders</h3>
				<div class="progress-table-wrap">
					<div class="progress-table">
						<div class="table-head" >
							<div class="visit" style="padding-left: 10px;">Meal</div>
							<div class="country">Description</div>
							<div class="serial">Price</div>
							<div class="serial">Calories</div>
							<div class="serial">Quantity</div>
							<div class="serial">Total</div>
						</div>
						<div class="table-row" v-for="(order, index) in orders" track-by="$index" :key="index">
							<div class="visit" style="padding-left: 10px;">{{order.title}}</div>
							<div class="country">{{order.description}}</div>
							<div class="serial">{{order.price}}</div>
							<div class="serial">{{order.calories}}</div>
							<div class="serial">{{order.qty}}</div>
							<div class="serial">{{order.price}}</div>
						</div>
					</div>
				</div>
			</div>
			<div><h5>Orders quantity: {{countOrders}}</h5><br></div>
			<div><h5>Price of total order: {{formatPrice(order_total)}}</h5><br></div>
			<div><h5>Actual balance: {{formatPrice(balance)}}</h5><br></div>
			<div class="section-top-border">
				<div class="meta-bottom d-flex justify-content-between">
					<div>
						<p class="genric-btn primary circle text-uppercase" v-on:click="cleanOrders">Clean orders</p>
					</div>
					<div  style="align-self:right;">
						<p class="genric-btn primary circle text-uppercase" v-on:click="checkout">Continue to checkout</p>
						<!-- Button to test submit order -->
						<button type="submit" v-on:click="submitOrder">Submit Order Test</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import api from './api/index.js'

export default {
	data(){
		return{
			temp:0,
			rorders:'',
			customOrder:{
				id: 7,
				status: "Pending",
				timestamp: "2019-06-27T10:16:26.486383Z",
				update: "2019-06-27T10:16:26.486383Z",
				customer: 1,
				menu: [
					1
				]
			}
		}
	},
	computed:{
		...mapState([
			'orders',
			'balance',
			'order_total',
		]),
		...mapGetters([
			'countOrders',
		]),
	},
  	methods:{	
		...mapActions([
			'cleanOrders'
		]),
		checkout:function(){
			this.$store.state.orders.forEach(element => {
				this.$store.state.order_total = parseFloat(this.$store.state.order_total) + parseFloat(element.price)
				console.log(this.$store.state.order_total)
				this.$store.state.balance = this.$store.state.balance - parseFloat(this.$store.state.order_total)
				if(this.$store.state.balance<0){
					this.temp = 1
					alert("You don't have enough balance."+"\nPlease Recharge")
				}
			});
			if (this.temp == 0){
				alert("Purchase complete")
			}	
		},
		formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
		},
		submitOrder(){
            api.fetchOrders('post',null, this.customOrder).then(res => {
                this.msg = 'Saved'
                console.log(this.customOrder)
            }).catch((e) => {
                this.msg = e.response
                console.log(e)
            },)
		},
		fetchAllOrders(){
			api.fetchOrders('get',null,null).then(res => {
				this.rorders = res.data
				// Check the data from the console
				console.log(this.rorders)
			}).catch((e) => {
				console.log(e)
			})
		},
	  },
	  	mounted(){
			// fetch all notes once component is mounted
			this.fetchAllOrders()
		}
}
</script>

<style>
</style>
