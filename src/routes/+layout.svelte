<script lang="ts">
	import '../app.css';
	import { setupConvex } from 'convex-svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	// setupConvex(import.meta.env.VITE_PUBLIC_CONVEX_URL);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
