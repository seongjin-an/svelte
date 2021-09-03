
<script lang="ts">
	import TodoList from './TodoList.svelte'
	import Person from './Person.svelte'
	import Payment from "./Payment.svelte";

	export let name: string = "world";
	const showAge = (num: number): number => {
		return num * 2
	}
	const celebrate = () => {
		console.log("happy birthday")
	}


</script>

<main>
	<TodoList/>
<!--	<Person-->
<!--			fullName="Jane Programmer"-->
<!--			developer={true}-->
<!--			ball={{name: 'baseball', grams: 149, new: false}}-->
<!--			favoriteColors={['yellow', 'orange']}-->
<!--			age={showAge(12)}-->
<!--			onBirthday={celebrate} />-->
<!--	<Payment/>-->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>