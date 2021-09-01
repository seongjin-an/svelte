<script lang="ts">
	import NavButton from "./components/NavButton.svelte";
	import {cartStore} from "./store/cart/cartStore";
	import Cart from './components/cart/Cart.svelte'
	import Ship from './components/ship/Ship.svelte'
	import Shop from './components/shop/Shop.svelte'
	import HashrouteApp from "./HashrouteApp.svelte";
	import PageApp from "./PageApp.svelte";

	const pageMap = {
		cart: Cart,
		ship: Ship,
		shop: Shop
	}
	let pageName = 'shop'
</script>
<!--<nav>-->
<!--	<NavButton bind:pageName name='shop'>Shop</NavButton>-->
<!--	<NavButton bind:pageName name="cart">&#x1F6D2; {$cartStore.length}</NavButton>-->
<!--	<NavButton bind:pageName name="ship">Ship</NavButton>-->
<!--</nav>-->
<!--<main>-->
<!--	<svelte:component this={pageMap[pageName]} />-->
<!--</main>-->
<!--<HashrouteApp />-->
<PageApp />
<style>
	main{
		padding: 10px;
	}
	nav{
		display: flex;
		align-items:center;
		background-color: cornflowerblue;
		padding: 10px;
	}
</style>