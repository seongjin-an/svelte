<script lang="ts">
    export const taxRate:number = 0.07;

    let price:number;
    let prices:number[] = [];

    $: total = prices.reduce((acc:number, n:number) => acc + n, 0)

    const add = () => {
        prices.push(price)
        prices = prices;
        price = 0;
    }

    export const getGrandTotal = () => total * (1 + taxRate)
</script>

<input type="number" bind:value={price} />
<button on:click={add}>Add</button>
{#each prices as price}
    <div>{price}</div>
{/each}
<label>Total {total}, Tax Rate {(taxRate * 100).toFixed(2)}%</label>