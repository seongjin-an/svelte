<script lang="ts">

    import {afterUpdate, beforeUpdate, onDestroy, onMount} from "svelte";

    let color:string = 'red'
    function toggleColor(){
        color = color === 'red' ? 'blue' : 'red'
    }
    onMount(() => console.log("mounted..."))
    beforeUpdate(() => console.log("before update..."))
    afterUpdate(() => console.log("after update..."))
    onDestroy(() => console.log("destroyed..."))
</script>
<button on:click={toggleColor} style="color: {color}">
    button
</button>