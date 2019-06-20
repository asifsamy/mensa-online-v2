<template>
    <div>
		<section class="menu-area section-gap" id="menu">
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="menu-content pb-70 col-lg-8">
						<div class="title text-center">
							<h1 class="mb-10">What kind of Foods we serve for you</h1>
						</div>
					</div>
				</div>	
				<ul class="filter-wrap filters col-lg-12 no-padding">
					<li
						v-for="foodCategory in foodCategories"
						v-on:click="filter=foodCategory"
						:class="{active: foodCategory == filter}"
						:key="foodCategory.id"
					>
						{{foodCategory}}
					</li>
				</ul>
				<div class="row grid">
					<div 
						class="col-md-6 all Veg" 
						v-for="(menu, index) in menus" 
						:key="index"
						track-by="$index" 
						v-if="menu.category == filter || filter == 'All Menu'"
					>
						<div class="single-menu">
							<div class="title-wrap d-flex justify-content-between">
								<h4>{{menu.title}}</h4>
								<h4 class="price">${{menu.price_guest}}</h4>
							</div>
							<p>{{menu.description}}</p>
							<br>
							<h5>Calories <b>{{menu.calories}}</b></h5>
							<br>
							<div class="meta-bottom d-flex justify-content-between">
								<div>
									<!-- <label for="quantity">Quantity:NA</label> -->
								</div>
								<div  style="align-self:right;">
									<p class="genric-btn primary circle text-uppercase" v-on:click="triggerFunction(menu.title,menu.description,menu.price_guest,menu.calories)">add to cart</p>
								</div>
							</div>
						</div>					                               
					</div>		
				</div>
	
			</div>
		</section>
    </div>
    
</template>

<script>

// Import API
import api from './api/index.js';

export default {
	// created(){
	// 	alert('created');
	// },
	// updated(){
	// 	alert('updated');
	// },
    data () {
    return {
		menus: [],
		foodKey:"foodCategory",
		foodCategories:["All Menu","Veg","Non-Veg","Salads","Fruits","Desserts","Beverages","Favorites"],
		filter: "All Menu",
	

		
    }
  },
	computed:{
		
	},
	methods:{
		// Method to pass data to another component
		triggerFunction:function(title,description,price,calories){
			this.quantity+=1,
			this.$store.state.order.title = title,
			this.$store.state.order.description = description,
			this.$store.state.order.price = price,
			this.$store.state.order.calories = calories
			this.$store.state.order.qty = 1
			this.$store.state.orders.push({...this.$store.state.order}),
			console.log(this.$store.state.orders)

		},
		// Method to call data from Django
		fetchAllMenu(){
			api.fetchMenu('get',null,null).then(res => {
				this.menus = res.data
				// Check the data from the console
				// console.log(this.menus)
			}).catch((e) => {
				console.log(e)
			})
		},
	},
	mounted(){
		// fetch all menus once component is mounted
		this.fetchAllMenu()
	},

}
</script>

<style>

</style>
