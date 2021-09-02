<script>
    import {flip} from 'svelte/animate'
    import {crossfade} from 'svelte/transition'
    //crossfade 함수에는 반드시 옵션값이 지정된 객체를 전달해야 함 그러나 빈 객체를 전달해서 기본값만 사용하게 할 수도 있다.
    const [send, receive] = crossfade({})
    let left = ['red', 'orange', 'green', 'purple']
    let right = ['yellow', 'blue']

    function move(item, from, to){
        to.push(item)
        return [from.filter(i => i !== item), to]
    }

    function moveLeft(item){
        [right, left] = move(item, right, left)
    }
    function moveRight(item){
        [left, right] = move(item, left, right)
    }
</script>
<main>
    <p>Click a button to move it to the opposite list.</p>
    <div class="list">
        {#each left as item (item)}
            <button animate:flip in:receive={{key:item}} out:send={{key:item}} on:click={() => moveRight(item)}>{item}</button>
        {/each}
    </div>
    <div class="list">
        {#each right as item (item)}
            <button animate:flip in:receive={{key:item}} out:send={{key:item}} on:click={() => moveLeft(item)}>{item}</button>
        {/each}
    </div>
</main>
<style>
    button{
        background-color: cornflowerblue;
        border: none;
        color: white;
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
    }
    .list{
        display: inline-block;
        margin-right: 30px;
        vertical-align: top;
        width: 70px;
    }
</style>