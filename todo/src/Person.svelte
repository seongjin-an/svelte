
<script lang="ts">

    import type {IBall} from "./type"

    export let age:number;
    export let ball:IBall;
    export let developer:boolean;
    export let favoriteColors:string[];
    export let fullName:string;
    export let onBirthday: Function;
</script>
<main>
    <div>
        {fullName} is {age} years old and
        {developer ? 'is' : 'is not'} a developer.
    </div>
    <div>
        They like the colors {favoriteColors.join(' and ')}.
    </div>
    <div>
        They like to throw {ball.new ? 'a new' : 'an old'} {ball.name}
        that weighs {ball.grams} grams.
    </div>
    <button on:click={onBirthday}>It's my birthday!</button>
</main>