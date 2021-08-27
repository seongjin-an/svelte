<script lang="ts">
    export let cValue:number;
    const double = () => (cValue *= 2)

    export let triple;
    $: triple = cValue * 3
</script>
<button on:click={double}>Double</button>
<div>cValue = {cValue}</div>
<div>in Child triple = {triple}</div>