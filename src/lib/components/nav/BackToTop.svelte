<script>
	import { onMount } from 'svelte';
	import { ChevronUp } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	let showButton = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function handleScroll() {
		showButton = window.scrollY > 200;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if showButton}
	<Button
		variant="default"
		size="icon"
		class="group fixed bottom-2 right-2 z-50 rounded-full bg-background text-foreground shadow-lg transition-all hover:bg-background  lg:bottom-4 lg:right-4"
		onclick={scrollToTop}
	>
		<ChevronUp class="h-5 w-5 transition-all group-hover:-translate-y-1" />
		<span class="sr-only">Back to top</span>
	</Button>
{/if}
