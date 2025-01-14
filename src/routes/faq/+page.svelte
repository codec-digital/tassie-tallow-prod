<script lang="ts">
	//@ts-nocheck
	// import Seo from '$lib/components/SEO.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import Image from '$lib/components/Image.svelte';
	import {
		ArrowRight,
		CheckCircle,
		ChevronDown,
		Construction,
		Footprints,
		Loader2,
		Mail,
		Phone,
		Star
	} from 'lucide-svelte';

	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
		animate = true;
	});

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}

	let value = 'item-1';

	const faqSections = [
		{
			title: 'Common Questions',
			items: [
				{
					question: 'What is the Difference Between Tallow and Dripping?',
					answer: `
					<p class="mb-4"><strong>Tallow</strong> is derived from suet, which is the fat surrounding the kidneys and loins. Suet is highly vascularised and nutrient-dense, making it one of nature’s richest sources of conjugated linoleic acid (CLA). Tallow is typically much firmer than body fat at room temperature.</p>
					<p class="mb-4"><strong>Dripping</strong> is made from subcutaneous fat deposits around the body. When sourced from free-to-roam and grass-fed animals, it has a gorgeous golden colour and is usually quite soft and easy to apply any time of the year.</p>
					<p class="mb-4">Both tallow and dripping are ideal for frying and deep frying due to their high smoking point of approximately 250 degrees Celsius.</p>
					`
				},
				{
					question: 'Is Your Dripping Organic?',
					answer: `
					<p class="mb-4">Can you remember a time when ‘organic’ simply meant natural wholesome goodness? Long before organic became a verifiable registration, our Tasmanian farmers were raising cattle on lush wild paddocks, exposed to raw salty sea spray and rich heavy rains.</p>
					<p class="mb-4">Today, organic certification can mean the animal is fed with ‘organic’ soy, grain, wheat, corn, and palm kernel husks—far removed from the natural food chain of the animal. Instead, we are committed to providing a premium product that we see as superior to an organic label, which can be achieved bureaucratically.</p>
					<p class="mb-4"><strong>Our assurance is simple:</strong> our product is sourced from free-to-roam 100% grass-fed Tasmanian cattle. Nothing else is introduced to the diet, including grain.</p>
					`
				},
				{
					question: 'Is Your Dripping Truly 100% Grass-Fed?',
					answer: `<p class="mb-4">Meats Standard Australia (MSA) allows for grass-fed cattle to be grain-finished for a period of 70 days. We categorically do not subscribe to this practice. Our butchers buy straight from the paddock. Our cattle are 100% grass-fed, this means no grain, no antibiotics, no growth hormones.</p>`
				},
				{
					question: 'Do Your Products Contain Hydrogenated Fats?',
					answer: `
      <p class="mb-4">Our products, including dripping, tallow, ghee, and duck fat, are as primal as possible. As you can see in our photos, all fats can be distinguished by their unique colours, which would not be the case after hydrogenation.</p>
    `
				},
				{
					question: 'Do You Deodorise Your Product?',
					answer: `
      <p class="mb-4">No, we do not deodorise our products and this is one of our favourite questions to answer.. If you have used our beef product, you will understand why. People who are ‘dripping converts’ love its taste and aroma. For some, particularly those new to the world of dripping, the beef aroma can be strong. In this instance, lamb dripping can be a lovely way to introduce fat into the diet, filling the home with a delicious roast lamb aroma. </p>
      <p class="mb-4">Alternatively, lard is an all-time favourite; like cooking with liquid bacon, it has a sweet, slightly nutty aroma.</p>
      <p class="mb-4">Remember, our dripping is refined from animals that are 100% grass-fed and free to roam. Essentially, animals are a product of their environment. Aroma variations between batches are another indicator of authenticity. The concept of “paddock to plate” is realised in this product. </p>
    `
				},
				{
					question: 'How Long Does It Take to Ship My Order?',
					answer: `
      <p class="mb-4">We dispatch twice a week on Mondays and Thursdays. Orders from Tasmania have to leave the island, so they generally take a little longer. Our courier will give you a tracking code so you can see exactly where your order is along the way. Your order should arrive within 10 working days. Express postage is available for those requiring a speedier delivery, although these are still generally dispatched on Mondays and Thursdays.</p>
    `
				},
				{
					question: 'How Do I Store My Dripping?',
					answer: `
      <p class="mb-4">Generally, dripping can be stored in the pantry for extended periods, but this depends on how often you use it and what you do with the leftovers (cooking excess) after use. From our experience, dripping keeps perfectly well in a dripping pot. If you are buying larger quantities to use over extended periods, then dripping is best stored refrigerated or frozen. Our dripping is naturally preservative-free.</p>
    `
				},
				{
					question: 'How Do I Use My Dripping Pot?',
					answer: `
      <p class="mb-4">Our dripping pots are oven-proof earthenware, handmade in Tasmania. In our personal cooking, we utilise the fat left over. Fat takes on the flavours of the cooking, rich in fat-soluble vitamins A, D, E, and K, released during the cooking process.</p>
      <p class="mb-4">After cooking, the leftover fat is poured carefully into the dripping pot. You can reuse this straight away for your next meal or wait until your pot is filled with delicious layers resulting from a variety of meal preparations. </p>
      <p class="mb-4">We love placing a layered pot into an oven on low heat, creating a blend of nutrient-dense gourmet fat. We like to add a spoonful of this delicious fat to our daily cooking as a vitamin and flavour boost.</p>
    `
				},
				{
					question: 'Is Tallow Healthier Than Vegetable Oils?',
					answer: `
      <p class="mb-4">Tallow is considered by many to be a healthier cooking fat compared to highly processed vegetable oils. It contains beneficial nutrients like vitamins A, D, E, and K, as well as conjugated linoleic acid (CLA).</p>
      <p class="mb-4">Tallow also has a high smoke point, making it more stable for high-heat cooking compared to many vegetable oils that can oxidise and produce harmful compounds when heated. However, tallow is high in saturated fat, so it should be consumed in moderation as part of a balanced diet.</p>
    `
				},
				{
					question: 'How Long Does Tallow Last?',
					answer: `
      <p class="mb-4">When stored properly, tallow has a remarkably long shelf life. At room temperature in an airtight container, it can last 6-12 months. When refrigerated, tallow can stay good for up to 1 year. If frozen, it can last even longer - up to 3 years. Always check for any signs of rancidity (off smell or taste) before using stored tallow.</p>
    `
				},
				{
					question: 'Can Tallow Be Used For Skincare?',
					answer: `
      <p class="mb-4">Yes, tallow has gained popularity as a natural skincare ingredient. Its fatty acid profile is similar to human skin cells, making it easily absorbed. Tallow contains vitamins A, D, E, and K, which can nourish and protect the skin. It's often used in homemade balms, lotions, and soaps. Many people find it especially beneficial for dry or sensitive skin conditions. However, as with any new skincare product, it's wise to do a patch test first to check for any adverse reactions.</p>
    `
				},
				{
					question: 'How Do I Contact Tassie Tallow?',
					answer: `
      <p class="mb-4">Join the growing community of Australians who are rediscovering the benefits of tallow. Whether you're a chef, a skincare enthusiast, or someone looking to live more sustainably, Tassie Tallow has something for you.</p>
      <p class="mb-4">Get in touch with us today and start your journey towards a healthier, more natural lifestyle with the timeless benefits of tallow.</p>
    `
				}
			]
		}
	];
</script>

<section class="relative mx-auto flex h-[400px] flex-col items-center justify-center lg:h-[600px]">
	<Image
		src="/blog-6.jpg"
		alt="Tassie Tallow Tasmania"
		class_name="absolute inset-0 h-[400px] lg:h-[600px] w-full"
		priority={true}
		objectFit="cover"
	/>

	<div class="absolute inset-0 bg-foreground/40"></div>
	<div
		class=" absolute inset-0 mx-auto flex h-[400px] w-full max-w-screen-2xl flex-col items-center justify-center px-4 lg:h-[600px] lg:items-start"
	>
		<h1
			class="mx-auto max-w-2xl scroll-m-20 text-center font-heading text-3xl font-bold tracking-tight text-background lg:text-5xl"
		>
			Frequently Asked Questions
		</h1>

		<a
			href="#faq"
			onclick={handleAnchorClick}
			class="bg-tranpsarent mx-auto mt-4 flex w-48 items-center justify-center rounded-full border border-white px-6 py-3 text-center font-bold text-white transition-all hover:bg-white/10 hover:underline"
		>
			VIEW FAQ</a
		>
		<div class="mx-auto mt-4">
			<a
				href="/blog"
				class="pointer-events-auto flex flex-row items-center justify-center font-semibold text-white hover:underline lg:text-lg"
			>
				Explore more topics <ArrowRight class="ml-2 h-5 w-5" />
			</a>
		</div>
	</div>
</section>

<div class="px-4">
	<section
		id="faq"
		class="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-12 lg:py-24"
	>
		{#each faqSections as section, sectionIndex}
			<div class="mb-12 w-full max-w-2xl">
				<!-- <h2 class="mb-4 font-heading text-xl font-semibold lg:text-3xl">{section.title}</h2> -->
				<Accordion.Root class="w-full" type="single" bind:value>
					{#each section.items as item, itemIndex}
						<Accordion.Item open={value} value={`item-${itemIndex + 1}`} class="border-muted">
							<Accordion.Trigger
								class="text-left font-heading font-medium text-secondary lg:text-xl"
								>{item.question}</Accordion.Trigger
							>
							<Accordion.Content class="text-md py-4 pl-4 text-secondary">
								{@html item.answer}
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</div>
		{/each}
		<Button variant="link" href="/contact" class="text-base text-secondary lg:text-lg"
			>Didn't find your answer? Contact us instead</Button
		>
	</section>
</div>
