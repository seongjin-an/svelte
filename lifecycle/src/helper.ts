import {onMount} from "svelte"

export function onMountFocus(){
    onMount(() => {
        const input:HTMLInputElement = document.querySelector('input')
        console.log('input:', input)
        input.focus()
    })
}

export function onMountLog(name){
    onMount(() => console.log(name, 'mounted'))
}