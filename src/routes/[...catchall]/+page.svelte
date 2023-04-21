<script>
	import Counter from '../../lib/Counter.svelte';
	// import Tile from '../../lib/Tile.svelte';
	import Portfolio from '../../lib/Portfolio.svelte';
	import ProjectBlock from '../../lib/ProjectBlockComponent.svelte';
	import ContactForm from '../../lib/ContactForm.svelte';
	// import Header from '../../lib/Header.svelte'
	import Footer from '../../lib/Footer.svelte';
	import Spinner from '../../lib/Spinner.svelte';
	import { isPreviewing, RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '../../apiKey';

	// Create an array of your custom components and their properties
	const CUSTOM_COMPONENTS = [
		{
			component: Spinner,
			name: 'Spinner',
			inputs: []
		},
		{
			component: ProjectBlock,
			name: 'ProjectBlock',
			inputs: [
				{
					name: 'title',
					type: 'string',
					defaultValue: 'Career | Financial | Legal | Wellness <br />for Everyone'
				}
			]
		},
		{
			component: ContactForm,
			name: 'ContactForm',
			inputs: [
			]
		},
		{
			component: Footer,
			name: 'Footer',
			inputs: [
			]
		},
	];

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;

	// we want to show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
	<!-- <Spinner></Spinner> -->
	<!-- <div>page Title: {data.content?.data?.title || 'Unpublished'}</div> -->
	<title></title>
</svelte:head>

<main>
	<!-- <div class="loader">
		<div class="spinner">
			<div class="double-bounce1" />
			<div class="double-bounce2" />
		</div>
	</div> -->
	<div class="nav-container" />
	<div class="main-container">

		<!-- <a href="index.html#" id="home" class="in-page-link" /> -->
		<div class="row">
			{#if canShowContent}
			<RenderContent
				model="page"
				content={data.content}
				apiKey={BUILDER_PUBLIC_API_KEY}
				customComponents={CUSTOM_COMPONENTS}
			/>
			{:else}
				<!-- <Portfolio /> -->
			{/if}
<!-- 			
			<section class="aq-block image-divider overlay">
				<div class="background-image-holder parallax-background">
					
					<img
						class="background-image"
						alt="Background Image"
						src="wp-content/uploads/2019/10/comtrijpg.jpg"
					/>
				</div>

				<div class="container">
					<div class="row">
					
						
					</div>
				</div>
			</section> -->
			<!-- <ContactForm /> -->
		</div>
	</div>
	<!-- <Footer /> -->
</main>

<!-- <style>
	h1 {
		width: 100%;
		font-size: 2rem;
		text-align: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style> -->
