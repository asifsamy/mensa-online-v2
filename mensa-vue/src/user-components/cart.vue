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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
	data(){
		return{
			
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
					alert("You don't have enough balance."+"\nPlease Recharge")
				}else if(this.$store.state.balance>0){
					alert("Your actual balance is"+"\nPurchase complete")
				}
				
			});
			
		},
		formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
  	}
}
</script>

<style>
</style>
