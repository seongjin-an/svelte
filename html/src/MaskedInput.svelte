<script>
    import {tick} from 'svelte'
    export let mask;
    export let value;

    function getDigits(value){
        let newValue = '';
        for(const char of value){
            if(char >= '0' && char <= '9') newValue += char;
        }
        return newValue;
    }

    function maskValue(digits){
        const {length} = digits;
        if(length === 0) return ''

        let value = ''
        let index = 0
        for(const char of mask){
            if(char === '9') {
                const nextChar = digits[index++]
                if (!nextChar) break
                value += nextChar
            }else if(index < length){
                value += char
            }

        }
        return value
    }

    function handleKeydown(event){//여기서는 backspace만 처리한다
        if(event.key !== 'Backspace') return;
        const {target} = event;
        console.log(`event: ${event}`)
        let {selectionStart, selectionEnd} = target
        setTimeout(async () => {
            console.log('selectionStart:', selectionStart, ' / selectionEnd:', selectionEnd)
            console.log('target.value:', target.value)
            value = maskValue(getDigits(target.value))
            console.log('value:', value)
            await tick()
            if(selectionStart === selectionEnd) selectionStart--
            console.log('selectionStart:', selectionStart, ' / selectionEnd:', selectionEnd)
            // target.setSelectionRange(selectionStart, selectionStart)
            // target.setSelectionRange(selectionStart, selectionEnd)
        })
    }

    function handleKeypress(event){
        setTimeout( async () => {
            const {target} = event
            let {selectionStart} = target
            value=maskValue(getDigits(target.value))
            await tick()
            if(selectionStart === value.length -1) selectionStart++
            const maskChar = mask[selectionStart -1]
            if(maskChar !== '9') selectionStart++
            target.setSelectionRange(selectionStart, selectionStart)
        })
    }
</script>
<input maxlength={mask.length}
       on:keydown={handleKeydown} on:keypress={handleKeypress}
       placeholder={mask} bind:value={value} />