<script>
	import { Badge } from '$lib/components/ui/badge';

	/** @type {string} */
	export let title = '';
	/** @type {string} */
	export let imageSrc = '';
	/** @type {string} */
	export let price = '';
	/** @type {string | null} */
	export let compareAtPrice = null;
	/** @type {string} */
	export let currencyCode = 'USD';
	/** @type {string} */
	export let description = '';
	/** @type {string[]} */
	export let tags = [];
	/** @type {string} */
	export let category = '';
	/** @type {string} */
	export let weight = '';
	/** @type {boolean} */
	export let inStock = true;
	/** @type {string} */
	export let href = '';
	/** @type {'lazy' | 'eager'} */
	export let priority = 'lazy';

	// Calculate if item is on sale
	$: isOnSale = compareAtPrice && parseFloat(compareAtPrice) > parseFloat(price);

	// Calculate discount percentage if on sale
	$: discountPercentage = isOnSale
		? Math.round(
				((parseFloat(compareAtPrice) - parseFloat(price)) / parseFloat(compareAtPrice)) * 100
			)
		: 0;

	// Format price with currency
	const formatPrice = (amount) => {
		return new Intl.NumberFormat('en-AU', {
			style: 'currency',
			currency: currencyCode,
			minimumFractionDigits: 2
		}).format(parseFloat(amount));
	};
</script>

<a {href} data-sveltekit-prefetch class="group relative flex flex-col">
	<!-- Stock Status and Sale Badges -->
	<div class="absolute left-4 top-4 z-10 flex flex-col gap-2">
		{#if !inStock}
			<Badge variant="destructive" class="bg-destructive text-sm text-white">Out of Stock</Badge>
		{/if}
		{#if isOnSale && inStock}
			<Badge variant="secondary" class="bg-accent text-sm text-white"
				>Save {discountPercentage}%</Badge
			>
		{/if}
	</div>

	<!-- Image container -->
	<div class="bg-warm-stone/20 aspect-square w-full overflow-hidden rounded-3xl">
		<img
			loading={priority}
			src={imageSrc}
			alt={title}
			class="h-full w-full object-cover object-center transition-transform duration-300
                   {!inStock ? 'opacity-50 saturate-50' : 'group-hover:scale-105'}"
		/>
	</div>

	<!-- Content container -->
	<div class="mt-4 flex flex-col px-2">
		<!-- Category and Price row -->
		<div class="text-text/80 flex items-baseline justify-between">
			<span class="text-sm">{category}</span>
			<div class="flex items-baseline gap-2">
				{#if isOnSale}
					<span class="text-text/60 text-sm text-destructive line-through"
						>{formatPrice(compareAtPrice)}</span
					>
					<span class="text-success text-lg font-bold">{formatPrice(price)}</span>
				{:else}
					<span class="text-lg font-bold">{formatPrice(price)}</span>
				{/if}
			</div>
		</div>

		<!-- Title -->
		<h3 class="text-deep-forest mt-1 font-sans text-lg font-bold">{title}</h3>

		<!-- Description -->
		{#if description}
			<p class="text-text/80 mt-1 line-clamp-2 text-sm">{description}</p>
		{/if}

		<!-- Weight info if needed -->
		{#if weight}
			<span class="text-text/60 mt-1 text-sm">({weight})</span>
		{/if}
	</div>
</a>
