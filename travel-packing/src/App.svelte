<script lang="ts">
	import Login from './Login.svelte'
</script>

<main>
<h1 class="here">Travel Packing Checklist</h1>
<Login/>
</main>

<style>
    :global(body){
        background-color: cornflowerblue;
    }
    .here{
        --height: 7rem;/* variable */

        background-color: orange;
        color: white;
        font-size: 4rem;
        height: var(--height);
        line-height: var(--height);
        margin: 0 0 3rem 0;
        text-align: center;
        vertical-align: middle;
        width: 100vw;
    }
    main{
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>