<script lang="ts">
	// @ts-nocheck
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		ChevronDown,
		Facebook,
		Instagram,
		Linkedin,
		Mail,
		Twitter,
		Youtube
	} from 'lucide-svelte';
	// import Featured from '$lib/components/home/Featured.svelte';

	import Image from '$lib/components/Image.svelte';
	export let data;

	$: currentArticleUrl = $page.url.href;

	function shareOnTwitter() {
		let tweetText = 'Check out this article from Tassie Tallow!'; // Customize tweet text
		let twitterUrl = `https://twitter.com/intent/tweet?url=${currentArticleUrl}&text=${tweetText}`;
		window.open(twitterUrl, '_blank');
	}
	// Get the current page's URL
	const blog = data.blog;

	if (!blog) {
		throw new Error('Blog not found'); // This will trigger a 404 error page
	}

	let animate = false;

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
</script>

<section class="relative mx-auto flex h-[600px] flex-col items-center justify-center">
	<Image
		src={blog.image}
		class_name="absolute inset-0 h-[600px] w-full object-cover"
		alt="Tassie Tallow Tasmania"
		priority={true}
		objectFit="cover"
	/>

	<div class="absolute inset-0 bg-foreground/50"></div>
	<div
		class="pointer-events-none absolute inset-0 mx-auto flex h-[600px] w-full max-w-7xl flex-col items-center justify-center px-4 text-center"
	>
		<h1
			class="mx-auto mb-0 mt-4 max-w-2xl scroll-m-20 font-heading text-2xl font-bold tracking-tight text-white lg:mx-0 lg:text-3xl"
		>
			{blog.title}
		</h1>
		<div class="mx-auto mt-6 flex max-w-xl items-center lg:mx-0">
			<p class="text-md mx-auto mb-0 text-center font-bold text-white lg:mx-0">
				{blog.shortDescription}
			</p>
		</div>
		<div class="mt-6 flex flex-row gap-4 font-medium text-background">
			<div class=" mx-0 flex items-center">
				<p class="mb-0 text-sm italic text-white lg:text-lg">
					{blog.date} • {blog.category}
				</p>
			</div>
		</div>
		<div class="pointer-events-auto mt-6 flex max-w-lg flex-row items-center justify-between gap-4">
			<a href="#content" onclick={handleAnchorClick}
				><ChevronDown class="h-10 w-10 text-white transition-all hover:translate-y-1" /></a
			>
		</div>
	</div>
</section>

<div class="">
	<main class="mx-auto max-w-5xl px-4 py-12 lg:pt-24" id="content">
		{@html blog.content}
	</main>
</div>
