<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import { ArrowRight } from 'lucide-svelte';
	import ProductCard from './shop/ProductCard.svelte';

	/** @type {{products: any, title: any}} */
	let { products } = $props();
</script>

<div class="w-full">
	<div class="mx-auto mt-6 flex w-full pb-12 lg:mt-12">
		<Carousel.Root class="w-full " opts={{ align: 'start', loop: true }}>
			<Carousel.Content class="-ml-6">
				{#each products as product}
					<Carousel.Item class="w-full basis-5/6  pl-6 md:basis-5/12 xl:basis-1/4">
						<ProductCard
							title={product.node.title}
							description={product.node.description}
							category={product.node.productType ||
								product.node.collections?.edges[0]?.node.title ||
								''}
							tags={product.node.tags}
							weight={product.node.weight}
							href={`/product/${product.node.handle}`}
							price={product.node.priceRange.minVariantPrice.amount}
							compareAtPrice={product.node.variants.edges[0]?.node.compareAtPriceV2?.amount}
							currencyCode={product.node.priceRange.maxVariantPrice.currencyCode}
							imageSrc={product.node.images.edges[0]?.node.originalSrc}
							inStock={product.node.availableForSale}
						/>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<!-- <Carousel.Previous class="" />
				<Carousel.Next class="" /> -->
		</Carousel.Root>
	</div>
	<!-- <div class="mx-auto">
			<Button

				variant="link"
				href="/search"
				class="medium pointer-events-auto text-[#815E32]  lg:text-lg"
			>
				Shop all products <ArrowRight class="ml-2 h-5 w-5" />
			</Button>
		</div> -->
</div>
