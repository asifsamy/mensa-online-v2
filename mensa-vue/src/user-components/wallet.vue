<template>
    <div class="whole-wrap">
		<div class ="container">
            <section class="button-area">
				<div class="container border-top-generic">
                    <h1 class="typo-list">Wallet</h1>
                    <div style="padding-top:10px;">
                        <p class="typo-list">Balance $</p>
                    </div>
				</div>
			</section>
            <section class="sample-text-area">
				<div class="container">
					<h1 class="typo-list">Recharge</h1>
                    <p>Recharge methods</p>
                    <!-- STRIPE 1 -->
                    <!-- <div >
                        <button @click="checkout" ref="checkoutRef">>Sell black matter gun</button>
                    </div> -->

                    <!-- STRIPE 2 -->
                    <div>
                        <vue-stripe-checkout
                        ref="checkoutRef"
                        :image="image"
                        :name="name"
                        :description="description"
                        :currency="currency"
                        :amount="amount"
                        :allow-remember-me="false"
                        ></vue-stripe-checkout>
                        <button @click="checkout">Stripe</button>
                    </div>

                    <!-- PAYPAL -->

                    <div id="app">
                        <paypal-checkout
                            amount="10.00"
                            currency="USD"
                            :client="paypal">
                        </paypal-checkout>
                    </div>
				</div>
			</section>
            
		</div>
	</div>
    
</template>

<script>
// STRIPE 2
// export default {
//   data() {
//     return {
//       image: 'https://i.imgur.com/HhqxVCW.jpg',
//       name: 'Shut up and take my money!',
//       description: 'Cats are the best dog!',
//       currency: 'PHP',
//       amount: 99999
//     }
//   },
//   methods: {
//     async checkout () {
//       // token - is the token object
//       // args - is an object containing the billing and shipping address if enabled
//       const { token, args } = await this.$refs.checkoutRef.open();
//     },
//     done ({token, args}) {
//       // token - is the token object
//       // args - is an object containing the billing and shipping address if enabled
//       // do stuff...
//     },
//     opened () {
//       // do stuff 
//     },
//     closed () {
//       // do stuff 
//     },
//     canceled () {
//       // do stuff 
//     }
//   }
// }


export default {
    data() {
    return {
        // STRIPE 2
      image: 'https://i.imgur.com/HhqxVCW.jpg',
      name: 'Shut up and take my money!',
      description: 'Cats are the best dog!',
      currency: 'PHP',
      amount: 99999,
    //   PAYPAL
        paypal: {
        sandbox: '<sandbox client id>',
        production: '<production client id>'
        }
  }
    },
//   STRIPE 2
methods: {
    checkout () {
            // this.$checkout.close()
            // is also available.
            this.$refs.checkoutRef.open({
                    image: 'https://i.imgur.com/1PHlmFF.jpg',
                    locale: 'en',
                    currency: 'BZD',
                    name: 'Blips and Chitz!',
                    description: 'An entire afternoon at Blips and Chitz!',
                    amount: 9999999,
                    panelLabel: 'Play Roy for {{amount}}',
                    token: (token) => {
                            // handle the token
                    }
            })
    },
}
}
</script>

<style>

</style>
