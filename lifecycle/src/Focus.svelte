<script lang="ts">
    import {onMount} from 'svelte'
    let name: string = ''
    let nameInput:HTMLInputElement
    onMount(() => nameInput.focus())
</script>
<input bind:this={nameInput} bind:value={name}>