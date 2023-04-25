<script lang="ts">
	import { getContent, RenderContent, getBuilderSearchParams, convertSearchParamsToQueryObject } from '@builder.io/sdk-svelte';
	//import { isPreviewing, getContent, RenderContent, getBuilderSearchParams, convertSearchParamsToQueryObject } from '@builder.io/sdk-svelte';
	//import { page } from '$app/stores';


	import Counter from '../../lib/Counter.svelte';
	// import Tile from '../../lib/Tile.svelte';
	import Portfolio from '../../lib/Portfolio.svelte';
	import ProjectBlock from '../../lib/ProjectBlockComponent.svelte';
	import ContactForm from '../../lib/ContactForm.svelte';
	// import Header from '../../lib/Header.svelte'
	import Footer from '../../lib/Footer.svelte';
	import Spinner from '../../lib/Spinner.svelte';


	import { page } from '$app/stores';
	//import { variables } from '$lib/variables';
	//import CustomComponents from '../components'

	import * as BuilderSDK from '@builder.io/sdk-svelte';
	import { set_data_contenteditable_dev } from 'svelte/internal';

	const BUILDER_PUBLIC_API_KEY = `cf3837b112bb44ff839785f693ff995c`

	const CUSTOM_COMPONENTS = [
	];

	let content: any = undefined;
	let canShowContent = false;
	const fetch = async () => {
		content = await BuilderSDK.getContent({
			model: 'page',
			apiKey: 'cf3837b112bb44ff839785f693ff995c',
			options: BuilderSDK.getBuilderSearchParams(
				BuilderSDK.convertSearchParamsToQueryObject($page.url.searchParams)
			),
			userAttributes: {
				urlPath: $page.url.pathname
			}
		});
		canShowContent = content || BuilderSDK.isEditing();
	};

	fetch();

	export let data;

	console.log(data, set_data_contenteditable_dev)
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
				{content}
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

