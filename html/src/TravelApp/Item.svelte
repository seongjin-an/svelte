<script>
    import {createEventDispatcher} from 'svelte'
    import {blurOnKey} from './util'
    export let item;
    export let categoryId;
    export let dnd;

    const dispatch = createEventDispatcher()
    let editing = false;
</script>

<li draggable="true" on:dragstart={event => dnd.drag(event, categoryId, item.id)}>
    <input type="checkbox" bind:checked={item.packed}>
    {#if editing}
        <input name={item.name} autofocus bind:value={item.name} on:blur={() => editing=false} on:keydown={blurOnKey} type="text" />
    {:else}
        <span class="packed-{item.packed}" on:click={()=>editing=true}>{item.name}</span>
    {/if}
    <button class="icon" data-testid="delete" on:click={() => dispatch('delete')}>&#xF5D1</button>
</li>

<style>
    button{
        background-color: transparent;
        border:none;
    }
    input[type='checkbox']{
        --size: 24px;
        height: var(--size);
        width: var(--size);
    }
    input[type='text']{
        border: solid lightgray 1px;
    }
    li{
        display: flex;
        align-items: center;
    }
    .packed-true{
        color: gray;
        text-decoration: line-through;
    }
    span {
        margin: 0 10px;
    }
</style>