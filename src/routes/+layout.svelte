<script lang="ts">
	import '../app.css';
	import { setupConvex } from 'convex-svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	setupConvex(import.meta.env.VITE_PUBLIC_CONVEX_URL);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Campfire</title>
	<meta
		name="description"
		content="chat live with anyone, no sign ups. built with svelte and convex"
	/>

	<!-- OpenGraph -->
	<meta property="og:title" content="Campfire" />
	<meta
		property="og:description"
		content="chat live with anyone, no sign ups. built with svelte and convex."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://svelte-chat-app.pages.dev/" />
	<meta property="og:image" content={favicon} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Campfire" />
	<meta
		name="twitter:description"
		content="chat live with anyone, no sign ups. built with svelte and convex"
	/>
	<meta name="twitter:image" content={favicon} />
</svelte:head>

{@render children?.()}
