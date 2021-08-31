<script lang="ts">
    import Example from "./Example.svelte";
    import MaskedInput from "./MaskedInput.svelte";
    import Dialog from "./Dialog.svelte";
    import Dnd from "./Dnd.svelte";
    import Checklist from "./TravelApp/Checklist.svelte";
    // import SanitizeHtml from "./SanitizeHtml.svelte";
    let phone = ''

    let dialog;
</script>
<Example/>
<!--<SanitizeHtml/>-->
<label>
    Phone
    <MaskedInput mask="(999)999-9999" bind:value={phone} />
</label>
<div>phone={phone}</div>


<div>
    <button on:click={() => dialog.showModal()}>Open Dialog</button>
</div>
<Dialog title="Test Dialog" bind:dialog>
    My dialog content is very, very long.<br>
    It will not wrap by default
</Dialog>

<Dnd />

<Checklist />