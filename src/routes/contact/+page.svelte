<script>
	import { Mail, Phone, Clock } from 'lucide-svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Alert from '$lib/components/ui/alert';

	let animate = false;

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
		animate = true;
	});

	let value = 'item-1';

	const faqSections = [
		{
			title: 'Common Questions',
			items: [
				{
					question: 'How quickly can I expect a response?',
					answer: `
      <p class="mb-4">We strive to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</p>
    `
				},
				{
					question: 'What information should I include in my email?',
					answer: `
      <p class="mb-4">To help us assist you more efficiently, please include:</p>
      <p class="mb-4">Your full name</p>
      <p class="mb-4">Order number (if applicable)</p>
      <p class="mb-4">Detailed description of your query or issue</p>
    `
				},
				{
					question: 'What Happens If I Have An Issue With My Order',
					answer: `
      <p class="mb-4">If you have any problems with your order, please contact us immediately. We're here to help with:</p>
      <p class="mb-4">Shipping delays</p>
      <p class="mb-4">Product quality concerns</p>
      <p class="mb-4">Order modifications</p>
      <p class="mb-4">Returns and refunds</p>
    `
				},
				{
					question: 'Where can I find more details about your products?',
					answer: `
      <p class="mb-4">Need more details about our products? We're happy to provide:</p>
      <p class="mb-4">Nutritional information</p>
      <p class="mb-4">Sourcing details</p>
      <p class="mb-4">Cooking tips and recipes</p>
      <p class="mb-4">Bulk ordering options</p>
      <p class="mb-4">Alternatively our FAQ page should help you a lot.</p>
    `
				},
				{
					question: 'How Do I Become A Wholesaler for Tassie Tallow?',
					answer: `
      <p class="mb-4">Interested in stocking Tassie Tallow products? Contact Austin directly on 0467 014 040 to discuss wholesale opportunities and pricing.</p>
    `
				},
				{
					question: 'Feedback and Suggestions',
					answer: `
      <p class="mb-4">We value your input! If you have ideas for new products, improvements to our service, or general feedback, please don't hesitate to reach out. Your thoughts help us grow and improve.</p>
      <p class="mb-4">For the most up-to-date information on our products, shipping, and policies, please refer to our FAQ, Shipping Policy, and Terms & Conditions pages on our website.</p>
      <p class="mb-4">Thank you for choosing Tassie Tallow. We look forward to hearing from you!</p>
      `
				}
			]
		}
	];

	const contactMethods = [
		{ value: 'phone', label: 'Phone' },
		{ value: 'email', label: 'Email' }
	];

	let submitted = false;
	let loading = false;

	let name = '';
	let email = '';
	let phone = '';
	let preferredContact = 'Either';
	let message = '';
	let type = 'General Contact Form';

	function resetForm() {
		name = '';
		email = '';
		phone = '';
		preferredContact = 'Either';
		message = '';
	}

	// async function handleSubmit(e: Event) {
	// 	e.preventDefault();
	// 	loading = true;

	// 	const formData = {
	// 		name,
	// 		email,
	// 		phone,
	// 		preferredContact,
	// 		message,
	// 		type
	// 	};

	// 	try {
	// 		const response = await fetch('/api/send-email', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify(formData)
	// 		});

	// 		if (!response.ok) {
	// 			throw new Error('Failed to send email');
	// 		}

	// 		const result = await response.json();

	// 		if (result.success) {
	// 			resetForm();
	// 			submitted = true;
	// 		} else {
	// 			throw new Error(result.error || 'Failed to send email');
	// 		}
	// 	} catch (error) {
	// 		console.error('Error sending email:', error);
	// 		// Handle error (e.g., show error message to user)
	// 	} finally {
	// 		loading = false;
	// 	}
	// }
</script>

<section class="mx-auto flex items-center justify-center bg-primary text-background">
	<div
		class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12 text-center lg:py-24"
	>
		<h1
			class="mx-auto mb-0 mt-12 max-w-2xl scroll-m-20 text-center font-heading text-3xl font-bold tracking-tight text-background lg:mx-0 lg:text-5xl"
		>
			GET IN TOUCH
		</h1>
		<p class="mt-12 max-w-3xl font-bold lg:text-xl">
			At Tassie Tallow, we value clear communication and excellent customer service. Here's how you
			can reach us:
		</p>
		<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
			<div
				class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-accent"
			>
				<div class="flex items-center justify-center gap-2">
					<Mail class="h-6 w-6 transition group-hover:text-accent" />
					<h3 class="mb-0 font-sans text-lg font-semibold text-background">Email</h3>
				</div>

				<div class="mt-6">
					<p class="text-center text-lg font-semibold text-background underline">
						contact@tassietallow.com.au
					</p>
				</div>
			</div>
			<div
				class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-accent"
			>
				<div class="flex items-center justify-center gap-2">
					<Phone class="h-6 w-6 font-sans transition group-hover:text-accent" />
					<h3 class="mb-0 font-sans text-lg font-semibold text-background">Phone</h3>
				</div>

				<div class="mt-6">
					<p class="text-center text-lg font-semibold text-background underline">0467 014 040</p>
				</div>
			</div>
			<div
				class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-accent"
			>
				<div class="flex items-center justify-center gap-2">
					<Clock class="h-6 w-6 transition group-hover:text-accent" />
					<h3 class="mb-0 font-sans text-lg font-semibold text-background">Office Hours</h3>
				</div>

				<div class="mt-6">
					<p class="text-center text-lg font-semibold text-background underline">
						9:00 AM - 5:00 PM AEST
					</p>
				</div>
			</div>
		</div>
		<p class="mt-12 max-w-3xl font-bold lg:text-xl">
			Turnaround on response may vary due to the dynamic demands of our days. For all non-urgent
			enquiries, please submit the form below and we will get back to you as soon as possible.
		</p>
		<form id="form" class=" relative mt-12 flex w-full max-w-3xl flex-col gap-4 px-4 pb-12 pt-6">
			<div class="flex w-full flex-col gap-1.5">
				<Input
					required
					type="text"
					id="name"
					placeholder="Name"
					bind:value={name}
					class="w-full rounded-full border-none bg-background p-4 text-sm  text-foreground lg:p-6 lg:text-lg "
				/>
			</div>
			<div class="mt-6 flex gap-4 lg:mt-12">
				<div class="flex w-1/2 flex-col gap-1.5">
					<Input
						required
						type="email"
						id="email"
						placeholder="Email"
						bind:value={email}
						class="w-full rounded-full border-none bg-background p-4 text-sm text-foreground lg:p-6 lg:text-lg "
					/>
				</div>
				<div class="flex w-1/2 flex-col gap-1.5">
					<Input
						required
						type="phone"
						id="phone"
						placeholder="Phone"
						bind:value={phone}
						class="w-full rounded-full border-none bg-background p-4 text-sm text-foreground lg:p-6 lg:text-lg "
					/>
				</div>
			</div>

			<div class="mt-6 flex w-full flex-col gap-1.5 lg:mt-12">
				<Select.Root type="single">
					<Select.Trigger
						class="w-full rounded-full border-none bg-background p-4 text-sm text-foreground lg:p-6 lg:text-lg "
						placeholder="Either">Select preferred contact option</Select.Trigger
					>
					<Select.Content>
						<Select.Group>
							{#each contactMethods as method}
								<Select.Item value={method.value} label={method.label}>{method.label}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
			<div class="mt-6 flex w-full flex-col gap-1.5 lg:mt-12">
				<Textarea
					required
					placeholder="Type your message here."
					id="message-2"
					bind:value={message}
					class="min-h-40 w-full rounded-3xl border-none bg-background p-4 text-sm text-foreground lg:p-6 lg:text-lg  "
				/>
				<p class="text-sm text-muted-foreground"></p>
			</div>
			{#if !submitted}
				<div in:fly={{ x: -50, duration: 300 }} out:fly={{ x: -50, duration: 300 }}>
					{#if !loading}
						<div class="mt-6 flex w-full justify-center">
							<Button
								type="submit"
								variant="outline"
								class="text-md flex items-center justify-center rounded-full border-primary bg-[#86A38D] px-10 py-6 font-semibold lg:text-xl"
							>
								SUBMIT
							</Button>
						</div>
					{:else}
						<div class="mt-6 flex w-full justify-center">
							<Button
								variant="outline"
								disabled
								class="flex w-32 items-center justify-center rounded-none border-primary text-lg"
							>
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							</Button>
						</div>
					{/if}
				</div>
			{:else}
				<div in:fly={{ x: 50, duration: 300, delay: 300 }} out:fly={{ x: -50, duration: 300 }}>
					<Alert.Root class="text-left hover:bg-accent">
						<CheckCircle class="h-4 w-4" />
						<Alert.Title>Your submission has been received!</Alert.Title>
						<Alert.Description class="text-wrap">
							Keep an eye out. A member of our team will get back to you within 3 business days.
						</Alert.Description>
					</Alert.Root>
				</div>
			{/if}
		</form>
	</div>
</section>

<div class="">
	<section
		id="promo"
		class="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-12 lg:pt-24"
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
	</section>
</div>
