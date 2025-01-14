<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	import { getCartItems } from '$lib/store.js';
	import { ArrowRight, ArrowLeft, Minus, Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import Featured from '$lib/components/Featured.svelte';

	const { data } = $props<{
		data: import('./$types').PageData;
	}>();

	// State management using runes
	let animate = $state(false);
	let quantity = $state(1);
	let cartLoading = $state(false);
	let currentImageIndex = $state(0);
	let selectedOptions = $state({});

	// Constants
	const MIN_QUANTITY = 1;
	const MAX_QUANTITY = 999;

	// Derived values using runes
	let highlightedImageSrc = $derived(
		data?.body?.product?.images?.edges[currentImageIndex]?.node?.originalSrc
	);
	let isAvailable = $derived(data?.body?.product?.availableForSale ?? false);
	let currentPrice = $derived(
		parseFloat(data?.body?.product?.priceRange?.minVariantPrice?.amount ?? '0')
	);
	let compareAtPrice = $derived(
		parseFloat(data?.body?.product?.variants?.edges[0]?.node?.compareAtPriceV2?.amount ?? '0')
	);
	let isOnSale = $derived(compareAtPrice > 0 && compareAtPrice > currentPrice);
	let discountPercentage = $derived(
		isOnSale ? Math.round(((compareAtPrice - currentPrice) / compareAtPrice) * 100) : 0
	);

	// Format price with currency
	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat('en-AU', {
			style: 'currency',
			currency: 'AUD',
			minimumFractionDigits: 2
		}).format(amount);
	};

	// Initialize selected options
	$effect(() => {
		if (data?.body?.product?.options) {
			selectedOptions = data.body.product.options.reduce(
				(acc, option) => ({
					...acc,
					[option.name]: option.values[0]
				}),
				{}
			);
		}
	});

	// Scroll to top on mount
	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
		animate = true;
	});

	// Quantity management functions
	function decrement() {
		if (quantity > MIN_QUANTITY) {
			quantity--;
		}
	}

	function increment() {
		if (quantity < MAX_QUANTITY) {
			quantity++;
		}
	}

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const newValue = parseInt(input.value);

		quantity = isNaN(newValue)
			? MIN_QUANTITY
			: Math.max(MIN_QUANTITY, Math.min(MAX_QUANTITY, newValue));
	}

	// Image navigation functions
	function changeHighlightedImage(direction: 'next' | 'prev') {
		const imageCount = data?.body?.product?.images?.edges.length || 0;

		if (direction === 'next') {
			currentImageIndex = (currentImageIndex + 1) % imageCount;
		} else {
			currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
		}
	}

	// Cart management
	async function addToCart() {
		if (!isAvailable) return;

		cartLoading = true;

		try {
			const cartId =
				typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartId')) : null;

			const variantId = data.body.product.variants.edges.find((variant) =>
				variant.node.selectedOptions.every(
					(option) => selectedOptions[option.name] === option.value
				)
			)?.node.id;

			await fetch('/cart.json', {
				method: 'PATCH',
				body: JSON.stringify({ cartId, variantId })
			});

			await getCartItems();
		} catch (error) {
			console.error('Error adding to cart:', error);
		} finally {
			cartLoading = false;
		}
	}

	function handleKeyDown(event: KeyboardEvent, action: () => void) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			action();
		}
	}

	let api = $state<CarouselAPI>();
	const count = $derived(api ? api.scrollSnapList().length : 0);
	let current = $state(0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});
</script>

<div>
	{#if data.body.product}
		<div class="mx-auto flex flex-col px-4 pt-12 lg:hidden">
			<h1 class="mb-0 font-sans text-2xl tracking-tight">
				{data.body.product.title}
			</h1>

			<div class="mt-2">
				<h2 class="sr-only">Product Price</h2>
				<div class="flex items-baseline gap-2">
					{#if isOnSale}
						<span class=" text-text/60 font-sans text-xl font-bold text-destructive line-through">
							{formatPrice(compareAtPrice)}
						</span>
						<p class=" text-success mb-0 font-sans text-2xl font-bold">
							{formatPrice(currentPrice)}
						</p>
					{:else}
						<p class="mb-0 font-sans text-2xl font-bold">
							{formatPrice(currentPrice)}
						</p>
					{/if}
				</div>
			</div>

			<p class="mt-2 text-sm italic">
				Tax included. <a href="/legal#shipping" class="underline hover:opacity-80">Shipping</a>
				calculated at checkout.
			</p>
		</div>
		<div
			class="mx-auto grid grid-cols-1 overflow-hidden px-4 pt-4 lg:grid-cols-5 lg:gap-20 lg:px-10 lg:py-12 lg:pb-24 xl:px-20"
		>
			<div class="col-span-2 flex w-full flex-col">
				{#key highlightedImageSrc}
					<div class="relative">
						<!-- Status Badges -->
						<div class="absolute left-4 top-4 z-10 flex flex-col gap-2">
							{#if !isAvailable}
								<Badge variant="destructive" class="text-md bg-destructive text-white"
									>Out of Stock</Badge
								>
							{/if}
							{#if isOnSale && isAvailable}
								<Badge variant="secondary" class="text-md bg-accent text-white">
									Save {discountPercentage}%
								</Badge>
							{/if}
						</div>

						<Carousel.Root
							setApi={(emblaApi) => (api = emblaApi)}
							class="w-full rounded-3xl"
							opts={{ align: 'start', loop: true }}
						>
							<Carousel.Content class=" rounded-3xl ">
								{#each data.body.product.images.edges as variant, index}
									<Carousel.Item>
										<div class="aspect-square w-full overflow-hidden rounded-3xl bg-gray-200">
											<img
												loading="eager"
												src={variant.node.originalSrc}
												alt={data.body.product.title}
												class="h-full w-full object-cover object-center transition-transform duration-300
                                       {!isAvailable
													? 'opacity-50 saturate-50'
													: 'group-hover:scale-105'}"
											/>
										</div>
									</Carousel.Item>
								{/each}
							</Carousel.Content>
						</Carousel.Root>
					</div>
				{/key}
				<div class="mt-4 flex gap-4">
					{#each data.body.product.images.edges as variant, index}
						<button
							aria-label="gallery-select"
							onclick={() => api.scrollTo(index)}
							class="h-full w-1/4 bg-white"
						>
							<img
								loading="eager"
								src={variant.node.originalSrc}
								alt={data.body.product.title}
								class="h-full w-full rounded-2xl object-cover object-center group-hover:opacity-75"
							/>
						</button>
					{/each}
				</div>
			</div>
			<div class="col-span-3 h-full w-full">
				<div class="mb-8">
					<div class="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
						<div class="hidden flex-col lg:flex">
							<h1 class="mb-0 font-sans text-3xl tracking-tight">
								{data.body.product.title}
							</h1>

							<div class="mt-4">
								<h2 class="sr-only">Product Price</h2>
								<div class="flex items-baseline gap-2">
									{#if isOnSale}
										<span
											class=" text-text/60 font-sans text-xl font-bold text-destructive line-through"
										>
											{formatPrice(compareAtPrice)}
										</span>
										<p class=" text-success font-sans text-3xl font-bold">
											{formatPrice(currentPrice)}
										</p>
									{:else}
										<p class="font-sans text-3xl font-bold">
											{formatPrice(currentPrice)}
										</p>
									{/if}
								</div>
							</div>

							<p class="mt-2 text-sm italic">
								Tax included. <a href="/legal#shipping" class="underline hover:opacity-80"
									>Shipping</a
								>
								calculated at checkout.
							</p>
						</div>
						<div class="flex items-center gap-4 lg:my-10">
							{#if isAvailable}
								<div
									class="flex h-10 w-32 items-center rounded-full border border-input bg-background"
								>
									<Button
										variant="ghost"
										size="icon"
										class="h-full px-2 hover:bg-transparent"
										on:click={decrement}
										disabled={quantity <= MIN_QUANTITY}
									>
										<Minus class="h-4 w-4" />
										<span class="sr-only">Decrease quantity</span>
									</Button>

									<Input
										type="number"
										inputmode="numeric"
										class="h-full w-12 border-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										value={quantity}
										min={MIN_QUANTITY}
										max={MAX_QUANTITY}
										on:input={handleInput}
									/>

									<Button
										variant="ghost"
										size="icon"
										class="h-full px-2 hover:bg-transparent"
										on:click={increment}
										disabled={quantity >= MAX_QUANTITY}
									>
										<Plus class="h-4 w-4" />
										<span class="sr-only">Increase quantity</span>
									</Button>
								</div>

								<Button on:click={addToCart} class="rounded-full font-semibold">
									{cartLoading ? 'Adding...' : 'ADD TO CART'}
								</Button>
							{:else}
								<Button disabled class="rounded-full font-semibold opacity-50">OUT OF STOCK</Button>
							{/if}
						</div>
					</div>
				</div>

				<div class="description flex flex-col gap-2 font-sans font-normal">
					{@html data.body.product.descriptionHtml}
				</div>
			</div>
		</div>
	{/if}
</div>

<section class="px-4 pt-12 lg:px-10 xl:px-20">
	<div class="border-t-2 border-muted pt-12">
		<h2
			class="font-heading mx-auto mb-0 scroll-m-20 text-center text-2xl font-medium tracking-tight transition-colors first:mt-0 lg:text-3xl"
		>
			You might also like
		</h2>
		<Featured title="You might also like" products={data.body.featuredProducts} />
	</div>
</section>

<style>
	.description :global(a) {
		@apply text-foreground/80 underline;
	}
</style>
