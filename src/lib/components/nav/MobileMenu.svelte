<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import Separator from '../ui/separator/separator.svelte';
	import ProductSearch from '../shop/ProductSearch.svelte';
</script>

<div class="flex lg:hidden">
	<Sheet.Root>
		<Sheet.Trigger>
			<div
				class=" flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted hover:bg-transparent"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<Sheet.Header class="pt-12">
				<Sheet.Close class="ring-0 focus-visible:outline-none">
					<a href="/"> <h4 class="mb-0 font-heading text-lg font-medium">Tassie Tallow</h4></a>
				</Sheet.Close>

				<Sheet.Description class="border-b border-muted pb-8"
					>100% Tasmanian, Grass-fed Tallow. Handmade in small batches.</Sheet.Description
				>
			</Sheet.Header>

			<div class="grid gap-4 py-4">
				<Sheet.Close>
					<Button
						href="/search"
						variant="ghost"
						class="text-md col-span-4 flex items-end justify-start rounded-full hover:bg-muted"
						>Shop All Products</Button
					></Sheet.Close
				>
				<Accordion.Root class="w-full border-muted" type="single">
					<Accordion.Item
						class="text-md rounded-lg border-none px-4 py-0 no-underline transition-all hover:bg-muted"
					>
						<Accordion.Trigger class=" rounded-full py-2 hover:no-underline"
							>Shop By Category</Accordion.Trigger
						>
						<Accordion.Content class=" pl-2 ">
							<div class="flex flex-col">
								<Sheet.Close>
									<Button
										href="/search/good-fat"
										variant="ghost"
										class="col-span-4 flex items-end justify-start rounded-full text-base hover:bg-muted"
										>Cooking fats</Button
									></Sheet.Close
								>
								<Sheet.Close>
									<Button
										href="/search/snacks-treats"
										variant="ghost"
										class="col-span-4 flex items-end justify-start rounded-full text-base hover:bg-muted"
										>Snacks & treats</Button
									></Sheet.Close
								>
								<Sheet.Close>
									<Button
										href="/search/skincare"
										variant="ghost"
										class="col-span-4 flex items-end justify-start rounded-full text-base hover:bg-muted"
										>Skincare</Button
									></Sheet.Close
								>
								<Sheet.Close>
									<Button
										href="/search/tassie-k9"
										variant="ghost"
										class="col-span-4 flex items-end justify-start rounded-full text-base hover:bg-muted"
										>Pet treats</Button
									></Sheet.Close
								>
							</div>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
				<Separator class="bg-muted" />
				<Sheet.Close>
					<Button
						href="/about"
						variant="ghost"
						class="text-md col-span-4 flex items-end justify-start rounded-full hover:bg-muted"
						>Our story</Button
					></Sheet.Close
				>
				<Sheet.Close>
					<Button
						href="/blog"
						variant="ghost"
						class="text-md col-span-4 flex items-end justify-start rounded-full hover:bg-muted"
						>Articles</Button
					></Sheet.Close
				>
				<!-- <Sheet.Close>
					<Button
						href="/recipes"

						variant="ghost"
						class="text-md col-span-4 flex items-end justify-start rounded-full hover:bg-muted"
						>Recipes</Button
					>
				</Sheet.Close> -->
				<Sheet.Close>
					<Button
						href="/faq"
						variant="ghost"
						class="text-md col-span-4 flex items-end justify-start rounded-full hover:bg-muted"
						>FAQ</Button
					>
				</Sheet.Close>

				<Sheet.Close>
					<Button
						href="/contact"
						variant="ghost"
						class="text-md col-span-4 flex items-end justify-start rounded-full hover:bg-muted"
						>Contact</Button
					>
				</Sheet.Close>
			</div>
		</Sheet.Content>
	</Sheet.Root>
</div>
