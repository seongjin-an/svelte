<script>
    import {tweened} from "svelte/motion";

    let colorIndex = 0
    const colors = ['ff0000', '00ff00', '0000ff']

    const decimalToHex = decimal => Math.round(decimal).toString(16).padStart(2, '0')

    //색값 배열의 색인값을 순회
    const goToNextColor = () => colorIndex = (colorIndex + 1) % colors.length

    //rrggbb 색깔값 문자열에서 두 개의 16진수 문자를 가져온 다음 이에 해당하는 0에서 255 사의 값 반환
    const getColor = (hex, index) => parseInt(hex.substring(index, index + 2), 16)

    //rrggbb 16진수 문자열에서 에서 255 사이의 값을 가지는 빨,초,파의 값 배열을 가져옴
    const getRGBs = hex => [getColor(hex, 0), getColor(hex, 2), getColor(hex, 4)]

    //t는 0에서 1 사이의 값이며, start와 start+delta 사이의 t% 지점에 해당하는 값을 계산함
    const scaleValue = (start, delta, t) => start + delta * t

    //tweened 함수에서 사용하는 interpolate 함수이다
    const rgbInterpolate = (fromColor, toColor) => {
        console.log('fromColor:', fromColor, ' / toColor:', toColor)
        const [fromRed, fromGreen, fromBlue] = getRGBs(fromColor)
        const [toRed, toGreen, toBlue] = getRGBs(toColor)
        const deltaRed = toRed - fromRed
        const deltaGreen = toGreen - fromGreen
        const deltaBlue = toBlue - fromBlue

        return t => {
            const red = scaleValue(fromRed, deltaRed, t)
            const green = scaleValue(fromGreen, deltaGreen, t)
            const blue = scaleValue(fromBlue, deltaBlue, t)
            return decimalToHex(red)+decimalToHex(green)+decimalToHex(blue)
        }
    }

    const color = tweened(colors[colorIndex], {duration:1000, interpolate: rgbInterpolate})
    $: color.set(colors[colorIndex])
</script>
<button on:click={goToNextColor}>Next</button>
<span>color = {$color}</span>
<h1 style="color: #{$color}">Tweened Color</h1>