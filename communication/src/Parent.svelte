<script lang="ts">
    import Child from "./Child.svelte";

    let triple;
    let pValue:number = 4;
</script>

<Child bind:cValue={pValue} bind:triple />
<div>pValue = {pValue}</div>
<div>triple = {triple}</div>