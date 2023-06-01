<script>
	/** @type {import('./$types').LayoutData} */
	// import { LayoutLoad } from './../../.svelte-kit/types/src/routes/$types.d.ts';
	import jQuery from 'jquery'
	import { onMount } from 'svelte';
	//const jq = window.$;
	import { page } from '$app/stores';
	import { assets, base } from '$app/paths';

	console.log('testing...');

	onMount(async () => {
  	
		console.log('the component has mounted');
	});
</script>

<svelte:head>
	<title />
	<link href="/pivot-theme/css/flexslider.min.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/pivot-theme/css/line-icons.min.css" rel="stylesheet" type="text/css" media="all" />
	<link
		href="/pivot-theme/css/elegant-icons.min.css"
		rel="stylesheet"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-body-font-css"
		href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C400%2C300%2C600%2C700&#038"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-heading-font-css"
		href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C400%2C300%2C600%2C700&#038"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-body-font-css"
		href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C400%2C300%2C600%2C700&amp"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-heading-font-css"
		href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C400%2C300%2C600%2C700&amp"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-alt-font-css"
		href="https://fonts.googleapis.com/css?family=Raleway%3A700&amp"
		type="text/css"
		media="all"
	/>

	<!-- <link rel='stylesheet' id='elegant-icons-css' href='/wp-content/themes/pivot/style/css/elegant-icons.min.css' type='text/css' media='all' /> -->
	<link href="/pivot-theme/css/lightbox.min.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/pivot-theme/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/pivot-theme/css/theme.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/pivot-theme/css/custom.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/wp-content/themes/pivot/style.css" rel="stylesheet" type="text/css" media="all" />
	<link
		href="/pivot-theme/css/acceleronlearning.theme.css"
		rel="stylesheet"
		type="text/css"
		media="all"
	/>

	<!--[if gte IE 9]>
				<link rel="stylesheet" type="text/css" href="/pivot-theme/css/ie9.css" />
	<![endif]-->
	<link
		rel="stylesheet"
		id="wp-block-library-css"
		href="/wp-includes/css/dist/block-library/style.min.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="global-styles-inline-css"
		href="/pivot-theme/css/acceleronlearning.theme.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="global-styles-inline-css"
		href="/pivot-theme/css/custom.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="contact-form-7-css"
		href="/wp-content/plugins/contact-form-7/includes/css/styles.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="usa-html5-map-style-css"
		href="/wp-content/plugins/usahtmlmap/static/css/map.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="inbound-shortcodes-css"
		href="/wp-content/plugins/landing-pages/shared/shortcodes/css/frontend-render.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="bootstrap-css"
		href="/wp-content/themes/pivot/style/css/bootstrap.min.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="flexslider-css"
		href="/wp-content/plugins/js_composer/assets/lib/flexslider/flexslider.min.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="line-icons-css"
		href="/wp-content/themes/pivot/style/css/line-icons.min.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="elegant-icons-css"
		href="/wp-content/themes/pivot/style/css/elegant-icons.min.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="lightbox-css"
		href="/wp-content/themes/pivot/style/css/lightbox.min.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-theme-styles-css"
		href="/wp-content/uploads/wp-less/pivot/style/css/theme-3ba3c33c02.css"
		type="text/css"
		media="all"
	/>
	<link
		href="/wp-content/uploads/wp-less/pivot/style/css/theme-3ba3c33c02.css"
		rel="stylesheet"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="ebor-style-css"
		href="/wp-content/themes/acceleron/style.css"
		type="text/css"
		media="all"
	/>
	<link
		rel="stylesheet"
		id="usa-html5-map-style-css"
		href="/wp-content/plugins/usahtmlmap/static/css/map.css"
		type="text/css"
		media="all"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700%7CRaleway:700"
		rel="stylesheet"
		type="text/css"
	/>

</svelte:head>

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





<style is:global unsafe:inline id="ebor-style-inline-css" type="text/css">
	.filters li {
		font-size: 14px;
		font-weight: bold;
		text-shadow: 2px 1px #273e47;
	}

	.builder-pixel-5gowhz98kxg {
		display: none;
	}

	.hidden {
		display: none;
	}

	.filters li {
		font-size: 14px;
		font-weight: bold;
		text-shadow: 2px 1px #273e47;
	}
</style>
