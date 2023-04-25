import { getContent, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '../../apiKey';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, url, route, params}) {
	// fetch your Builder content
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		//options: getBuilderSearchParams(url.searchParams),
		userAttributes: {
			urlPath: url.pathname || '/'
		}
	});

	console.log(`/${params.path}`)
	return { content };
}