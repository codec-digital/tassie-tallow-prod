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

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
	});

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
	let search = $derived($page.url.searchParams.get('q'));

	const itemsPerPage = 24;

	$effect(() => {
		if (data.body?.allProducts) {
			$products = data.body.allProducts.edges;
		}
	});

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
</script>

<section class="px-4 py-8 lg:px-10 xl:px-20">
	<div class="flex flex-col items-center justify-center border-b-2 border-muted pb-8">
		<h4 class="mb-0 font-sans text-lg font-bold">TASSIE TALLOW</h4>
		<h2 class="mt-2 text-center text-3xl lg:text-4xl">Shop all the good stuff</h2>
		<div class="w-full overflow-hidden">
			<div
				class="mx-auto mt-6 flex max-w-3xl items-center gap-3 overflow-x-auto px-4 text-sm lg:flex-wrap lg:justify-center lg:overflow-x-visible"
			>
				{#each categories as category}
					<a
						class="flex-none rounded-full border border-secondary px-4 py-2 text-sm text-secondary hover:bg-secondary/5 hover:underline lg:flex-initial {category.title ===
						'All Products'
							? !search
								? 'bg-secondary/5 underline'
								: ''
							: search?.toLowerCase() === category.link.split('=')[1]?.toLowerCase()
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
						variantId={product.node.variants.edges[0]?.node.id}
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
										class="rounded-full hover:bg-muted"
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
