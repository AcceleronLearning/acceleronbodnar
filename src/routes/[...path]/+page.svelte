<script lang="ts">
	import { getContent, RenderContent, getBuilderSearchParams, convertSearchParamsToQueryObject, isPreviewing } from '@builder.io/sdk-svelte';
	//import { isPreviewing, getContent, RenderContent, getBuilderSearchParams, convertSearchParamsToQueryObject } from '@builder.io/sdk-svelte';
	//import { page } from '$app/stores';

	import ProjectBlock from '../../lib/ProjectBlockComponent.svelte';
	import ContactForm from '../../lib/ContactForm.svelte';
	// import Header from '../../lib/Header.svelte'
	import Footer from '../../lib/Footer.svelte';
	import Spinner from '../../lib/Spinner.svelte';
	import { page } from '$app/stores';

	import * as BuilderSDK from '@builder.io/sdk-svelte';
	import { set_data_contenteditable_dev } from 'svelte/internal';

	const BUILDER_PUBLIC_API_KEY = `cf3837b112bb44ff839785f693ff995c`

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
		}
	];

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;

	// we want to show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing();

	//console.log(data, $page.url, set_data_contenteditable_dev)
</script>


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