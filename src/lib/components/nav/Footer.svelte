<script>
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { ArrowRight } from 'lucide-svelte';
	import BackToTop from './BackToTop.svelte';

	let animate = false;
	let email = '';
	let loading = false;
	let success = false;
	let error = '';

	const navigation = {
		shop: [
			{ name: 'Cooking fats', href: '/search/good-fat' },
			{ name: 'Skincare', href: '/search/skincare' },
			{ name: 'Snacks & treats', href: '/search/snacks-treats' },
			{ name: 'Pet treats', href: '/search/tassie-k9' }
		],
		support: [
			{ name: 'About', href: '/about' },
			{ name: 'FAQ', href: '/faq' },
			{ name: 'Articles', href: '/blog' },
			{ name: 'Cooking', href: '/blog' }
		],
		company: [
			{ name: 'Login', href: '/account/login' },
			{ name: 'Register', href: '/account/login' },
			{ name: 'Special fat club', href: '#' }
		],
		legal: [
			{ name: 'Terms of service', href: '/legal' },
			{ name: 'Privacy policy', href: '/legal' },
			{ name: 'Returns & refunds', href: '/legal' },
			{ name: 'Shipping', href: '/legal' }
		],
		social: [
			{
				name: 'Phone',
				href: 'tel:0467014040',
				icon: ` <svg fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
               </svg>`
			},
			{
				name: 'Facebook',
				href: 'https://www.facebook.com/tassietallow/',
				icon: `<svg fill="currentColor" viewBox="0 0 24 24">
           <path
             fill-rule="evenodd"
             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
             clip-rule="evenodd"
           />
         </svg>`
			},

			{
				name: 'Instagram',
				href: 'https://www.instagram.com/tassie_tallow/?hl=en',
				icon: `<svg fill="currentColor" viewBox="0 0 24 24">
           <path
             fill-rule="evenodd"
             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
             clip-rule="evenodd"
           />
         </svg>`
			}
		]
	};
</script>

<footer class="p-4 text-white lg:p-10">
	<div class="rounded-3xl bg-primary text-white">
		<div class="relative mx-auto px-4 pb-14 pt-6 lg:px-12 lg:py-16">
			<div class="lg:grid lg:grid-cols-3 lg:gap-8">
				<div class="flex flex-col lg:pr-12">
					<h3 class="mb-6 text-center font-heading text-xl text-white lg:text-left">
						Sign up for Unique & Limited Release Products
					</h3>
					<div class="relative mb-2 flex w-full max-w-md items-center justify-center">
						<div class="flex-grow">
							<Input
								placeholder="Enter your email"
								type="search"
								id="search"
								name="search"
								required
								class="h-11 w-full  rounded-full border border-white bg-primary pl-4 pr-4 text-lg font-bold text-white placeholder:text-white/80  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
							/>
						</div>

						<Button
							type="submit"
							size="icon"
							class="{success
								? 'bg-primary hover:bg-green-600'
								: 'bg-primary hover:bg-[#244640]/80'}  absolute right-2 flex items-center justify-center rounded-full font-bold text-white transition duration-300 ease-in-out"
							disabled={loading || success}
						>
							{#if loading}
								<Loader2 class="h-5 w-5 animate-spin" />
							{:else if success}
								<CheckCircle class="h-5 w-5" />
							{:else}
								<ArrowRight class="h-full w-full" />
							{/if}
						</Button>
					</div>
					<p class=" text-md text-balance text-center font-bold lg:text-left">
						100% Tasmanian, Grass-fed Tallow. Handmade in small batches.
					</p>
					<div class="flex items-center justify-center gap-x-6 lg:mt-6 lg:justify-start">
						{#each navigation.social as item}
							<a href={item.href} class="">
								<span class="sr-only">{item.name}</span>
								{@html item.icon}
								<div class="h-6 w-6"></div>
							</a>
						{/each}
					</div>
				</div>
				<Accordion.Root class="-mt-4 w-full pb-12 lg:mt-0 lg:hidden" type="single">
					<Accordion.Item class="border-white/40">
						<Accordion.Trigger class="text-left font-heading font-medium  lg:text-xl"
							>SHOP</Accordion.Trigger
						>
						<Accordion.Content class="pl-4  text-base ">
							<ul role="list" class=" space-y-2 lg:space-y-1">
								{#each navigation.shop as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item class="border-white/40">
						<Accordion.Trigger class="text-left font-heading font-medium  lg:text-xl"
							>LEARN</Accordion.Trigger
						>
						<Accordion.Content class="pl-4  text-base ">
							<ul role="list" class=" space-y-2 lg:space-y-1">
								{#each navigation.support as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item class="border-white/40">
						<Accordion.Trigger class="text-left font-heading font-medium  lg:text-xl"
							>ACCOUNT</Accordion.Trigger
						>
						<Accordion.Content class="pl-4  text-base ">
							<ul role="list" class=" space-y-2 lg:space-y-1">
								{#each navigation.company as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item class="border-white/40">
						<Accordion.Trigger class="text-left font-heading font-medium  lg:text-xl"
							>SUPPORT</Accordion.Trigger
						>
						<Accordion.Content class="pl-4  text-base ">
							<ul role="list" class=" space-y-2 lg:space-y-1">
								{#each navigation.legal as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
				<div class="mt-16 hidden grid-cols-2 gap-8 lg:col-span-2 lg:mt-0 lg:grid">
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-lg font-semibold">SHOP</h3>
							<ul role="list" class=" space-y-1">
								{#each navigation.shop as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-lg font-semibold">LEARN</h3>
							<ul role="list" class=" space-y-1">
								{#each navigation.support as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-lg font-semibold">ACCOUNT</h3>
							<ul role="list" class=" space-y-1">
								{#each navigation.company as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-lg font-semibold">SUPPORT</h3>
							<ul role="list" class=" space-y-1">
								{#each navigation.legal as item}
									<li>
										<a href={item.href} class="text-md font-bold hover:underline">
											{item.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute bottom-4 left-0 flex w-full flex-col-reverse items-center justify-center px-4 text-white lg:flex-row lg:justify-between lg:px-12"
			>
				<a href="/" class="text-sm font-bold text-white/80"
					>&copy; 2024 Tassie Tallow. All rights reserved.</a
				>
				<div class="mb-2 flex gap-4 lg:mb-0">
					<a href="/" class="text-sm font-bold text-white/80 hover:text-white hover:underline"
						>Terms of service</a
					>
					<a href="/" class="text-sm font-bold text-white/80 hover:text-white hover:underline"
						>Privacy policy</a
					>
				</div>
			</div>
		</div>
	</div>
	<BackToTop />
</footer>
