<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		class?: string;
		loading?: 'lazy' | 'eager';
		priority?: boolean;
		quality?: number;
		sizes?: string;
		objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
	}

	export let src: Props['src'];
	export let alt: Props['alt'];
	export let width: Props['width'] = undefined;
	export let height: Props['height'] = undefined;
	export let class_name: Props['class'] = '';
	export let loading: Props['loading'] = 'lazy';
	export let priority: Props['priority'] = false;
	export let quality: Props['quality'] = 75;
	export let sizes: Props['sizes'] = '100vw';
	export let objectFit: Props['objectFit'] = 'cover';

	const IMAGEKIT_URL = import.meta.env.VITE_IMAGEKIT_URL;
	let imageLoaded = false;
	let imgElement: HTMLImageElement;

	// Remove the domain and get the path
	const getImagePath = (url: string) => {
		try {
			const urlObj = new URL(url);
			return urlObj.pathname;
		} catch {
			return url.startsWith('/') ? url : `/${url}`;
		}
	};

	// Generate ImageKit URL with transformations
	const getImageUrl = (path: string, w: number, q: number = quality) => {
		const transformations = [`tr:w-${w}`, `q-${q}`, 'f-auto'].filter(Boolean);
		return `${IMAGEKIT_URL}${path}?${transformations.join(',')}`;
	};

	// Generate srcset for responsive images
	const generateSrcSet = (path: string) => {
		const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
		return widths.map((w) => `${getImageUrl(path, w)} ${w}w`).join(', ');
	};

	const imagePath = getImagePath(src);
	const srcset = generateSrcSet(imagePath);
	const defaultSrc = getImageUrl(imagePath, 1920);

	// Handle image loading state
	const handleImageLoad = () => {
		imageLoaded = true;
	};

	onMount(() => {
		if (browser) {
			// Check if image is already cached
			if (imgElement?.complete) {
				handleImageLoad();
			}

			// Handle priority preload
			if (priority) {
				const preloadLink = document.createElement('link');
				preloadLink.rel = 'preload';
				preloadLink.as = 'image';
				preloadLink.href = defaultSrc;
				document.head.appendChild(preloadLink);

				return () => {
					preloadLink.remove();
				};
			}
		}
	});
</script>

<div
	class="image-wrapper {class_name}"
	style="position: relative; {height ? `height: ${height}px;` : ''} {width
		? `width: ${width}px;`
		: ''}"
>
	<img
		bind:this={imgElement}
		src={defaultSrc}
		{srcset}
		{sizes}
		{alt}
		loading={priority ? 'eager' : loading}
		fetchpriority={priority ? 'high' : 'auto'}
		decoding="async"
		class="image {imageLoaded ? 'loaded' : ''}"
		style="object-fit: {objectFit};"
		on:load={handleImageLoad}
	/>
</div>

<style>
	.image-wrapper {
		display: block;
		overflow: hidden;
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
	}

	.image {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.image.loaded {
		opacity: 1;
	}
</style>
