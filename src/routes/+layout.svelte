<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('the component has mounted');
	});
</script>

<slot />

<div class="hidden" style="display:none">
	<a href="/">home</a>
	<a href="/reentry">reentry</a>
	<a href="/open">open</a>
	<a href="/release">release</a>
	<a href="/refocus">refocus</a>
	<a href="/about">about</a>
	<a href="/terms-of-use">terms-of-use</a>
	<a href="/nudge-bug-terms">nudge-bug-terms</a>
	<a href="/full_tos">full_tos</a>
	<a href="/tos">tos</a>
</div> 
