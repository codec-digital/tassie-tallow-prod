<script>
	import Image from '$lib/components/Image.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
</script>

<section class="mx-auto px-4 pt-12 lg:px-10 lg:pt-20 xl:px-20">
	<Carousel.Root class="w-full " opts={{ align: 'start', loop: true }}>
		<Carousel.Content class="-ml-6">
			<Carousel.Item class="w-full  basis-5/6 pl-6 md:basis-5/12 xl:basis-1/4">
				<a href="/search/good-fat" data-sveltekit-prefetch class="group relative flex flex-col">
					<!-- Image container -->
					<div class="bg-warm-stone/20 h-[400px] w-full overflow-hidden rounded-3xl lg:h-[500px]">
						<Image
							src="/rib-eye-steak"
							alt="Tassie Tallow Tasmania"
							class_name="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
							priority={true}
							objectFit="cover"
						/>
					</div>

					<!-- Content container -->
					<div class="mt-4 flex flex-col px-4">
						<h3 class="mb-2 mt-1 font-sans text-2xl font-bold">Cooking Fats</h3>

						<p class="text-text/80 mt-1 line-clamp-2 text-sm">
							Tallow is suet (kidney and loin) fat. Suet is a highly vascularised and nutrient dense
							product. It is one of nature’s richest sources of conjugated linoleic acid (CLA). It
							is typically much firmer than body fat at room temperature.
						</p>
					</div>
				</a>
			</Carousel.Item>
			<Carousel.Item class="w-full  basis-5/6 pl-6 md:basis-5/12 xl:basis-1/4">
				<a href="/search/skincare" data-sveltekit-prefetch class="group relative flex flex-col">
					<!-- Image container -->
					<div class="bg-warm-stone/20 h-[400px] w-full overflow-hidden rounded-3xl lg:h-[500px]">
						<Image
							src="/woman-applying-face-cream.jpg"
							alt="Tassie Tallow Tasmania"
							class_name="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
							priority={true}
							objectFit="cover"
						/>
					</div>

					<!-- Content container -->
					<div class="mt-4 flex flex-col px-4">
						<h3 class="mb-2 mt-1 font-sans text-2xl font-bold">Skincare</h3>

						<p class="text-text/80 mt-1 line-clamp-2 text-sm">
							We hand make our skincare range in small batches for optimal freshness and nutrient
							density. Our skin care range uses natural fats and ingredients that closely mimics the
							fats and oils found naturally in healthy, youthful skin.
						</p>
					</div>
				</a>
			</Carousel.Item>
			<Carousel.Item class="w-full  basis-5/6 pl-6 md:basis-5/12 xl:basis-1/4">
				<a
					href="/search/snacks-treats"
					data-sveltekit-prefetch
					class="group relative flex flex-col"
				>
					<!-- Image container -->
					<div class="bg-warm-stone/20 h-[400px] w-full overflow-hidden rounded-3xl lg:h-[500px]">
						<Image
							src="/assorted-spices"
							alt="Tassie Tallow Tasmania"
							class_name="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
							priority={true}
							objectFit="cover"
						/>
					</div>

					<!-- Content container -->
					<div class="mt-4 flex flex-col px-4">
						<h3 class="mb-2 mt-1 font-sans text-2xl font-bold">Snacks & Pantry</h3>

						<p class="text-text/80 mt-1 line-clamp-2 text-sm">
							A showcase of the products you would find at any of our local farmer’s markets in
							Tasmania. These local businesses and farms have quality products and tasty treats and
							we love supporting them.
						</p>
					</div>
				</a>
			</Carousel.Item>
			<Carousel.Item class="w-full  basis-5/6 pl-6 md:basis-5/12 xl:basis-1/4">
				<a href="/search/tassie-k9" data-sveltekit-prefetch class="group relative flex flex-col">
					<!-- Image container -->
					<div class="bg-warm-stone/20 h-[400px] w-full overflow-hidden rounded-3xl lg:h-[500px]">
						<Image
							src="/tassie-k9"
							alt="Tassie Tallow Tasmania"
							class_name="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
							priority={true}
							objectFit="cover"
						/>
					</div>

					<!-- Content container -->
					<div class="mt-4 flex flex-col px-4">
						<h3 class="mb-2 mt-1 font-sans text-2xl font-bold">Tassie K9</h3>

						<p class="text-text/80 mt-1 line-clamp-2 text-sm">
							Premium Tasmanian made dog treats, majorly sourced from our local farmers with the
							occasional input from interstate ones, so 100% Australian produce is used for
							guaranteed quality.
						</p>
					</div>
				</a>
			</Carousel.Item>
		</Carousel.Content>
		<!-- <Carousel.Previous class="" />
				<Carousel.Next class="" /> -->
	</Carousel.Root>
</section>
