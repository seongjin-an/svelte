<script lang="ts">
    export let numbers: number[];
    $: sum = numbers.reduce((acc:number, n:number) => acc + n, 0);
</script>
<div>
    numbers are {numbers.join(', ')}
</div>
<div>sum is {sum}</div>