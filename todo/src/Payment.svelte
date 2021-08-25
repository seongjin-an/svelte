<script lang="ts">
    const MONTHS_PER_YEAR:number = 12;
    let interestRate:number, loanAmount:number, years:number;

    function calculatePayment(loanAmount, interestRate, years): number{
        if(!loanAmount || !years) return 0;
        const months = years * MONTHS_PER_YEAR;
        if(!interestRate) return loanAmount / months;
        const monthlyInterestRate = interestRate / 100 / MONTHS_PER_YEAR;
        const numerator = loanAmount * monthlyInterestRate;
        const denominator = 1 - (1 + monthlyInterestRate) ** -months;
        return numerator / denominator;
    }

    function reset(){
        interestRate = 3;
        loanAmount = 200000;
        years = 30;
    }
    reset()//초기화

    //calculatePayment 함수에서 인자로 loanAmount, interestRate, years 변수값들이 바뀔 때 해당 함수를 다시 호추랗게 만든다.
    //만약 인자를 생략하고 함수를 호출하게 만들면, 입력값이 바뀌어도 calculatePayment 함수는 다시 호출되지 않는다.
    $: payment = calculatePayment(loanAmount, interestRate, years);

    //+ 버튼을 클릭하면 increment 함수가 호출된다. increment 함수는 최상위 변수인 count의 값을 변경한다.
    //그리고 count 변수가 div 요소 내의 보간에서 쓰이기 때문에 DOM의 해당 부분이 업데이트 된다.
    //이런 업데이트를 발생시키려면 반드시 =, +=, ++ 등을 사용하여 새로운 값을 할당해야 한다.
    //배열에서 새로운 요소를 추가한다고 새로운 배열이 만들어지지 않으며 따라서 변수에 새로운 값이 할당되지도 않는다.
    let count = 0;
    const increment = () => count++;

    let myArr: number[]=[1];
    myArr = myArr.concat(2);
    myArr = [...myArr, 3];
    myArr.push(4);
    myArr = myArr;//마지막 방법은 스스로 다시 할당하는 것이지만, 이런식으로 스벨트에 새로운 값을 할당한다. 성능상의 이유로 push가 권장됨

</script>

<main>
    <label for="loan">Loan Amount</label>
    <input id="loan" type="number" bind:value={loanAmount}>

    <label for="interest">Interest Rate</label>
    <input id="interest" type="number" bind:value={interestRate}>

    <label for="years">Years</label>
    <input id="years" type="number" bind:value={years}>

    <div>
        Monthly Payment: ${payment.toFixed(2)}
    </div>
    <button on:click={reset}>Rest</button>

    <div>count = {count}</div>
    <button on:click={increment}>+</button>
</main>