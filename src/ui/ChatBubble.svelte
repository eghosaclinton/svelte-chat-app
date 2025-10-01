<script lang="ts">
	const { message, NAME } = $props();
</script>

<article class={message.user == NAME ? 'message-mine' : ''}>
	<div>{message.user}</div>
	<p>{message.body}</p>
</article>
