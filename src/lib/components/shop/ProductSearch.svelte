<script lang="ts">
	import { Search } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { ArrowRight, XIcon } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let searchInput = '';

	let form: HTMLFormElement;

	async function submit(e: Event) {
		e.preventDefault();

		let query = new URLSearchParams();
		if (searchInput) {
			query.set('q', searchInput);
		}
		try {
			const url = new URL($page.url);
			url.searchParams.set('q', searchInput);
			await goto(url, { keepFocus: true, replaceState: true });
			searchInput = '';
			form.reset();
		} catch (error) {
			console.error('Navigation failed:', error);
		}
	}

	let query = $derived($page.url.searchParams.get('q'));
</script>

<div class="relative hidden min-w-0 flex-col justify-end pb-6 lg:flex">
	<Label class="flex h-6 "><Search class="mr-1.5 h-4 w-4" /> Search</Label>

	<form bind:this={form} onsubmit={submit}>
		<Label for="search" class="sr-only">Search</Label>
		<div class="flex flex-row gap-4">
			<div class="relative w-52">
				<Input
					placeholder="Search our products..."
					type="search"
					id="search"
					name="search"
					bind:value={searchInput}
					required
					tabindex={-1}
					class="h-8 w-52 rounded-full border-0 bg-muted/60 pl-4 text-sm "
				/>
				<ArrowRight
					class="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50"
				/>
			</div>

			{#if query}
				<div class="relative" in:fly={{ x: -20 }} out:fly={{ x: -20 }}>
					<div
						class="flex h-8 min-w-24 items-center rounded-full border-0 bg-foreground/5 pl-4 pr-8 text-sm"
					>
						{query}
					</div>
					<XIcon
						class="absolute right-2 top-1/2 size-4 -translate-y-1/2 cursor-pointer select-none  opacity-50"
						onclick={() => {
							const url = new URL($page.url);
							url.searchParams.delete('q');
							goto(url, { keepFocus: true, replaceState: true });
						}}
					/>
				</div>
			{/if}
		</div>
	</form>
</div>

<div class="justify-self-start">
	{#if query}
		<div
			in:fly={{ x: -20 }}
			out:fly={{ x: -20 }}
			class="relative min-w-0 flex-col justify-end pb-6 lg:hidden"
		>
			<Label class="flex h-6 "><Search class="mr-1.5 h-4 w-4" /> Search</Label>

			<form bind:this={form} onsubmit={submit}>
				<Label for="search" class="sr-only">Search</Label>
				<div class="flex flex-row gap-4">
					<div class="relative">
						<div
							class="flex h-8 min-w-24 items-center rounded-full border-0 bg-foreground/5 pl-4 pr-8 text-sm"
						>
							{query}
						</div>
						<XIcon
							class="absolute right-2 top-1/2 size-4 -translate-y-1/2 cursor-pointer select-none  opacity-50"
							onclick={() => {
								const url = new URL($page.url);
								url.searchParams.delete('q');
								goto(url, { keepFocus: true, replaceState: true });
							}}
						/>
					</div>
				</div>
			</form>
		</div>
	{:else}
		<div></div>
	{/if}
</div>
