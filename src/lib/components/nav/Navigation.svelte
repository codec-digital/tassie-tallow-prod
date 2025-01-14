<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Phone, ShoppingCart, User, Search } from 'lucide-svelte/icons';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import MobileMenu from '$lib/components/nav/MobileMenu.svelte';
	import Cart from '$lib/components/nav/Cart.svelte';
	import Megamenu from '$lib/components/nav/Megamenu.svelte';
</script>

<div class="flex w-full items-center justify-center bg-primary p-2 text-white">
	<a href="/search" class="m-0 p-0 text-sm font-bold hover:underline"
		>FREE Shipping on orders over $100 - T&Cs apply</a
	>
</div>

<header class="sticky top-0 z-50 w-full bg-background shadow-sm lg:shadow-none">
	<div class="mx-auto grid h-16 grid-cols-3 items-center px-4">
		<MobileMenu />
		<div class=" hidden lg:flex">
			<a
				href="/search/good-fat"
				class="group flex items-center space-x-2 rounded-full bg-muted px-4 py-2"
			>
				<span class="text-sm font-medium group-hover:underline">SHOP GOOD FAT</span>
			</a>
			<a href="/search/skincare" class="group flex items-center space-x-2 rounded-full px-4 py-1">
				<span class="text-sm font-medium group-hover:underline">SKINCARE</span>
				<Badge class="">best seller</Badge>
			</a>
		</div>
		<div class="flex w-full items-center justify-center">
			<a href="/" class=" flex items-center space-x-2 text-center">
				<span class=" font-heading text-lg font-bold lg:text-2xl">Tassie Tallow</span>
			</a>
		</div>
		<div class="flex flex-1 items-center justify-end space-x-2">
			<nav class="flex items-center lg:gap-2">
				<div class="hidden items-center gap-4 border-r-2 border-muted pr-4 lg:flex">
					<!-- <a href="/recipes" class="text-sm font-bold hover:underline">RECIPES</a> -->
					<a href="/blog" class="text-sm font-bold hover:underline">ARTICLES</a>
					<a href="/about" class="text-sm font-bold hover:underline">OUR STORY</a>
					<a href="/faq" class="text-sm font-bold hover:underline">FAQ</a>
				</div>
				<a
					class=" relative hidden items-center justify-center rounded-full p-2 transition-all hover:bg-muted/60 lg:flex"
					href="/contact"
				>
					<Search class="h-5 w-5" />
					<span class="sr-only">Contact</span>
				</a>
				<a
					class=" relative hidden items-center justify-center rounded-full p-2 transition-all hover:bg-muted/60 lg:flex"
					href="/contact"
				>
					<User class="h-5 w-5" />
					<span class="sr-only">Contact</span>
				</a>
				<Cart />
			</nav>
		</div>
	</div>
	<Megamenu />
</header>
