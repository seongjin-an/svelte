<script lang="ts">
    let color;
    // color = 'green'
    let colors = ['yellow', 'green', 'blue', 'red', 'gray', 'orange']

    const person = {
        color: 'yellow',
        name: 'Mark',
        spouse: {
            color: 'blue',
            name: 'Tami'
        }
    }

    let breed = 'Whippet'
    async function getDogs(){
        const url = 'https://dog.ceo/api/breed/'+`${breed.toLowerCase()}/images/random/1`
        const result = await fetch(url);
        if(!result.ok || result.status === 404) return []
        const json = await result.json()
        return json.message
    }
    let dogsPromise = getDogs()

    // 프로미스 방식
    function getData () {
        return new Promise((resolve, reject)=>{
            if(true) {
                // 실패
                reject("you got error")
            } else {
                // 성공
                resolve({message:'succes', data: [{name: 'ansj', age: '28'}, {name: 'seong', age:'10'}]})
            }
        })
    }
    getData()
        .then(response => console.log(response))
        .catch(error => console.log(error))
</script>

<main>
    {#if color === 'yellow'}
        <div>nice color {color}</div>
    {:else if color === 'orange'}
        <div>nice color {color}</div>
    {:else if color === null || color === undefined}
        <div>undefined...</div>
    {:else}
        <div>it's good {color}</div>
    {/if}
    {#each colors as color, index}
        <div style="color: {color}">{index+": "+color}{index}</div>
    {/each}
    {#each Object.entries(person) as [key, value]}
        <div>found key "{key}" with value {JSON.stringify(value)}</div>
    {/each}
    {#each Array(5) as _, index}
        <div>line {index+1}</div>
    {/each}
    <label>
        Breed
        <input bind:value={breed}>
    </label>
    <button on:click={() => dogsPromise = getDogs()}>Get Image</button>
    {#await dogsPromise}
        <div>Waiting for dogs...</div>
    {:then imageUrls}
        {#each imageUrls as url}
            <div><img alt="dog" src={url}></div>
        {:else}
            <div>Not Found</div>
        {/each}
    {:catch error}
        <div>Error: {error.message}</div>
    {/await}
</main>