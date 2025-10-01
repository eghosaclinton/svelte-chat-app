<script lang="ts">
	import ChatBubble from '../ui/ChatBubble.svelte';
	import { useQuery } from 'convex-svelte';
	import { api } from '../convex/_generated/api';
	import { onMount } from 'svelte';

	let NAME = $state('');

	const messages = $state([{ _id: '1', user: 'Alice', body: 'Good morning!' }]);

	//place mutation hook here

	let newMessageText = $state('');

	onMount(() => {
		NAME = getOrSetFakeName();
		messages.push({ _id: '2', user: NAME, body: 'Beautiful sunrise today' });

		setTimeout(() => {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		}, 0);
	});

	function getOrSetFakeName() {
		const NAME_KEY = 'tutorial_name';
		const name = sessionStorage.getItem(NAME_KEY);

		if (!name) {
			const newName = 'Aisosa';
			sessionStorage.setItem(NAME_KEY, newName);
			return newName;
		}

		return name;
	}

	function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		alert('Mutation has not been implemented');
		newMessageText = '';
	}
</script>

<main class="chat">
	<header>
		<h1>Convex Chat</h1>
		<p>Connected as <strong>{NAME}</strong></p>
	</header>

	{#each messages as message (message._id)}
		<article class={message.user == NAME ? 'message-mine' : ''}>
			<div>{message.user}</div>
			<p>{message.body}</p>
		</article>
	{/each}

	<form {onsubmit}>
		<input type="text" bind:value={newMessageText} placeholder="Write a new message..." />
		<button type="submit" disabled={!newMessageText}>Send</button>
	</form>
</main>
