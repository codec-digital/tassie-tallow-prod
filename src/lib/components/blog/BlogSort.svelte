<script>
	import * as Select from '$lib/components/ui/select';
	import Label from '$lib/components/ui/label/label.svelte';
	import { ListFilter } from 'lucide-svelte';
	import { selectedCategory } from '$lib/utils/blogStore';

	const categories = [
		{ value: 'all', label: 'All Posts' },
		{ value: 'Tallow', label: 'Tallow' },
		// { value: 'Science', label: 'Science' },
		{ value: 'Health', label: 'Health' },
		{ value: 'Nutrition', label: 'Nutrition' },
		{ value: 'Cooking', label: 'Cooking' },
		{ value: 'Recipes', label: 'Recipes' }
	];

	$: triggerContent = categories.find((f) => f.value === $selectedCategory)?.label ?? 'All Posts';
</script>

<div class="flex w-40 min-w-0 flex-col justify-end pb-6 lg:w-52">
	<Label class="flex h-6 justify-end">
		<ListFilter class="mr-1.5 h-4 w-4" /> Filter by
	</Label>

	<Select.Root type="single" name="categoryFilter" bind:value={$selectedCategory}>
		<Select.Trigger class="h-8 rounded-full border-0 bg-muted/60 pl-4">
			{triggerContent}
		</Select.Trigger>
		<Select.Content class="border-0 shadow-xl">
			<Select.Group>
				<Select.GroupHeading>Categories</Select.GroupHeading>
				{#each categories as category}
					<Select.Item
						class="rounded-full data-[highlighted]:bg-muted"
						value={category.value}
						label={category.label}
					>
						{category.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
