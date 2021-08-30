<script lang="ts">
    import StopLight from "./StopLight.svelte"
    import Sum from "./Sum.svelte";
    import Bind from "./Bind.svelte";
    import Tally from "./Tally.svelte";
    import Parent from "./Parent.svelte";
    import ColorPicker from "./ColorPicker.svelte";
    import ShippingLabel from "./ShippingLabel.svelte";
    import Buttons from "./Buttons.svelte";
    import A from "./A.svelte";
    import Login from './Travel/Login.svelte'
    import Checklist from './Travel/Checklist.svelte'

    let go = false

    //
    let size = 3;
    $: numbers = Array(size).fill(0).map((_, index) => index + 1)

    //
    let tally: { taxRate: number, getGrandTotal: Function };
    let taxRate = 0, grandTotal = 0;

    function update() {
        taxRate = tally.taxRate;
        grandTotal = tally.getGrandTotal()
    }

    //
    let hex = '000000';

    //
    let clientH, clientW, offsetH, offsetW

    //
    let colors = ['Red', 'Green', 'Blue']
    let color = '';
    const handleSelect = (event: MouseEvent) => {
        console.log("event:", event)
        console.log("event.detail:", event.detail)
        // color = event.detail;
    }


    let page = Login;
</script>

<!--  프롭스  -->
<StopLight/>
<StopLight on/>
<StopLight on={go}/>
<button on:click={() => go = !go}>Toggle</button>

<!--  바인드  -->
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

<h1>Color Picker</h1>
<ColorPicker bind:hex />
<div class="swatch" style="background-color: {hex}">{hex}</div>
<input type="color" bind:value={hex}>
<style>
    .swatch{
        color: white;
        display: inline-block;
        height: 100px;
        line-height: 100px;
        text-align: center;
        width: 100px;
    }
</style>

<div bind:clientHeight={clientH} bind:clientWidth={clientW} bind:offsetHeight={offsetH} bind:offsetWidth={offsetW}>
    How big am I?
</div>

<!--  슬롯  -->
<ShippingLabel>
    <div slot="address">
        123 Some Street,<br/>
        Somewhere, Some State 12345
    </div>
    <div slot="name">Mark Volkmann</div>
</ShippingLabel>


<!--  이벤트  -->
<Buttons labels={colors} value={color} on:select={handleSelect} />
{#if color}
    <div>You clicked {color}</div>
{/if}


<A/>

{#if page === Login}
    <script>
        console.log("page is login")
    </script>
    <Login on:login={() => (page = Checklist)} />
{:else}
    <script>
        console.log("page is not login")
    </script>
    <Checklist on:logout={() => (page = Login)} />
{/if}