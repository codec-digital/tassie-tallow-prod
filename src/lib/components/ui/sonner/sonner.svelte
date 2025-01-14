<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
	import { mode } from 'mode-watcher';

	let restProps: SonnerProps = $props();
</script>

<Sonner
	theme={$mode}
	class="toaster group"
	position="top-right"
	toastOptions={{
		unstyled: true,
		classes: {
			toast:
				'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-none group-[.toaster]:shadow-lg px-6 py-4 rounded-lg flex flex-row gap-1 items-center justify-center w-auto',
			description: 'group-[.toast]:text-muted-foreground text-xs min-w-48',
			title: 'font-bold',

			actionButton:
				'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground bg-primary py-1.5 rounded-full text-xs flex items-center justify-center w-20',
			cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
		}
	}}
	{...restProps}
/>
