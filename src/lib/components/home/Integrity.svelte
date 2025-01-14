<script>
	import { XIcon, Check } from 'lucide-svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	export const tallowIs = [
		{
			title: 'Made from nutrient-dense kidney and loin fat',
			description: 'This premium source ensures optimal flavor and nutritional value.'
		},
		{
			title: 'Firm at room temperature',
			description:
				'Our Tallow has a solid consistency allowing for easy portioning and extended shelf life.'
		},
		{
			title: 'Rich in conjugated linoleic acid (CLA)',
			description:
				'CLA is associated with various health benefits, including potential anti-inflammatory properties.'
		},
		{
			title: 'Suitable for high-temperature cooking (250°C)',
			description: 'This high smoke point makes our tallow ideal for searing, frying, and roasting.'
		}
	];

	export const tallowIsNot = [
		{
			title: 'Made from grain-fed animals',
			description: 'We source our tallow exclusively from grass-fed, pasture-raised livestock.'
		},
		{
			title: 'Hydrogenated or artificially processed',
			description: 'Our tallow retains its natural structure and beneficial properties.'
		},
		{
			title: 'Deodorised or chemically treated',
			description:
				'We preserve the authentic taste and aroma of our tallow through careful rendering.'
		},
		{
			title: 'Made with preservatives',
			description: 'Our tallow is a pure, single-ingredient product with no artificial additives.'
		}
	];
</script>

<section class=" px-4 py-12 lg:px-10 lg:py-20 xl:px-20">
	<div class="flex flex-col items-center justify-center pb-8">
		<h2 class=" text-center text-3xl lg:text-5xl">
			Doing right, <span class="block underline lg:inline-block">not easy</span>
		</h2>
		<div class="mt-8 w-full lg:mt-12 lg:hidden">
			<Tabs.Root value="is" class="w-full">
				<Tabs.List class="grid w-full grid-cols-2 rounded-full ">
					<Tabs.Trigger value="isnt" class="rounded-full font-heading "
						>Our tallow isn't</Tabs.Trigger
					>
					<Tabs.Trigger value="is" class="rounded-full font-heading ">Our tallow is</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="is" class="mt-8">
					{#each tallowIs as item}
						<div class="mt-8 flex flex-col items-center justify-center">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
								<Check class="h-6 w-6 text-background" />
							</div>
							<span class="mt-2 text-center font-heading text-lg">{item.title}</span>
							<span class="text-md mt-2 text-center font-sans">{item.description}</span>
						</div>
					{/each}
				</Tabs.Content>
				<Tabs.Content value="isnt" class="mt-8">
					{#each tallowIsNot as item}
						<div class="mt-8 flex flex-col items-center justify-center">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
								<XIcon class="h-6 w-6 text-background" />
							</div>
							<span class="mt-2 text-center font-heading text-lg opacity-40">{item.title}</span>
							<span class="text-md mt-2 text-center font-sans opacity-40">{item.description}</span>
						</div>
					{/each}
				</Tabs.Content>
			</Tabs.Root>
		</div>
		<div class="mt-12 hidden w-full max-w-screen-2xl grid-cols-2 px-4 lg:grid">
			<div class="flex w-full flex-col items-center justify-center border-r-2 border-muted px-4">
				<h3 class="font-heading">Our tallow isn't</h3>
				{#each tallowIsNot as item}
					<div class="mt-12 flex flex-col items-center justify-center">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
							<XIcon class="h-6 w-6 text-background" />
						</div>
						<span class="mt-2 text-center font-heading text-lg opacity-40">{item.title}</span>
						<span class="text-md mt-2 text-center font-sans opacity-40">{item.description}</span>
					</div>
				{/each}
			</div>
			<div class="flex w-full flex-col items-center justify-center px-4">
				<h3 class="font-heading">Our tallow is</h3>
				{#each tallowIs as item}
					<div class="mt-12 flex flex-col items-center justify-center">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
							<Check class="h-6 w-6 text-background" />
						</div>
						<span class="mt-2 text-center font-heading text-lg">{item.title}</span>
						<span class="text-md mt-2 text-center font-sans">{item.description}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
