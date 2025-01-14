<script>
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Plus, Minus, Loader2, ShoppingCart } from 'lucide-svelte';
	import { cartItems, isLoading, refreshCart } from '$lib/utils/cartStore';
	import { fade } from 'svelte/transition';
	import { toast } from 'svelte-sonner';

	const {
		title = '',
		imageSrc = '',
		price = '',
		compareAtPrice = null,
		currencyCode = 'AUD',
		description = '',
		tags = [],
		category = '',
		weight = '',
		inStock = true,
		href = '',
		priority = 'lazy',
		variantId = ''
	} = $props();

	// State management with runes
	let showQuickAdd = $state(false);
	let quantity = $state(1);
	let loading = $state(false);
	let isMobile = $state(false);

	// Check for mobile on mount and window resize
	$effect(() => {
		function checkMobile() {
			isMobile = window.innerWidth < 1024;
		}

		if (typeof window !== 'undefined') {
			checkMobile();
			window.addEventListener('resize', checkMobile);
			return () => window.removeEventListener('resize', checkMobile);
		}
	});

	// Constants
	const MIN_QUANTITY = 1;
	const MAX_QUANTITY = 999;

	// Derived values with runes
	let isOnSale = $derived(compareAtPrice && parseFloat(compareAtPrice) > parseFloat(price));
	let discountPercentage = $derived(
		isOnSale
			? Math.round(
					((parseFloat(compareAtPrice) - parseFloat(price)) / parseFloat(compareAtPrice)) * 100
				)
			: 0
	);

	const formatPrice = (amount) => {
		return new Intl.NumberFormat('en-AU', {
			style: 'currency',
			currency: currencyCode,
			minimumFractionDigits: 2
		}).format(parseFloat(amount));
	};

	function increment(event) {
		event.preventDefault();
		event.stopPropagation();
		if (quantity < MAX_QUANTITY) quantity++;
	}

	function decrement(event) {
		event.preventDefault();
		event.stopPropagation();
		if (quantity > MIN_QUANTITY) quantity--;
	}

	function toggleQuickAdd(event) {
		event.preventDefault();
		event.stopPropagation();
		if (isMobile) {
			showQuickAdd = !showQuickAdd;
		}
	}

	async function handleQuickAdd(event) {
		event.preventDefault();
		event.stopPropagation();
		if (!inStock) return;
		loading = true;

		try {
			const cartId =
				typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartId')) : null;

			await fetch('/cart.json', {
				method: 'PATCH',
				body: JSON.stringify({
					cartId,
					variantId,
					quantity
				})
			});

			await refreshCart();
			toast.success('Added to cart', {
				description: `${title}`,
				action: {
					label: 'Dismiss',
					onClick: () => console.info('Undo')
				}
			});
			showQuickAdd = false;
			quantity = 1;
		} catch (error) {
			console.error('Error adding to cart:', error);
		} finally {
			loading = false;
		}
	}

	// Close quick add if clicked outside
	function handleClickOutside(event) {
		if (!isMobile) return; // Only handle click outside on mobile
		const quickAddControl = event.target.closest('.quick-add-control');

		if (!quickAddControl && showQuickAdd) {
			showQuickAdd = false;
			quantity = 1;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

<div class="group relative flex flex-col">
	<a {href} data-sveltekit-prefetch class="flex flex-col">
		<!-- Stock Status and Sale Badges -->
		<div class="absolute left-4 top-4 z-10 flex flex-col gap-2">
			{#if !inStock}
				<Badge variant="destructive" class="bg-destructive text-sm text-white">Out of Stock</Badge>
			{/if}
			{#if isOnSale && inStock}
				<Badge variant="secondary" class="bg-accent text-sm text-white">
					Save {discountPercentage}%
				</Badge>
			{/if}
		</div>

		<!-- Image container -->
		<div class="relative aspect-square w-full overflow-hidden rounded-3xl bg-muted/20">
			<img
				loading={priority}
				src={imageSrc}
				alt={title}
				class="h-full w-full object-cover object-center transition-transform duration-300
                       {!inStock ? 'opacity-50 saturate-50' : 'group-hover:scale-105'}"
			/>
			<!-- Quick Add Controls -->
			{#if inStock}
				<div
					class="quick-add-control absolute bottom-4 right-4 z-20"
					onmouseenter={() => !isMobile && (showQuickAdd = true)}
					onmouseleave={() => !isMobile && (showQuickAdd = false)}
					onclick={toggleQuickAdd}
				>
					<div class="quick-add-wrapper relative">
						<div
							class="flex h-10 items-center justify-end rounded-full bg-white shadow-lg transition-[width] duration-300 ease-out"
							class:expanded={showQuickAdd}
						>
							<div class="quick-add-content-wrapper relative">
								{#if showQuickAdd}
									<div
										class="quick-add-content absolute right-2 top-1/2 flex -translate-y-1/2 items-center"
										in:fade={{ duration: 150, delay: 150 }}
										out:fade={{ duration: 75 }}
									>
										<Button
											variant="ghost"
											size="icon"
											class="h-8 w-8 rounded-full hover:bg-muted/60"
											onclick={decrement}
											disabled={quantity <= MIN_QUANTITY || loading}
										>
											<Minus class="h-4 w-4" />
										</Button>
										<span class="w-8 text-center font-medium">{quantity}</span>
										<Button
											variant="ghost"
											size="icon"
											class="h-8 w-8 rounded-full hover:bg-muted/60"
											onclick={increment}
											disabled={quantity >= MAX_QUANTITY || loading}
										>
											<Plus class="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											class="ml-2 h-8 w-8 rounded-full hover:bg-muted/60"
											onclick={handleQuickAdd}
											disabled={loading}
										>
											{#if loading}
												<Loader2 class="h-4 w-4 animate-spin" />
											{:else}
												<ShoppingCart class="h-4 w-4" />
											{/if}
										</Button>
									</div>
								{/if}
							</div>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300"
								class:rotate={showQuickAdd}
							>
								<Plus class="h-5 w-5" />
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Content container -->
		<div class="mt-4 flex flex-col px-2">
			<div class="flex items-baseline justify-between text-muted-foreground">
				<span class="text-sm">{category}</span>
				<div class="flex items-baseline gap-2">
					{#if isOnSale}
						<span class="text-sm text-destructive line-through">
							{formatPrice(compareAtPrice)}
						</span>
						<span class="text-success text-lg font-bold">{formatPrice(price)}</span>
					{:else}
						<span class="text-lg font-bold">{formatPrice(price)}</span>
					{/if}
				</div>
			</div>

			<h3 class="mt-1 font-sans text-lg font-bold text-foreground">{title}</h3>

			{#if description}
				<p class="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
			{/if}

			{#if weight}
				<span class="mt-1 text-sm text-muted-foreground">({weight})</span>
			{/if}
		</div>
	</a>
</div>

<style lang="postcss">
	.quick-add-wrapper {
		--expand-width: 12rem;
	}

	.expanded {
		width: var(--expand-width) !important;
	}

	.quick-add-wrapper > div {
		width: 2.5rem;
	}

	.rotate {
		transform: rotate(225deg);
	}

	/* Hover effects for desktop only */
	@media (min-width: 1024px) {
		.quick-add-control:hover .quick-add-wrapper > div {
			width: var(--expand-width);
		}
	}
</style>
