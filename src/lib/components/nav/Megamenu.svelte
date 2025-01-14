<script lang="ts">
	import { page } from '$app/stores';

	const isActive = (path: string) => $page.url.pathname === path;
</script>

<nav class="mx-auto hidden h-14 items-center justify-center gap-8 bg-muted/60 lg:flex">
	<a
		href="/search"
		class="text-md font-bold hover:underline {isActive('/search') ? 'underline' : ''}">Shop All</a
	>
	<a
		href="/search/good-fat"
		class="text-md font-bold hover:underline {isActive('/search/good-fat') ? 'underline' : ''}"
		>Cooking Fats</a
	>
	<a
		href="/search/skincare"
		class="text-md font-bold hover:underline {isActive('/search/skincare') ? 'underline' : ''}"
		>Skincare</a
	>
	<a
		href="/search/snacks-treats"
		class="text-md font-bold hover:underline {isActive('/search/snacks-treats') ? 'underline' : ''}"
		>Snacks & Pantry</a
	>
	<a
		href="/search/tassie-k9"
		class="text-md font-bold hover:underline {isActive('/search/tassie-k9') ? 'underline' : ''}"
		>Tassie K9</a
	>
</nav>
