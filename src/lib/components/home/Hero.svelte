<script lang="ts">
	// @ts-nocheck
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import { fade, fly } from 'svelte/transition';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Image from '../Image.svelte';

	let animate = false;
	let email = '';
	let loading = false;
	let success = false;
	let error = '';

	const categories = [
		{ title: 'All', link: '/search' },
		{ title: 'Balm', link: '/search?q=balm' },
		{ title: 'Beef Tallow', link: '/search?q=beef tallow' },
		{ title: 'Crackling', link: '/search?q=crackling' },
		{ title: 'Duck Fat', link: '/search?q=duck fat' },
		{ title: 'Ghee', link: '/search?q=ghee' },
		{ title: 'Gift Card', link: '/search?q=gift card' },
		{ title: 'Glassware', link: '/search?q=glass jar' },
		{ title: 'Lamb Dripping', link: '/search?q=lamb dripping' },
		{ title: 'Moisturiser', link: '/search?q=moisturiser' },
		{ title: 'Paste', link: '/search?q=paste' },
		{ title: 'Soap', link: '/search?q=soap' },
		{ title: 'Tassie K9', link: '/search?q=tassie k9' }
	];

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
		animate = true;
	});

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}

	let value = $page.url.searchParams.get('q') || '';

	async function submit(e) {
		e.preventDefault();
		loading = true;
		let query = new URLSearchParams();
		if (value) {
			query.set('q', value);
		}
		await goto(`/search${query.toString() ? `?${query}` : ''}`, { keepFocus: true });
	}
</script>

<section class="relative mx-auto flex h-[600px] flex-col items-center justify-center">
	<Image
		src="/field-cow.jpeg"
		alt="Tassie Tallow Tasmania"
		class_name="absolute inset-0 h-[600px] w-full"
		priority={true}
		objectFit="cover"
	/>

	<div class="absolute inset-0 bg-foreground/25"></div>
	{#if animate}
		<div
			class=" absolute inset-0 mx-auto flex h-[600px] w-full max-w-7xl flex-col items-center justify-center px-4"
		>
			<h1
				class="mx-auto my-6 mb-0 max-w-3xl scroll-m-20 text-center font-heading text-3xl font-medium tracking-tight text-background lg:text-5xl"
				in:fly={{ y: 20, duration: 500, delay: 300 }}
				out:fade={{ duration: 300 }}
			>
				<span class="after:whitespace-pre after:content-['\A'] lg:after:content-none"
					>Tasmanian</span
				> Grass-fed Tallow
			</h1>
			<form
				on:submit={submit}
				class="mx-auto w-full max-w-2xl"
				in:fly={{ y: 20, duration: 500, delay: 400 }}
				out:fade={{ duration: 300 }}
			>
				<div class="relative mt-6 flex w-full items-center justify-center">
					<div class="flex-grow">
						<Input
							placeholder="Search our products..."
							type="search"
							id="search"
							name="search"
							bind:value
							required
							class="h-12 w-full rounded-full border-0 pl-4 pr-4 font-sans text-gray-700 shadow-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-lg"
						/>
					</div>

					<Button
						type="submit"
						size="icon"
						class="{success
							? 'bg-primary hover:bg-green-600'
							: 'bg-primary hover:bg-primary/80'} absolute right-2 flex items-center justify-center rounded-full font-bold text-white transition duration-300 ease-in-out"
						disabled={loading || success}
					>
						{#if loading}
							<Loader2 class="h-5 w-5 animate-spin" />
						{:else if success}
							<CheckCircle class="h-5 w-5" />
						{:else}
							<ArrowRight class="h-5 w-5" />
						{/if}
					</Button>
				</div>

				{#if error}
					<p transition:fade class="mt-4 text-center text-red-600">{error}</p>
				{/if}
			</form>
			<div
				class="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3 whitespace-nowrap px-4 text-sm"
				in:fly={{ y: 20, duration: 500, delay: 500 }}
				out:fade={{ duration: 300 }}
			>
				{#each categories as category}
					<div class="">
						<Badge
							class="bg-accent text-xs text-foreground hover:bg-[#c39400] lg:text-sm"
							href={category.link}>{category.title}</Badge
						>
					</div>
				{/each}
			</div>

			<div
				class="mx-auto mt-4"
				in:fly={{ y: 20, duration: 500, delay: 600 }}
				out:fade={{ duration: 300 }}
			>
				<a
					href="/about"
					class="pointer-events-auto flex flex-row items-center justify-center font-semibold text-white hover:underline lg:text-lg"
				>
					Explore the benefits of Tallow <ArrowRight class="ml-2 h-5 w-5" />
				</a>
			</div>
		</div>
	{/if}
</section>
