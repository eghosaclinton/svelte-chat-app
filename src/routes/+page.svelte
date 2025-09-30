<script>
    let count = $state(1)

    function addCount(){
        count ++;
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button onclick={addCount}>
    click me
</button>
<h2>{count}</h2>
