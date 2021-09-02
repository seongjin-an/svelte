<script lang="ts">
    import Flip from "./components/Flip.svelte";
    import {tweened} from "svelte/motion";//spring, tweened 함수 제공//쓰기 가능한 스토어임//이 함수들은 두 개의 값 사이를 보간함
    import Pie from "./components/Pie.svelte";
    import Motion from "./components/Motion.svelte";
    import Transition from "./components/Transition.svelte";
    import ButtonList from "./components/ButtonList.svelte";
    import CrossFade from "./components/CrossFade.svelte";
    import Draw from "./components/Draw.svelte";


    let percent = 0
    const store = tweened(0, {duration: 1000})//옵션으로 delay, duratioin, easing, interpolate가 있음
    $: store.set(percent || 0)


    let left = ['red', 'orange', 'yellow', 'green']
    let right = ['blue', 'purple']

    function move(event, from, to) {
        console.log('event:', event)
        const text = event.target.textContent.trim()
        to.push(text)
        return [from.filter(t => t !== text), to]
    }

    function moveLeft(event: PointerEvent) {
        [right, left] = move(event, right, left)
    }

    function moveRight(event: PointerEvent) {
        [left, right] = move(event, left, right)
    }
</script>


<!--<Flip/>-->


<!--<label>-->
<!--    Percent-->
<!--    <input type="number" min="0" max="100" bind:value={percent}>-->
<!--</label>-->
<!--<Pie size={200} percent={$store}/>-->


<!--<Motion />-->


<!--<Transition/>-->


<!--<p>Click a button to move it to the other list.</p>-->
<!--<ButtonList list={left} moveFn={moveRight} />-->
<!--<ButtonList list={right} moveFn={moveLeft} />-->


<CrossFade />


<Draw />