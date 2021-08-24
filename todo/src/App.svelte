
<script lang="ts">
	import TodoList from './TodoList.svelte'
	import Person from './Person.svelte'

	export let name: string;
	const showAge = (num:number): number => {
		return num*2
	}
	const celebrate = () => {
		console.log("happy birthday")
	}



</script>

<main>
	<TodoList/>
	<Person
			fullName="Jane Programmer"
			developer={true}
			ball={{name: 'baseball', grams: 149, new: false}}
			favoriteColors={['yellow', 'orange']}
			age={showAge(12)}
			onBirthday={celebrate} />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

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