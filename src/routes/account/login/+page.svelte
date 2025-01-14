<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);

	async function handleSubmit() {
		loading = true;
		// Add your login logic here
		loading = false;
	}
</script>

<section class="bg-muted/30 px-4 py-12 lg:px-10 xl:px-20">
	<div class="flex flex-col items-center justify-center">
		<h4 class="mb-0 font-sans text-lg font-bold">SPECIAL FAT CLUB</h4>
		<h2 class="mb-0 mt-2 text-center text-3xl lg:text-4xl">
			Sign up for Unique & Limited Release Products
		</h2>
	</div>
</section>

<div class="flex w-full items-center justify-center py-24">
	<Card class="mx-auto  w-full max-w-md border-none shadow-none">
		<CardHeader>
			<CardTitle class="text-center font-heading text-2xl">Login</CardTitle>
		</CardHeader>
		<CardContent>
			<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-8">
				<div class="space-y-1">
					<Label for="email">Email</Label>
					<Input
						class="rounded-full border-foreground"
						id="email"
						type="email"
						placeholder="Email"
						bind:value={email}
						required
					/>
				</div>

				<div class="space-y-1">
					<div class="flex items-center justify-between">
						<Label for="password">Password</Label>
						<a href="/" class="text-sm text-muted-foreground hover:underline">
							Forgot your password?
						</a>
					</div>
					<Input
						class="rounded-full border-foreground"
						id="password"
						type="password"
						placeholder="Password"
						bind:value={password}
						required
					/>
				</div>

				<Button type="submit" class="w-full rounded-full" disabled={loading}>
					{loading ? 'Signing in...' : 'Sign in'}
				</Button>

				<p class="text-center text-sm text-muted-foreground">
					Don't have an account?
					<a href="/" class="text-foreground hover:underline"> Create account </a>
				</p>
			</form>
		</CardContent>
	</Card>
</div>

<style>
	:global(.font-heading) {
		font-family: 'Merriweather', serif;
	}
</style>
