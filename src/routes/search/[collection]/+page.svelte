<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	import { products, sortedProducts } from '$lib/store';
	import * as Pagination from '$lib/components/ui/pagination';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import ProductSort from '$lib/components/shop/ProductSort.svelte';
	import ProductSearch from '$lib/components/shop/ProductSearch.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
	let collection = $state();
	let search = $derived($page.url.searchParams.get('q'));

	$effect(() => {
		data.body.collections.forEach((d) => {
			if (d.node.handle === $page?.params?.collection) {
				collection = d.node;
				$products = d.node.products.edges;
			}
		});
	});

	const itemsPerPage = 24;

	let displayedProducts = $derived(
		search
			? $sortedProducts.filter((item) => {
					return item.node.title.toLowerCase().includes(search.toLowerCase());
				})
			: $sortedProducts
	);

	function handlePageChange() {
		setTimeout(() => {
			// Try both window and documentElement scroll
			window.scrollTo({ top: 0, behavior: 'smooth' });
			document.documentElement.scrollTo({ top: 0 });

			// Fallback to body scroll if needed
			document.body.scrollIntoView({ behavior: 'smooth' });

			// Optional: Add logging for debugging
			console.log('Page change scroll executed');
		}, 0);
	}

	const categories = [
		{ title: 'All Products', link: '/search' },
		{ title: 'Balm', link: '/search?q=balm' },
		{ title: 'Beef Tallow', link: '/search?q=beef tallow' },
		{ title: 'Crackling', link: '/search?q=crackling' },
		{ title: 'Duck Fat', link: '/search?q=duck fat' },
		{ title: 'Ghee', link: '/search?q=ghee' },
		{ title: 'Glassware', link: '/search?q=glass jar' },
		{ title: 'Moisturiser', link: '/search?q=moisturiser' },
		{ title: 'Paste', link: '/search?q=paste' },
		{ title: 'Soap', link: '/search?q=soap' },
		{ title: 'Tassie K9', link: '/search?q=tassie k9' },
		{ title: 'Gift Card', link: '/search?q=gift card' }
	];

	// Define collection-specific content
	const collectionContent = {
		'good-fat': {
			title: 'Cooking Fats',
			description: `Tallow is suet (kidney and loin) fat. Suet is a highly vascularised and nutrient dense
			product. It is one of nature's richest sources of conjugated linoleic acid (CLA). It
			is typically much firmer than body fat at room temperature.`,
			categories: [
				{ title: 'Beef Tallow', link: '/search/good-fat?q=beef+tallow' },
				{ title: 'Beef Dripping', link: '/search/good-fat?q=beef+dripping' },
				{ title: 'Duck Fat', link: '/search/good-fat?q=duck+fat' },
				{ title: 'Lamb Tallow', link: '/search/good-fat?q=lamb+tallow' },
				{ title: 'Lamb Dripping', link: '/search/good-fat?q=lamb+dripping' },
				{ title: 'Ghee', link: '/search/good-fat?q=ghee' },
				{ title: 'Lard', link: '/search/good-fat?q=lard' }
				// Add more categories specific to good fat
			]
		},
		skincare: {
			title: 'Natural Skincare',
			description: `We hand make our skincare range in small batches for optimal freshness and nutrient density.
Our skin care range uses natural fats and ingredients that closely mimics the fats and oils found naturally in healthy, youthful skin. `,
			categories: [
				{ title: 'Balm', link: '/search/skincare?q=balm' },
				{ title: 'Moisturiser', link: '/search/skincare?q=moisturiser' },
				{ title: 'Soap', link: '/search/skincare?q=soap' }
				// Add more categories specific to skincare
			]
		},
		'snacks-treats': {
			title: 'Tasmanian Delicacies',
			description: `A showcase of the products you would find at any of our local farmer's markets in Tasmania. These local businesses and farms have quality products and tasty treats and we love supporting them.
These products are to complement your cooking with Tassie Tallow fats, snacks for dietary requirements, and most importantly they're to highlight the wonderful lifestyle & produce that Tasmanian locals are privileged to enjoy.`,
			categories: [
				{ title: 'Crackling', link: '/search/snacks-treats?q=crackling' },
				{ title: 'Paste', link: '/search/snacks-treats?q=paste' },
				{ title: 'Salt', link: '/search/snacks-treats?q=salt' },
				{ title: 'Snack', link: '/search/snacks-treats?q=snack' },
				{ title: 'Spice', link: '/search/snacks-treats?q=spice' },
				{ title: 'Spread', link: '/search/snacks-treats?q=spread' }
				// Add more categories specific to snacks and pantry
			]
		},
		'tassie-k9': {
			title: 'Tassie K9',
			description: `Premium Tasmanian made dog treats, majorly sourced from our local farmers with the occasional input from interstate ones, so 100% Australian produce is used for guaranteed quality.

All of our treats are tested on animals and we can confirm they go down... well, a treat!
Explore the range to find something that suits your positive reinforcement needs.

We look forward to providing an all-natural, no-additives option to your pets for their well-being and our peace of mind.`,
			categories: []
		}
	};

	// Get current collection from URL params
	let currentCollection = $derived($page?.params?.collection);

	// Get the content for the current collection
	let activeContent = $derived(
		collectionContent[currentCollection] || {
			title: 'Shop all the good stuff',
			description: '',
			categories: categories // Your default categories
		}
	);
</script>

<section class="px-4 py-8 lg:px-10 xl:px-20">
	<div class="flex flex-col items-center justify-center border-b-2 border-muted pb-8">
		<h4 class="mb-0 font-sans text-lg font-bold">TASSIE TALLOW</h4>
		<h2 class="mt-2 text-center text-3xl lg:text-4xl">{activeContent.title}</h2>
		{#if activeContent.description}
			<p class="mb-2 mt-2 max-w-2xl text-center text-muted-foreground">
				{activeContent.description}
			</p>
		{/if}
		<div class="w-full overflow-hidden">
			<div
				class="mx-auto mt-6 flex max-w-3xl items-center gap-3 overflow-x-auto px-4 text-sm lg:flex-wrap lg:justify-center lg:overflow-x-visible"
			>
				{#each activeContent.categories as category}
					<a
						class="flex-none rounded-full border border-secondary px-4 py-2 text-sm text-secondary hover:bg-secondary/5 hover:underline lg:flex-initial {search?.toLowerCase() ===
						category.link.split('q=')[1]?.toLowerCase()
							? 'bg-secondary/5 underline'
							: ''}"
						href={category.link}>{category.title}</a
					>
				{/each}
			</div>
		</div>
	</div>
</section>

<div class="mx-auto px-4 pb-12 lg:px-10 xl:px-20">
	<div class="grid w-full grid-cols-2 place-items-end justify-between lg:flex">
		<ProductSearch />
		<ProductSort />
	</div>
	<Pagination.Root
		count={displayedProducts.length}
		perPage={itemsPerPage}
		onPageChange={handlePageChange}
	>
		{#snippet children({ pages, currentPage })}
			<ul class="grid auto-rows-min gap-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
				{#each displayedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as product (product.node.id)}
					<ProductCard
						title={product.node.title}
						description={product.node.description}
						category={product.node.productType ||
							product.node.collections?.edges[0]?.node.title ||
							''}
						tags={product.node.tags}
						weight={product.node.weight}
						href={`/product/${product.node.handle}`}
						price={product.node.priceRange.minVariantPrice.amount}
						compareAtPrice={product.node.variants.edges[0]?.node.compareAtPriceV2?.amount}
						currencyCode={product.node.priceRange.maxVariantPrice.currencyCode}
						imageSrc={product.node.images.edges[0]?.node.originalSrc}
						inStock={product.node.availableForSale}
					/>
				{:else}
					<div class="flex flex-col min-h-screen w-full col-span-4">
						<p class="text-center lg:text-xl font-heading">Your search did not yield any results</p>
						<div class="flex flex-col lg:flex-row justify-center gap-2">
							<a
								href="/search"
								class="mx-auto mt-4 flex w-60 items-center justify-center rounded-full bg-primary px-6 py-3 text-center font-bold text-white transition-all hover:bg-primary/80 lg:mx-0"
							>
								SHOP ALL</a
							>
							<a
								href="/blog"
								class="mx-auto mt-4 flex w-60 items-center justify-center rounded-full px-6 py-3 text-center font-bold text-secondary transition-all border border-secondary hover:bg-secondary/10 lg:mx-0"
							>
								EXPLORE OTHER TOPICS</a
							>
						</div>
					</div>
				{/each}
			</ul>

			{#if pages.length > 1}
				<div class="mt-8">
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton class="hover:bg-muted">
								<ChevronLeft class="size-4" />
								<span class="hidden sm:block">Previous</span>
							</Pagination.PrevButton>
						</Pagination.Item>
						{#each pages as page (page.key)}
							{#if page.type === 'ellipsis'}
								<Pagination.Item>
									<Pagination.Ellipsis />
								</Pagination.Item>
							{:else}
								<Pagination.Item>
									<Pagination.Link
										class="hover:bg-muted"
										{page}
										isActive={currentPage === page.value}
									>
										{page.value}
									</Pagination.Link>
								</Pagination.Item>
							{/if}
						{/each}
						<Pagination.Item>
							<Pagination.NextButton class="hover:bg-muted">
								<span class="hidden sm:block">Next</span>
								<ChevronRight class="size-4" />
							</Pagination.NextButton>
						</Pagination.Item>
					</Pagination.Content>
				</div>
			{/if}
		{/snippet}
	</Pagination.Root>
</div>
