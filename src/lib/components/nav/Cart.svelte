<script>
	// @ts-nocheck
	import slugify from 'slugify';
	import {
		Map,
		Search,
		ShoppingCart,
		GitBranch,
		Twitter,
		ChevronDown,
		Languages,
		X,
		File,
		ArrowRight,
		Plus,
		Minus
	} from 'lucide-svelte/icons';
	import * as Card from '$lib/components/ui/card';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { onMount } from 'svelte';
	import { Badge } from '../ui/badge';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/** @type {{loading?: boolean, items?: any[]}} */
	export let loading = false;
	export let items = [];

	console.log(items);

	function addOneItem(item) {
		loading = true;
		dispatch('addProduct', {
			body: item.node.merchandise.id
		});
	}

	function removeOneItem(item) {
		loading = true;
		let quantity = item.node.quantity - 1;
		dispatch('removeProduct', {
			body: {
				variantId: item.node.merchandise.id,
				quantity: quantity,
				lineId: item.node.id
			}
		});
	}

	function removeEntireItem(item) {
		loading = true;
		dispatch('removeProduct', {
			body: {
				variantId: item.node.merchandise.id,
				quantity: 0,
				lineId: item.node.id
			}
		});
	}

	async function checkout() {
		loading = true;
		let checkoutUrl = localStorage.getItem('cartUrl');
		window.open(JSON.parse(checkoutUrl), '_blank');
		loading = false;
	}

	function closeCart() {
		dispatch('close');
	}

	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			closeCart();
		}
	}
</script>

<Sheet.Root>
	<Sheet.Trigger asChild>
		<div
			class="class= relative flex items-center justify-center rounded-full p-2 transition-all hover:bg-muted/60"
		>
			<ShoppingCart class="h-5 w-5" />
			{#if items.length > 0}
				<div
					class="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#e1ac00] text-xs text-white"
				>
					{items.length}
				</div>
			{/if}
		</div>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="overflow-auto bg-[#FDFAF5]">
		<Sheet.Header>
			<Sheet.Title class="font-heading">Your cart</Sheet.Title>
			<Sheet.Description>
				Tax included. <a href="/legal#shipping" class="underline hover:opacity-80">Shipping</a> calculated
				at checkout.
			</Sheet.Description>
		</Sheet.Header>
		{#if items.length > 0}
			<div class="flex flex-col gap-4 py-4">
				{#each items as item}
					<Card.Root class="w-full overflow-hidden rounded-2xl transition-all">
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
									<Card.Title>{item.node.merchandise.product.title}</Card.Title>
									<div class="mt-2 flex items-center gap-2">
										<Button
											variant="outline"
											size="icon"
											class="h-8 w-8"
											on:click={() => removeOneItem(item)}
										>
											<Minus class="h-4 w-4" />
										</Button>
										<span class="w-8 text-center">{item.node.quantity}</span>
										<Button
											variant="outline"
											size="icon"
											class="h-8 w-8"
											on:click={() => addOneItem(item)}
										>
											<Plus class="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											class="ml-auto"
											on:click={() => removeEntireItem(item)}
										>
											<X class="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>
						</Card.Header>
					</Card.Root>
				{/each}
				<div class="mt-4 flex justify-between px-4">
					<Button variant="outline" on:click={closeCart}>Continue Shopping</Button>
					<Button on:click={checkout} disabled={loading}>
						{loading ? 'Processing...' : 'Checkout'}
					</Button>
				</div>
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center gap-4 py-4">
				<p class="text-foreground/60">Your cart is empty</p>
				<Sheet.Close>
					<Button variant="outline">Continue Shopping</Button>
				</Sheet.Close>
			</div>
		{/if}
	</Sheet.Content>
</Sheet.Root>
