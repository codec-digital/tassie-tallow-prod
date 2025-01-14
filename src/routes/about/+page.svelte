<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Image from '$lib/components/Image.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { ArrowRight } from 'lucide-svelte';
	import aboutGif from '$lib/assets/gifs/about.gif';

	let value = 'item-1';

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
					question: 'Is Tallow Healthier Than Vegetable Oils?',
					answer: `
					<p class="mb-4">Tallow is considered by many to be a healthier cooking fat compared to highly processed vegetable oils. It contains beneficial nutrients like vitamins A, D, E, and K, as well as conjugated linoleic acid (CLA). </p>
					<p class="mb-4">Tallow also has a high smoke point, making it more stable for high-heat cooking compared to many vegetable oils that can oxidise and produce harmful compounds when heated. However, tallow is high in saturated fat, so it should be consumed in moderation as part of a balanced diet.</p>
					`
				},
				{
					question: 'Can Tallow Be Used For Skincare?',
					answer: `
					<p class="mb-4">Yes, tallow has gained popularity as a natural skincare ingredient. Its fatty acid profile is similar to human skin cells, making it easily absorbed. Tallow contains vitamins A, D, E, and K, which can nourish and protect the skin. It's often used in homemade balms, lotions, and soaps. Many people find it especially beneficial for dry or sensitive skin conditions. However, as with any new skincare product, it's wise to do a patch test first to check for any adverse reactions.</p>
					`
				}
			]
		}
	];
</script>

<section class="relative mx-auto flex h-[400px] flex-col items-center justify-center lg:h-[600px]">
	<Image
		src="/about.jpg"
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
			Our Story
		</h1>
		<p class="mx-auto max-w-2xl text-center text-lg font-bold text-white lg:text-xl">
			Our mission at Tassie Tallow is to build a trusted hub for health and positive living, where
			individuals frustrated by the limitations of mainstream medicine can find effective,
			science-backed solutions.
		</p>
		<a
			href="#history"
			onclick={handleAnchorClick}
			class="bg-tranpsarent mx-auto mt-4 flex w-48 items-center justify-center rounded-full border border-white px-6 py-3 text-center font-bold text-white transition-all hover:bg-white/10 hover:underline"
		>
			OUR HISTORY</a
		>
	</div>
</section>

<section class="px-4 py-12 lg:py-20">
	<div class="mx-auto flex max-w-5xl justify-center text-center">
		<div>
			<div class="text-base">
				<div class="">
					<p class="col-span-1 mb-0 mt-4 text-lg font-bold text-secondary lg:text-2xl">
						We are committed to empowering our customers—especially those motivated by serious
						health challenges like diabetes, heart disease, and obesity—by providing quality
						information, practical guides, and authentic, evidence-based science. Our range of
						carefully curated products and supplements is designed to support and accelerate health
						goals, with a special emphasis on featuring Tasmanian products. The uniqueness of
						Tasmania, with its rigorous farming standards and exceptional quality, is at the heart
						of what we offer, providing a distinct, world-renowned advantage that sets us apart from
						the competition.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class=" p-4 lg:p-20" id="history">
	<div
		class="flex flex-col-reverse rounded-3xl bg-white/80 lg:grid lg:grid-cols-2 lg:gap-12 lg:p-20"
	>
		<div class="flex max-w-2xl flex-col justify-center px-6 py-10 lg:py-0">
			<h4 class="mb-0 text-center font-sans text-lg font-bold lg:text-left">ABOUT US</h4>
			<h2 class="mt-2 text-center text-3xl lg:text-left lg:text-4xl">
				Our <span class=" inline-block underline">History</span>
			</h2>
			<p class="text-center text-foreground/80 lg:text-left">
				Tassie Tallow was founded approximately 13 to 14 years ago by Martin Waldhoff, who developed
				a deep passion for the concepts of "food for fuel" and "nutrition as health." His journey
				began with the Paleo diet, which quickly led to significant improvements in his health,
				energy levels, and overall lifestyle.
			</p>
			<p class="text-center text-foreground/80 lg:text-left">
				Over the years, Tassie Tallow has observed that while popular lifestyle diets—such as Paleo,
				Keto, Carnivore, and Low Carb—may change, the foundational pillars of good health remain
				consistent. Chief among these is the use of tallow and animal fats, which have proven to be
				cornerstones for both health and flavor.
			</p>
			<p class="text-center text-foreground/80 lg:text-left">
				When Tassie Tallow first started, sourcing quality suet and trimmings was a major challenge,
				as animal fat was largely considered a waste product. However, through Martin's persistent
				efforts, butchers and abattoirs across Tasmania began to work with him, adjusting their
				processes to meet his exacting standards.
			</p>
			<p class="text-center text-foreground/80 lg:text-left">
				Today, Tassie Tallow has transformed a once-overlooked waste product into a high-quality
				offering that promotes positive change and enhances the health and lifestyles of its
				customers. Along the way, the company has earned several prestigious awards, including
				accolades from the Royal Hobart Fine Food Awards for its Beef Tallow and Ghee.
			</p>

			<a
				href="/blog"
				class="mx-auto mt-4 flex w-60 items-center justify-center rounded-full bg-primary px-6 py-3 text-center font-bold text-white transition-all hover:bg-primary/80 lg:mx-0"
			>
				EXPLORE MORE TOPICS</a
			>
			<div class="mt-4 flex items-center justify-center text-center lg:w-60 lg:text-left">
				<Button
					variant="link"
					href="/faq"
					class="pointer-events-auto text-lg font-semibold text-foreground"
				>
					More FAQs <ArrowRight class="ml-1 h-5 w-5" />
				</Button>
			</div>
		</div>
		<div>
			<div class="relative flex w-full flex-col">
				<div class="relative aspect-square w-full">
					<img
						alt="About Us Gif"
						src={aboutGif}
						class="absolute inset-0 h-auto w-full rounded-3xl object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="">
	<section
		id="promo"
		class="mx-auto flex max-w-3xl flex-col items-center justify-center border-b border-muted px-4 py-12"
	>
		<h2
			class="mb-12 w-full scroll-m-20 text-center font-heading text-2xl font-medium tracking-tight text-[#815E32] lg:text-3xl"
		>
			COMMON QUESTIONS WE GET ASKED
		</h2>

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

		<div class="mx-auto flex w-full items-center justify-center px-4">
			<a href="/faq" class="text-center text-secondary hover:underline lg:text-lg">
				<p class="flex max-w-md flex-wrap text-center">
					Didn't find your answer? Check our FAQ page for more common questions
				</p>
			</a>
		</div>
	</section>
</div>
