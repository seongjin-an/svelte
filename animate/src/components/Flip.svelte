<script lang="ts">
    import {flip} from 'svelte/animate'

    let horizontal:boolean = false
    let next:number = 1
    let list:number[] = []

    function addItem(){
        list = [next++, ...list]
    }

    function removeItem(number:number){
        list = list.filter(n => n !== number)
    }

    const options = {duration: 500}
</script>
<label>
    Horizontal
    <input type="checkbox" bind:checked={horizontal}>
</label>
<button on:click={addItem}>Add</button>
{#each list as n (n)}
    <div animate:flip={options} class="container" class:horizontal>
        <button on:click={() => {
            removeItem(n)
            console.log('horizontal:', horizontal)
        }}>{n}</button>
    </div>
{/each}
<style>
    .container{
        width: fit-content;
    }
    .horizontal{
        display: inline-block;
        margin-left: 10px;
    }
</style>
