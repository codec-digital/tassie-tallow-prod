<script lang="ts">
	import Footer from '$lib/components/nav/Footer.svelte';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import '../app.pcss';
	let { children } = $props();
</script>

<Navigation />
<main>
	{@render children?.()}
</main>
<Footer />
