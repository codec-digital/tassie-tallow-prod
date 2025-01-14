<script lang="ts">
	import Footer from '$lib/components/nav/Footer.svelte';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	let { children } = $props();
</script>

<Toaster />
<ModeWatcher defaultMode={'light'} />
<Navigation />
<main>
	{@render children?.()}
</main>
<Footer />
