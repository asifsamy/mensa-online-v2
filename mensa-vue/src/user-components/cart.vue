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
			<div>Orders quantity: {{countOrders}}</div>
			<div class="section-top-border">
				<div class="meta-bottom d-flex justify-content-between">
					<div>
						<p class="genric-btn primary circle text-uppercase" v-on:click="cleanOrders">Clean orders</p>
					</div>
					<div  style="align-self:right;">
						<p class="genric-btn primary circle text-uppercase" >Continue to checkout</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
	computed:{
		...mapState([
			'orders'
		]),
		...mapGetters([
			'countOrders'
		]),
	},
  	methods:{	
		...mapActions([
			'cleanOrders'
		]),
  	}
}
</script>

<style>
</style>
