<script>
	import Featured from '$lib/components/Featured.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Icons from '$lib/components/home/Icons.svelte';
	import Tallow from '$lib/components/home/Tallow.svelte';
	import Categories from '$lib/components/home/Categories.svelte';
	import Integrity from '$lib/components/home/Integrity.svelte';
	import Reviews from '$lib/components/home/Reviews.svelte';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();

	let featured = $derived(data.products[0]?.node?.products?.edges);
</script>

<Hero />

<section class=" px-4 py-12 lg:px-10 lg:py-20 xl:px-20">
	<div class="flex flex-col items-center justify-center border-b-2 border-muted lg:pb-8">
		<h4 class="mb-2 font-sans text-lg font-bold">TASSIE TALLOW</h4>
		<h2 class=" text-center text-3xl lg:text-5xl">
			Welcome to the home of <span class="block underline lg:inline-block">good fat</span>
		</h2>
		<Featured products={featured} />
	</div>
</section>

<Icons />
<Tallow />
<Integrity />
<Reviews />
<Categories />
