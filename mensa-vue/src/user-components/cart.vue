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
						<div class="table-row" v-for="(tempVar, index) in tempVars" track-by="$index" :key="index">
							<div class="visit" style="padding-left: 10px;">{{tempVar.title}}</div>
							<div class="country">{{tempVar.description}}</div>
							<div class="serial">{{tempVar.price}}</div>
							<div class="serial">{{tempVar.calories}}</div>
							<div class="serial">{{tempVar.qty}}</div>
							<div class="serial">{{tempVar.price}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section-top-border">
				<div class="meta-bottom d-flex justify-content-between">
					<div>
						<p class="genric-btn primary circle text-uppercase" v-on:click="cleanArray">Clean orders</p>
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

export default {
	
  computed:{
	  tempVars(){
		  return this.$store.state.orders;
	
	  }
  },
  methods:{
	  cleanArray(){
		//   this.$store.state.orders.pop();
		  while(this.$store.state.orders.length){
			this.$store.state.orders.pop();
		  }
	  },
  }
}
</script>

<style>

</style>
