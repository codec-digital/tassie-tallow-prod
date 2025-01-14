<script>
	// @ts-nocheck
	import slugify from 'slugify';
	import Button from '$lib/components/ui/button/button.svelte';
	import File from 'lucide-svelte/icons/file';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade, fade, fly } from 'svelte/transition';

	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';

	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import { ArrowRight, Map, ArrowDownNarrowWide, ChevronRight, ChevronLeft } from 'lucide-svelte';

	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	import { onMount } from 'svelte';
	import { blogs } from '$lib/utils/blogs.js';
	import Image from '$lib/components/Image.svelte';
	import * as Pagination from '$lib/components/ui/pagination';
	import ProductSort from '$lib/components/shop/ProductSort.svelte';
	import ProductSearch from '$lib/components/shop/ProductSearch.svelte';

	import BlogSort from '$lib/components/blog/BlogSort.svelte';
	import { selectedCategory } from '$lib/utils/blogStore';

	let animate = false;

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
		animate = true;
	});

	let current = 0;

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

	function parseDate(dateStr) {
		const [day, month, year] = dateStr.split('/').map(Number);
		return new Date(year, month - 1, day);
	}

	$: displayedBlogs = blogs.sort((a, b) => parseDate(b.uploaded) - parseDate(a.uploaded));

	let filterBy = 'all';
	let sortBy = 'featured';

	$: tassieTours = blogs.filter((blog) => blog.category === 'Tassie Tours');
	$: guide = blogs.filter((blog) => blog.category === 'Guide');
	$: brunyIsland = blogs.filter((blog) => blog.category === 'Bruny Island');
	$: portArthur = blogs.filter((blog) => blog.category === 'Port Arthur');
	$: mtField = blogs.filter((blog) => blog.category === 'Mt Field');

	const itemsPerPage = 24;

	function handlePageChange() {
		setTimeout(() => {
			// Try both window and documentElement scroll
			window.scrollTo({ top: 0, behavior: 'smooth' });
			document.documentElement.scrollTo({ top: 0 });

			// Fallback to body scroll if needed
			document.body.scrollIntoView({ behavior: 'smooth' });

			// Optional: Add logging for debugging
			console.log('Page change scroll executed');
		}, 0);
	}

	$: filteredBlogs =
		$selectedCategory === 'all'
			? displayedBlogs
			: displayedBlogs.filter((blog) => blog.category === $selectedCategory);
</script>

<!-- <Seo
	title="Tasmanian Tour From Hobart | Blog - From around the island"
	description="The latest news and sites from around the beautiful island of Tasmania"
	keywords="Tasmania Tours, Tasmania local tour, Tassie Tours, Day tours from Hobart, Discover Bruny Island, Cradle Mountain, Active Tasmania tours"
	siteName="Tassie Tours"
	imageURL="/src/lib/assets/images/hero-carousel-1.jpg"
	logo="/src/lib/assets/logo/logo-black.png"
	author="Tassie Tours"
	type="website"
	name="Tassie Tours"
	index={true}
	twitter={true}
	openGraph={true}
	schemaOrg={true}
/> -->

<section class="relative mx-auto flex h-[600px] flex-col items-center justify-center">
	{#key current}
		<div class="w-full" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
			<Image
				src={blogs[current].image}
				class_name="absolute inset-0 h-[600px] w-full object-cover"
				alt="Tassie Tallow Tasmania"
				priority={true}
				objectFit="cover"
			/>
		</div>

		<div class="absolute inset-0 bg-foreground/60"></div>

		<div
			in:fly={{ x: 100, duration: 300, delay: 300 }}
			out:fly={{ x: -100, duration: 300 }}
			class="pointer-events-none absolute inset-0 mx-auto flex h-[600px] w-full max-w-7xl flex-col items-center justify-center px-4 text-center"
		>
			<Badge
				class="pointer-events-auto flex w-32 items-center justify-center bg-accent text-sm text-foreground hover:bg-accent/80"
				>NEWLY ADDED</Badge
			>
			<h1
				class="mx-auto mb-0 mt-4 max-w-2xl scroll-m-20 font-heading text-2xl font-bold tracking-tight text-white lg:mx-0 lg:text-3xl"
			>
				{blogs[current].title}
			</h1>
			<div class="mx-auto mt-6 flex max-w-xl items-center lg:mx-0">
				<p class="text-md text-leftfont-semibold mx-auto mb-0 font-bold text-white lg:mx-0">
					{blogs[current].shortDescription}
				</p>
			</div>
			<div class="mt-6 flex flex-row gap-4 font-medium text-background">
				<div class=" mx-0 flex items-center">
					<p class="lg:text-md mb-0 text-sm italic text-white">
						{blogs[current].date} • {blogs[current].category}
					</p>
				</div>
			</div>
			<div class=" mt-6 flex max-w-lg flex-row items-center justify-between gap-4">
				<Button
					href={`/blog/${slugify(blogs[current].title, { lower: true })}`}
					variant="outline"
					data-sveltekit-prefetch
					class="pointer-events-auto mx-0 w-44 rounded-full border border-white bg-transparent px-6 text-lg font-semibold text-white  hover:bg-white/10 hover:text-white hover:underline"
					>Read now</Button
				>
			</div>
			<div class="mx-auto mt-4">
				<a
					href="#archive"
					onclick={handleAnchorClick}
					class="pointer-events-auto flex flex-row items-center justify-center font-semibold text-white hover:underline lg:text-lg"
				>
					Explore the archive <ArrowRight class="ml-2 h-5 w-5" />
				</a>
			</div>
		</div>
	{/key}
	<!-- <div
		class="absolute bottom-12 mt-12 flex items-center justify-center gap-1.5 rounded-full bg-foreground/40 px-2 py-1 lg:-mt-8"
	>
		<button
			aria-label="featured blog select"
			on:click={() => (current = 0)}
			class={current === 0
				? 'pointer-events-auto h-3 w-3 rounded-full bg-background/80 transition'
				: 'pointer-events-auto h-3 w-3 rounded-full bg-foreground/60 transition'}
		></button>
		<button
			aria-label="featured blog select"
			on:click={() => (current = 1)}
			class={current === 1
				? 'pointer-events-auto h-3 w-3 rounded-full bg-background/80 transition'
				: 'pointer-events-auto h-3 w-3 rounded-full bg-foreground/60 transition'}
		></button>
		<button
			aria-label="featured blog select"
			on:click={() => (current = 2)}
			class={current === 2
				? 'pointer-events-auto h-3 w-3 rounded-full bg-background/80 transition'
				: 'pointer-events-auto h-3 w-3 rounded-full bg-foreground/60 transition'}
		></button>
		<button
			aria-label="featured blog select"
			on:click={() => (current = 3)}
			class={current === 3
				? 'pointer-events-auto h-3 w-3 rounded-full bg-background/80 transition'
				: 'pointer-events-auto h-3 w-3 rounded-full bg-foreground/60 transition'}
		></button>
	</div> -->
</section>

<section class=" px-4 py-8 pt-12 lg:px-10 lg:pt-20 xl:px-20">
	<div class="flex flex-col items-center justify-center border-b-2 border-muted pb-8">
		<h4 class="mb-0 font-sans text-lg font-bold">TASSIE TALLOW</h4>
		<h2 class="mt-2 text-3xl lg:text-4xl">Explore the archive</h2>
	</div>
</section>

<div class="mx-auto px-4 pb-12 lg:px-10 xl:px-20" id="archive">
	<div class="grid w-full place-items-end justify-end lg:flex lg:grid-cols-2">
		<BlogSort />
	</div>
	<Pagination.Root
		count={filteredBlogs.length}
		perPage={itemsPerPage}
		onPageChange={handlePageChange}
	>
		{#snippet children({ pages, currentPage })}
			<ul class="grid auto-rows-min gap-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
				{#each filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as blog, index}
					<a
						href={`/blog/${encodeURIComponent(slugify(blog.title), { lower: true })}`}
						data-sveltekit-prefetch
						class="group relative flex flex-col"
					>
						<!-- Stock Status and Sale Badges -->
						<div class="absolute left-4 top-4 z-10 flex flex-col gap-2">
							<Badge variant="secondary" class="bg-accent text-sm text-white">{blog.category}</Badge
							>
						</div>

						<!-- Image container -->
						<div class="bg-warm-stone/20 aspect-square w-full overflow-hidden rounded-3xl">
							<Image
								src={blog.image}
								class_name="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
								alt="Tassie Tallow Tasmania"
								priority={true}
								objectFit="cover"
							/>
						</div>

						<!-- Content container -->
						<div class="mt-4 flex flex-col px-2">
							<!-- Category and Price row -->
							<div class="text-text/80 flex items-baseline justify-between">
								<span class="text-sm">{blog.date}</span>
								<div class="flex items-baseline gap-2">
									<span class="text-sm font-bold">{blog.duration}</span>
								</div>
							</div>

							<!-- Title -->
							<h3 class="text-deep-forest mt-1 font-sans text-lg font-bold">{blog.title}</h3>

							<!-- Description -->

							<p class="text-text/80 mt-1 line-clamp-2 text-sm">{blog.shortDescription}</p>
						</div>
					</a>
				{:else}
					<p>No blogs :(</p>
				{/each}
			</ul>

			{#if pages.length > 1}
				<div class="mt-8">
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton class="hover:bg-muted">
								<ChevronLeft class="size-4" />
								<span class="hidden sm:block">Previous</span>
							</Pagination.PrevButton>
						</Pagination.Item>
						{#each pages as page (page.key)}
							{#if page.type === 'ellipsis'}
								<Pagination.Item>
									<Pagination.Ellipsis />
								</Pagination.Item>
							{:else}
								<Pagination.Item>
									<Pagination.Link
										class="hover:bg-muted"
										{page}
										isActive={currentPage === page.value}
									>
										{page.value}
									</Pagination.Link>
								</Pagination.Item>
							{/if}
						{/each}
						<Pagination.Item>
							<Pagination.NextButton class="hover:bg-muted">
								<span class="hidden sm:block">Next</span>
								<ChevronRight class="size-4" />
							</Pagination.NextButton>
						</Pagination.Item>
					</Pagination.Content>
				</div>
			{/if}
		{/snippet}
	</Pagination.Root>
</div>
