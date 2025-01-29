<script lang="ts">
	import { user } from '$lib/store/user.svelte';

	let { children } = $props();
</script>

<!--Navigation Bar-->
<header class="border-b bg-background/80 p-6 lg:px-8">
	<nav class="flex items-center justify-between">
		<!--Left-->
		<div class="flex items-center gap-4">
			<a href="/"><img class="h-8 w-auto" src="logo.svg" alt="AppLocker Logo" /></a>
			<a class="text-sm font-semibold leading-6" href="/about-us">About us</a>
			<a class="text-sm font-semibold leading-6" href="/download">Download</a>
			<a class="text-sm font-semibold leading-6" href="/changelog">Changelog</a>
		</div>

		<!--Right-->
		{#if !user}
			<div class="flex gap-4">
				<a class="text-sm font-semibold leading-6" href="/login">Login</a>
				<a class="text-sm font-semibold leading-6" href="/register">Register</a>
			</div>
		{:else}
			<div class="flex gap-4">
				<a class="text-sm font-semibold leading-6" href="/dashboard">Dashboard</a>
				<button class="text-sm font-semibold leading-6">{user.value?.email}</button>
			</div>
		{/if}
	</nav>
</header>

<!--Main Content-->
<main class="min-h-[calc(100vh-6.6em)]">
	{@render children()}
</main>
