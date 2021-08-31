<script lang="ts">
	import {itemsWithTaxStore, taxStore} from './store/item/itemStore'
	import {count} from './store/count/count-store'
	import Point from "./store/figure/point";
	import {pointStore} from "./store/figure/figureStore";
	import {lineStore} from "./store/figure/figureStore";
	import {storeLine, storePoint} from "./store/figure/storeFigure";

	let point = new Point(1, 2)
	function translate(){
		const dx = 2
		const dy = 3
		point.translate(dx, dy)
		point = point

		pointStore.update(point => {
			point.translate(dx, dy)
			return point
		})

		lineStore.update(line =>{
			line.translate(dx, dy)
			return line
		})
	}

	let point2 = storePoint(1, 2)
	let line = storeLine(new Point(0,0), new Point(0,0))
	function translate2(){
		const dx = 2;
		const dy = 3;
		point2.translate(dx, dy)
		line.translate(dx, dy)
	}
</script>
<label>
	Tax
	<input type="number" bind:value={$taxStore}>
</label>
{#each $itemsWithTaxStore as item}
	<div>
		{item.name} - cost ${item.cost.toFixed(2)} - total ${item.total.toFixed(2)}
	</div>
{/each}


<div>count = {$count}</div>
<button on:click={() => count.increment()}>+</button>
<button on:click={() => count.decrement()}>-</button>
<button on:click={() => count.reset()}>Reset</button>


<h1>local point = ({point.x}, {point.y})</h1>
<h1>point store = {$pointStore.toString()}</h1>
<h1>line store = {$lineStore.toString()}</h1>
<button on:click={translate}>Translate</button>

<h1>point = ({$point2.x}, {$point2.y})</h1>
<h1>line = ({$line.start.toString()}, {$line.end.toString()})</h1>
<button on:click={translate2}>Translate2</button>