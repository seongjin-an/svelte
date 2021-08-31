<script lang="ts">
    import Example from "./Example.svelte";
    import MaskedInput from "./MaskedInput.svelte";
    // import SanitizeHtml from "./SanitizeHtml.svelte";
    let phone = ''
</script>
<Example/>
<!--<SanitizeHtml/>-->
<label>
    Phone
    <MaskedInput mask="(999)999-9999" bind:value={phone} />
</label>
<div>phone={phone}</div>