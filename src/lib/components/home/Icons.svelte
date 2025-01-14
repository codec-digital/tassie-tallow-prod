<script>
	import icon1 from '/src/lib/assets/icons/icon01.png?enhanced';
	import icon2 from '/src/lib/assets/icons/icon02.png?enhanced';
	import icon3 from '/src/lib/assets/icons/icon03.png?enhanced';
	import icon4 from '/src/lib/assets/icons/icon04.png?enhanced';
	import icon5 from '/src/lib/assets/icons/icon05.png?enhanced';
	import icon6 from '/src/lib/assets/icons/icon06.png?enhanced';

	const benefits = [
		{
			icon: icon1,
			title: 'HYDRATING ',
			description: 'SKIN NOURISHING'
		},
		{
			icon: icon2,
			title: 'HEALTHY FATS',
			description: 'HEALTHY FATS'
		},
		{
			icon: icon3,
			title: 'FREE FROM',
			description: 'HORMONE FREE'
		},
		{
			icon: icon4,
			title: 'NUTRIENT RICH',
			description: 'NUTRIENT RICH'
		},
		{
			icon: icon5,
			title: 'GRASS-FED',
			description: 'GRASS-FED'
		},
		{
			icon: icon6,
			title: 'NATURAL &',
			description: 'TASMANIAN RAISED'
		}
	];
</script>

<div class="">
	<section class="mx-auto flex max-w-7xl flex-col px-4">
		<div class="mx-auto grid w-full grid-cols-2 gap-4 pb-12 lg:gap-8 xl:grid-cols-6">
			{#each benefits as benefit}
				<div class="col-span-1 flex w-full flex-col">
					<enhanced:img
						src={benefit.icon}
						class="mx-auto h-32 w-32"
						alt={benefit.title}
						sizes="144px"
					/>
					<!-- <h3 class="lg:text-md font-heading mb-0 text-center text-sm font-medium text-[#815E32]">
						{benefit.title}
					</h3> -->
					<p
						class="lg:text-md mx-auto mb-0 inline-block rounded-full border border-foreground px-4 py-1 text-center text-sm font-bold"
					>
						{benefit.description}
					</p>
				</div>
			{/each}
		</div>
	</section>
</div>
