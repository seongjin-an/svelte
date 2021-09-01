<script>
    import {onDestroy, onMount} from 'svelte'

    export let text

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    let colorIndex = 0
    let token

    onMount(() => {
        token = setInterval(() => {
            colorIndex = (colorIndex + 1) % colors.length
        }, 500)
    })

    onDestroy(() => {
        console.log("color cycle destroyed")
        clearInterval(token)
    })
</script>
<h1 style="color: {colors[colorIndex]}">{text}</h1>