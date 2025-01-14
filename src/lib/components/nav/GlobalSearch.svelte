<script lang="ts">
	//@ts-nocheck
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Input from '../ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, Loader2, Search } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Separator from '../ui/separator/separator.svelte';

	let value = $page.url.searchParams.get('q') || '';
	let animate = false;
	let email = '';
	let loading = false;
	let success = false;
	let error = '';
	let isOpen = $state(false);

	async function submit(e) {
		e.preventDefault();
		loading = true;
		let query = new URLSearchParams();
		if (value) {
			query.set('q', value);
		}
		await goto(`/search${query.toString() ? `?${query}` : ''}`, { keepFocus: true });
		isOpen = false;
		loading = false;
		value = '';
	}
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Trigger>
		<div
			class=" relative hidden items-center justify-center rounded-full p-2 transition-all hover:bg-muted/60 lg:flex"
			href="/contact"
		>
			<Search class="h-5 w-5" />
			<span class="sr-only">Contact</span>
		</div></Dialog.Trigger
	>
	<Dialog.Content class=" border-none bg-transparent">
		<form on:submit={submit} class="mx-auto w-full max-w-2xl">
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
	</Dialog.Content>
</Dialog.Root>
