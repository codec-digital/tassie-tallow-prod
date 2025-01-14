<script>
	import * as Carousel from '$lib/components/ui/carousel';
	import Image from '$lib/components/Image.svelte';

	const reviews = [
		{
			content:
				'The moisturiser from Tassie Tallow is amazing. It’s the only moisturiser that easily got rid of my dry dermatitis and has kept it away. I also use it on my son’s eczema-prone skin to help alleviate his symptoms too. Highly recommend!!',
			name: 'Lissa Ewing'
		},
		{
			content:
				'The skincare range 😍 highly recommend!! I’ve tried other brands and was so happy to find a local Tassie company, bonus that’s it’s the best out of them all. Thank you 🫶🏼✨',
			name: 'Lisa Phillips'
		},
		{
			content:
				'New to Tassie Tallow soap - I ordered and received yesterday, the four (4) pack:  Wild Pure Storm and Nude. I love exfoliating soap and wowsers - Nude is unreal!!! It is the bees knees and I luuurrve it. Thanks TT.',
			name: 'Anita Rogers'
		},
		{
			content:
				'😍Absolutely love the 4L Beef Tallow bucket! Such a great money saver and such lovely fat to eat and cook with. Thank you!!!',
			name: 'Robyn Gray'
		},
		{
			content:
				'Oh my goodness...I’ve never known Aust.Post to work so quickly...which is great because I’ve had my heart set on healthy fats since I placed my order!  My lamb dripping, ghee and tallow kunzea cream arrived this morning!  Have already used the ghee for some garlic steak bites - delicious, nutritious and satiating!  Can’t wait to break into the lamb dripping for some sneaky fried potato wedges 🙊😍👍😂   Wonderful healthy and sustainable products, thank you!',
			name: 'Ange Brown'
		},

		{
			content:
				'So impressed with these guys. They went above and beyond to get my Tallow to me. You can tell they love what they do, appreciate their customers and their Tallow is so tasty! Highly recommended. Thanks team, nothing but rave reviews from me. ♥️',
			name: 'Monica Kade'
		},
		{
			content:
				'Unique and delicious product range, five star customer service, highly recommended!',
			name: 'Sheik Yabouti'
		},
		{
			content:
				"This is my first time to buy the tassie tallow face & body balm. It's bigger and heavier than expected. I am sooo excited to use it! And I truely appreciate the card with my name hand written on it. Kudos to the team, transaction and delivery process was fast too. 😃",
			name: 'Zen Nith'
		},
		{
			content:
				'I absolutely recommend the skincare range. I am currently using the Lemon Myrtle Tallow Face/Body Balm and the Lavender Whipped Tallow Balm, which are both amazing products. Feels hydrating & nutritious on the skin, smoothes out the lines, gives a healthy glow and an overall younger appearance. I won’t use anything else now. Thank you ✨🙏🏼✨',
			name: 'Julie Moore'
		}
	];
</script>

<section class=" px-4 pt-6 lg:px-10 lg:pt-20 xl:px-20">
	<div class="flex flex-col items-center justify-center border-b-2 border-muted pb-12 lg:pb-20">
		<h4 class="mb-2 font-sans text-lg font-bold">REVIEWS</h4>
		<h2 class=" flex flex-col items-center justify-center text-center text-3xl lg:text-5xl">
			Loved by Aussies <span class="mt-2 block text-lg lg:inline-block lg:pl-2 lg:text-xl"
				>(and their skin!)</span
			>
		</h2>
		<Carousel.Root class="mt-6 w-full" opts={{ align: 'start', loop: true }}>
			<Carousel.Content class="">
				{#each reviews as review}
					<Carousel.Item class="w-full basis-2/3 lg:basis-1/5">
						<div class="">
							<figure
								class="flex h-80 flex-col justify-between rounded-3xl bg-white/80 px-4 py-6 text-sm/6 lg:h-96 lg:p-8"
							>
								<blockquote class="line-clamp-6 text-lg font-bold">
									<p>
										"{review.content}"
									</p>
								</blockquote>
								<figcaption class="mt-6 flex items-center gap-x-4">
									<div>
										<div class="text-2xl font-semibold text-accent">★★★★★</div>
										<div class="font-bold text-gray-600">{review.name}</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<!-- <Carousel.Previous class="" />
					<Carousel.Next class="" /> -->
		</Carousel.Root>
	</div>
</section>
