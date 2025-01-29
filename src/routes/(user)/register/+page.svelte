<script lang="ts">
	import { user } from '$lib/store/user.svelte';

	let email = '';
	let username = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = '';
	let isSubmitting = false;

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		// password validation
		if (password !== confirmPassword) {
			errorMessage = 'Passwords do not match.';
			return;
		} else if (password.length < 8) {
			errorMessage = 'Password must be at least 8 characters long.';
			return;
		}

		try {
			await user.register(email, password, username);
			await user.login(email, password);
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
			<h3 class="text-lg font-semibold leading-none tracking-tight">Register</h3>
			<p class="text-sm text-muted-foreground">
				Enter your email and password to create your account.
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

				<!-- Username Input -->
				<fieldset class="space-y-2">
					<legend class="text-sm font-medium">Name</legend>
					<input
						bind:value={username}
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-input"
						id="username"
						name="username"
						type="text"
						aria-required="true"
						placeholder="john_doe"
						required
						autocomplete="username"
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

				<!-- Confirm Password Input -->
				<fieldset class="space-y-2">
					<legend class="text-sm font-medium">Confirm Password</legend>
					<input
						bind:value={confirmPassword}
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-input"
						id="confirm-password"
						name="confirm"
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
					{isSubmitting ? 'Submitting...' : 'Create your account'}
				</button>

				<!-- Logout Button -->
				<button
					type="button"
					on:click={() => user.logout()}
					class="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
					>Logout
				</button>
			</form>
		</div>
	</div>
</div>
