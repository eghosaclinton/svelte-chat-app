<script lang="ts">
	import ChatBubble from '../ui/ChatBubble.svelte';
	import { useConvexClient, useQuery } from 'convex-svelte';
	import { api } from '../convex/_generated/api';
	import { faker } from '@faker-js/faker';
	import { onMount } from 'svelte';

	let NAME = $state('');
	const convexClient = useConvexClient();
	const messages = useQuery(api.chat.getMessage, {});

	let newMessageText = $state('');

	onMount(() => {
		NAME = getOrSetFakeName();

		setTimeout(() => {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		}, 0);
	});

	function getOrSetFakeName() {
		const NAME_KEY = 'campfire_name';
		const name = localStorage.getItem(NAME_KEY);

		if (!name) {
			const newName = faker.person.firstName();
			localStorage.setItem(NAME_KEY, newName);
			return newName;
		}

		return name;
	}

	async function onsubmit(event: SubmitEvent) {
		event.preventDefault();
        console.log("lol")
		// alert('Mutation has not been implemented');
		await convexClient.mutation(api.chat.sendMessage, {
			user: NAME,
			body: newMessageText
		});

		newMessageText = '';
	}
</script>

<main class="chat">
	<header>
		<h1>Campfire</h1>
		<p>Connected as <strong>{NAME}</strong></p>
	</header>

	{#if messages.isLoading}
		<p>isLoading</p>
	{:else if messages.error}
		<p>something is wrong mate, um {messages.error.toString()}</p>
	{:else}
		{#each messages.data as message (message._id)}
			<ChatBubble {message} {NAME} />
		{/each}
	{/if}

	<form {onsubmit}>
		<input type="text" bind:value={newMessageText} placeholder="Write a new message..." />
		<button type="submit" disabled={!newMessageText}>Send</button>
	</form>
</main>
