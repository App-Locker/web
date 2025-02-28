<script lang="ts">
	import { user } from '$lib/store/user.svelte';

	let email = '';
	let password = '';
	let errorMessage = '';
	let isSubmitting = false;

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		try {
			user.login(email, password);
		} catch (error: any) {
			errorMessage = error.message || 'An unknown error occurred.';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<div class="grid h-full min-h-screen place-items-center p-8">
	<div
		class="w-full max-w-md rounded-lg border bg-card bg-gradient-to-b from-white to-slate-50 text-card-foreground shadow-sm"
	>
		<div class="flex flex-col space-y-1.5 p-6 pb-0">
			<h3 class="text-lg font-semibold leading-none tracking-tight">Login</h3>
			<p class="text-sm text-muted-foreground">
				Enter your email and password to login to your account.
			</p>
		</div>

		<div class="w-full p-6">
			<form on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-4">
				<!-- Email Input -->
				<fieldset class="space-y-2">
					<legend class="text-sm font-medium">Email</legend>
					<input
						bind:value={email}
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-input"
						id="email"
						name="email"
						type="email"
						aria-required="true"
						placeholder="example@gmail.com"
						required
						autocomplete="email"
					/>
				</fieldset>

				<!-- Password Input -->
				<fieldset class="space-y-2">
					<legend class="text-sm font-medium">Password</legend>
					<input
						bind:value={password}
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-input"
						id="password"
						name="password"
						type="password"
						aria-required="true"
						placeholder="********"
						required
						autocomplete="new-password"
					/>
				</fieldset>

				<!-- Error Message -->
				{#if errorMessage}
					<div class="text-sm font-medium text-destructive">{errorMessage}</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					class="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Sining in...' : 'Sing In'}
				</button>
			</form>
		</div>
	</div>
</div>
