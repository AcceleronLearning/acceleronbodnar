<script context="module">
	import 'prismjs';
	export const load = async ({ url }) => {
		const isIndex = url.pathname === '/blog/' || url.pathname === '/blog';
		return {
			props: {
				key: url.pathname
			}
		};
	};
</script>

<script>
	export let key;

</script>

<slot />
