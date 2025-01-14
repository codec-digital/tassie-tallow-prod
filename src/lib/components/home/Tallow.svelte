<script>
	import Button from '../ui/button/button.svelte';
	import Image from '../Image.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="p-4 lg:p-20">
	<div
		class="flex flex-col-reverse rounded-3xl bg-white/60 lg:grid lg:grid-cols-2 lg:gap-12 lg:p-20"
	>
		<div class="flex max-w-2xl flex-col justify-center px-6 py-10 lg:py-0">
			<h4 class="mb-0 text-center font-sans text-lg font-bold lg:text-left">FAQ</h4>
			<h2 class="mt-2 text-center text-3xl lg:text-left lg:text-4xl">
				What is <span class=" inline-block underline">Tallow</span>?
			</h2>
			<p class="text-center text-foreground/80 lg:text-left">
				Tallow is a rendered form of beef or mutton fat, typically derived from the fatty tissue of
				these animals. It has a long history of use in cooking, candle making, soap production, and
				as a lubricant. One of the key benefits of tallow is its high melting point, which makes it
				ideal for cooking at high temperatures without breaking down or producing harmful compounds.
			</p>
			<p class="text-center text-foreground/80 lg:text-left">
				It is also rich in essential fatty acids and vitamins, particularly vitamin A and vitamin D,
				which are beneficial for skin health. Tallow is highly moisturizing and nourishing, making
				it a popular ingredient in natural skincare products. Additionally, it is a sustainable
				byproduct of the meat industry, making it an eco-friendly alternative to many synthetic fats
				and oils.
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
			<Image
				src="/blog-4.jpeg"
				alt="Tassie Tallow Tasmania"
				class_name="absolute inset-0 rounded-3xl h-[400px] lg:h-[600px] w-full"
				priority={true}
				objectFit="cover"
			/>
		</div>
	</div>
</section>
