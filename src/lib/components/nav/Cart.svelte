<script>
	import { ShoppingCart, X, Plus, Minus } from 'lucide-svelte/icons';
	import * as Card from '$lib/components/ui/card';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { getCartItems } from '$lib/store';
	import { createCart } from '$lib/utils/shopify';
	import { cartItems, isLoading, refreshCart } from '$lib/utils/cartStore';

	// State management with runes
	let cartId = $state();
	let checkoutUrl = $state();
	let cartCreatedAt = $state();
	let items = $state([]);
	let loading = $state(false);
	let showCart = $state(false);

	// Derived values with runes
	let itemCount = $derived(items.length);

	// Effect to handle cart updates
	$effect(() => {
		items = $cartItems;
		loading = $isLoading;
	});

	onMount(async () => {
		if (typeof window !== 'undefined') {
			cartId = JSON.parse(localStorage.getItem('cartId'));
			cartCreatedAt = JSON.parse(localStorage.getItem('cartCreatedAt'));
			checkoutUrl = JSON.parse(localStorage.getItem('cartUrl'));

			let currentDate = Date.now();
			let difference = currentDate - cartCreatedAt;
			let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
			let cartIdExpired = totalDays > 6;

			if (cartId === 'undefined' || cartId === 'null' || cartIdExpired) {
				await callCreateCart();
			}
			await refreshCart();
		}
	});

	async function callCreateCart() {
		const cartRes = await createCart();

		if (typeof window !== 'undefined') {
			localStorage.setItem('cartCreatedAt', Date.now());
			localStorage.setItem('cartId', JSON.stringify(cartRes.body?.data?.cartCreate?.cart?.id));
			localStorage.setItem(
				'cartUrl',
				JSON.stringify(cartRes.body?.data?.cartCreate?.cart?.checkoutUrl)
			);
		}
	}

	async function addOneItem(item) {
		isLoading.set(true);
		if (typeof window !== 'undefined') {
			cartId = JSON.parse(localStorage.getItem('cartId'));
		}
		try {
			await fetch('/cart.json', {
				method: 'PATCH',
				body: JSON.stringify({
					cartId: cartId,
					variantId: item.node.merchandise.id
				})
			});
			await refreshCart();
		} catch (error) {
			console.error('Error adding item:', error);
		}
	}

	async function removeOneItem(item) {
		isLoading.set(true);
		let quantity = item.node.quantity - 1;
		if (typeof window !== 'undefined') {
			cartId = JSON.parse(localStorage.getItem('cartId'));
		}
		try {
			await fetch('/cart.json', {
				method: 'PUT',
				body: JSON.stringify({
					cartId,
					lineId: item.node.id,
					quantity: quantity,
					variantId: item.node.merchandise.id
				})
			});
			await refreshCart();
		} catch (error) {
			console.error('Error removing item:', error);
		}
	}

	async function removeEntireItem(item) {
		isLoading.set(true);
		if (typeof window !== 'undefined') {
			cartId = JSON.parse(localStorage.getItem('cartId'));
		}
		try {
			await fetch('/cart.json', {
				method: 'PUT',
				body: JSON.stringify({
					cartId,
					lineId: item.node.id,
					quantity: 0,
					variantId: item.node.merchandise.id
				})
			});
			await refreshCart();
		} catch (error) {
			console.error('Error removing item:', error);
		}
	}

	async function checkout() {
		isLoading.set(true);
		let checkoutUrl = localStorage.getItem('cartUrl');
		window.open(JSON.parse(checkoutUrl), '_blank');
		isLoading.set(false);
	}
</script>

<Sheet.Root>
	<Sheet.Trigger asChild>
		<div
			class="relative flex items-center justify-center rounded-full p-2 transition-all hover:bg-muted/60"
		>
			<ShoppingCart class="h-5 w-5" />
			{#if itemCount > 0}
				<div
					class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#e1ac00] text-xs text-white"
				>
					{itemCount}
				</div>
			{/if}
		</div>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="overflow-auto ">
		<Sheet.Header class="border-b border-muted pb-6">
			<Sheet.Title class="font-heading">Your cart</Sheet.Title>
			<Sheet.Description>
				Tax included. <a href="/legal#shipping" class="underline hover:opacity-80">Shipping</a> calculated
				at checkout.
			</Sheet.Description>
		</Sheet.Header>
		{#if items.length > 0}
			<div class="flex flex-col gap-4 py-6">
				{#each items as item}
					<Card.Root
						class="w-full overflow-hidden rounded-none border-x-0 border-b border-t-0  border-muted bg-transparent shadow-none transition-all"
					>
						<Card.Header class="relative w-full p-4">
							<div class="flex gap-4">
								{#if item.node.merchandise.product.images?.edges[0]}
									<img
										src={item.node.merchandise.product.images.edges[0].node.originalSrc}
										alt={item.node.merchandise.product.title}
										class="h-20 w-20 rounded-lg object-cover"
									/>
								{/if}
								<div class="flex flex-1 flex-col">
									<Card.Title class="text-base leading-tight lg:text-lg"
										>{item.node.merchandise.product.title}</Card.Title
									>
									<div class="mt-2 flex items-center gap-2">
										<div class="flex items-center justify-center rounded-full border">
											<Button
												variant="outline"
												size="icon"
												class="h-8 w-8 rounded-full border-none hover:bg-muted"
												onclick={() => removeOneItem(item)}
												disabled={loading}
											>
												<Minus class="h-4 w-4" />
											</Button>
											<span class="w-8 text-center">{item.node.quantity}</span>
											<Button
												variant="outline"
												size="icon"
												class="h-8 w-8 rounded-full border-none hover:bg-muted"
												onclick={() => addOneItem(item)}
												disabled={loading}
											>
												<Plus class="h-4 w-4" />
											</Button>
										</div>

										<Button
											variant="ghost"
											size="icon"
											class="ml-auto rounded-full hover:bg-muted"
											onclick={() => removeEntireItem(item)}
											disabled={loading}
										>
											<X class="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>
						</Card.Header>
					</Card.Root>
				{/each}
				<div class="mt-4 flex flex-col justify-center px-4">
					<Button onclick={checkout} disabled={loading} class="rounded-full text-lg">
						{loading ? 'Processing...' : 'Checkout'}
					</Button>
					<Sheet.Close asChild>
						<Button variant="link" class="text-foreground">Continue Shopping</Button>
					</Sheet.Close>
				</div>
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center gap-4 py-4">
				<p class="text-foreground/60">Your cart is empty</p>
				<Sheet.Close asChild>
					<Button variant="outline">Continue Shopping</Button>
				</Sheet.Close>
			</div>
		{/if}
	</Sheet.Content>
</Sheet.Root>
