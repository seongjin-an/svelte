<script lang="ts">
    import StopLight from "./StopLight.svelte"
    import Sum from "./Sum.svelte";
    import Bind from "./Bind.svelte";
    import Tally from "./Tally.svelte";
    import Parent from "./Parent.svelte";

    let go = false


    let size = 3;
    $: numbers = Array(size).fill(0).map((_, index) => index + 1)


    let tally: { taxRate: number, getGrandTotal: Function };
    let taxRate = 0, grandTotal = 0;

    function update() {
        taxRate = tally.taxRate;
        grandTotal = tally.getGrandTotal()
    }
</script>

<StopLight/>
<StopLight on/>
<StopLight on={go}/>
<button on:click={() => go = !go}>Toggle</button>

<label>
    Size
    <input type="number" bind:value={size}>
</label>
<Sum numbers="{numbers}"/>
<Bind/>
<Tally bind:this={tally} />
<button on:click={update}>update</button>
<div>
    Tax Rate = {(taxRate * 100).toFixed(2)}%
    Grand Total = {grandTotal.toFixed(2)}
</div>
<Parent/>