<script>
	import * as Select from '$lib/components/ui/select';
	import { SORT_OPTIONS } from '$lib/utils/productSort';
	import { sortOption } from '$lib/store';
	import Label from '$lib/components/ui/label/label.svelte';
	import { ArrowDownWideNarrow } from 'lucide-svelte';

	const sortBy = [
		{ value: SORT_OPTIONS.FEATURED, label: 'Featured' },
		{ value: SORT_OPTIONS.PRICE_LOW_TO_HIGH, label: 'Price: Low to High' },
		{ value: SORT_OPTIONS.PRICE_HIGH_TO_LOW, label: 'Price: High to Low' },
		{ value: SORT_OPTIONS.TITLE_A_TO_Z, label: 'Name: A to Z' },
		{ value: SORT_OPTIONS.TITLE_Z_TO_A, label: 'Name: Z to A' }
	];

	const triggerContent = $derived(
		sortBy.find((f) => f.value === $sortOption)?.label ?? 'Sort products'
	);
</script>

<div class="flex w-40 min-w-0 flex-col justify-end pb-6 lg:w-52">
	<Label class="flex h-6 justify-end"><ArrowDownWideNarrow class="mr-1.5 h-4 w-4" /> Sort by</Label>

	<Select.Root type="single" name="sortBy" bind:value={$sortOption}>
		<Select.Trigger class=" h-8 rounded-full border-0 bg-muted/60 pl-4 ">
			{triggerContent}
		</Select.Trigger>
		<Select.Content class="border-0 shadow-xl">
			<Select.Group>
				<Select.GroupHeading>Sort Options</Select.GroupHeading>
				{#each sortBy as option}
					<Select.Item
						class="rounded-full data-[highlighted]:bg-muted"
						value={option.value}
						label={option.label}>{option.label}</Select.Item
					>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
