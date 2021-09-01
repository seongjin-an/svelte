<script lang="ts">
	import Demo from "./Demo.svelte";
	import {onMount} from "svelte";
	import Colorcycle from "./Colorcycle.svelte";
	import Update from "./Update.svelte";
	import AfterUpdate from "./AfterUpdate.svelte";
	import {onMountLog} from "./helper";
	import AgeEntry from "./AgeEntry.svelte";
	import NameEntry from "./NameEntry.svelte";

	let show: boolean = false;


	interface IPost {
		userId: string
		id: string
		title: string
		body: string
	}

	let posts = []
	let message: string
	onMount(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		if (res.status === 200) {
			console.log('success')
			const json = await res.json<IPost[]>()
			console.log('json:', json)
			posts = json
			message = ''
		} else {
			console.log('fail')
			posts = []
			message = String(res.status)
		}
	})

	let age = 0;
	let enterAge = false;
	let name = ''
	onMountLog('App')
</script>
<label>
	<input type="checkbox" bind:checked={show}>
	Show
</label>
{#if show}
	<Demo/>
{/if}
<button on:click={() => show = !show}>Toggle</button>
{#if show}
	<Colorcycle text="Some Title"/>
{/if}
<table>
	<caption>Posts</caption>
	<tr>
		<th>userId</th>
		<th>id</th>
		<th>title</th>
		<th>body</th>
	</tr>
	{#each posts as post}
		<tr>
			<td>{post.userId}</td>
			<td>{post.id}</td>
			<td>{post.title}</td>
			<td>{post.body}</td>
		</tr>
	{/each}
</table>
{#if message}
	<div class="error">Failed to retrieve posts: {message}</div>
{/if}
<Update />
<AfterUpdate/>
{#if enterAge}
	<AgeEntry bind:age />
{:else}
	<NameEntry bind:name/>
{/if}
<label>
	Enter Age?
	<input type="checkbox" bind:checked={enterAge}>
</label>
<div>{name} is {age} years old.</div>

<style>
	caption{
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.error{
		color:red;
	}
	table{
		border-collapse: collapse;
	}
	td, th{
		border: solid lightgray 1px;
		padding: 0.5rem;
	}
</style>