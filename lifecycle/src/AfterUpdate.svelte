<script lang="ts">
    import {afterUpdate} from "svelte";

    let input:HTMLInputElement;
    let item:string = ''
    let items: string[] = []
    let list

    // afterUpdate(() => list.scrollTo(0, list.scrollHeight))

    function addItem(){
        items.push(item)
        items = items;
        item = ''
        input.focus()
    }
</script>
<style>
    .list{
        border: solid gray 2px;
        height: 52px;
        overflow-y: scroll;
        padding: 5px;
    }
</style>
<p>Tell me what you want for your birthday</p>
<form on:submit|preventDefault>
    <input bind:this={input} bind:value={item}>
    <button on:click={addItem}>Add</button>
</form>
<div class="list">
    {#each items as item}
        <div>{item}</div>
    {/each}
</div>