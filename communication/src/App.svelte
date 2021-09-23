<script>
    import page from 'page'
    import Checklist from './Packing/CheckList.svelte';
    import CheckList2 from './Travel/Checklist.svelte'
    import Login from './Packing/Login.svelte';
    import Login2 from './Travel/Login.svelte'
    import NotFound from './Packing/NotFound.svelte';
    /*
    const hashMap = {
      '#login': Login,
      '#checklist': Checklist
    };
    */
    let component = Login;
    //const hashChange = () => (component = hashMap[location.hash] || NotFound);
    page.redirect('/', '/login');
    page('/login', () => (component = Login2));
    page('/checklist', () => (component = CheckList2));
    page('*', () => (component = NotFound));
    page.start();
</script>

<!-- <svelte:window on:hashchange={hashChange} /> -->

<main>
    <h1 class="hero">Travel Packing Checklist</h1>

    <!-- <svelte:component
      this={component}
      on:login={() => (location.href = '/#checklist')}
      on:logout={() => (location.href = '/#login')} /> -->

    <svelte:component
            this={component}
            on:login={() => page.show('/checklist')}
            on:logout={() => page.show('/login')} />
</main>

<style>
    .hero {
        --height: 7rem;
        /*background-color: var(--heading-bg-color);*/
        color: white;
        font-size: 4rem;
        height: var(--height);
        line-height: var(--height);
        margin: 0 0 3rem 0;
        text-align: center;
        vertical-align: middle;
        width: 100vw;
    }
    main {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>