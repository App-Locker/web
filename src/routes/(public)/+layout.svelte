<script lang="ts">
	import { user } from '$lib/store/user.svelte';
	import { slide } from 'svelte/transition';

	let { children } = $props();
	let profileOpen = $state(false);
</script>

<!--Navigation Bar-->
<header class="border-b bg-background/80 p-6 lg:px-8">
	<nav class="flex items-center justify-between">
		<!--Left-->
		<div class="flex items-center gap-4">
			<a href="/"><img class="h-8 w-auto" src="logo.svg" alt="AppLocker Logo" /></a>
			<a class="text-sm font-medium leading-6" href="/#about">About</a>
			<a class="text-sm font-medium leading-6" href="/download">Download</a>
			<a class="text-sm font-medium leading-6" href="/changelog">Changelog</a>
		</div>

		<!--Right-->
		{#if !user.value}
			<div class="flex items-center gap-4">
				<a class="text-sm font-medium leading-6" href="/login">Login</a>
				<a class="text-sm font-medium leading-6" href="/register">Register</a>
			</div>
		{:else}
			<div class="flex items-center gap-4">
				<a class="text-sm font-medium leading-6" href="/dashboard">Dashboard</a>
				<button
					onclick={() => (profileOpen = !profileOpen)}
					class="rounded-full border px-3.5 py-1.5 text-sm font-medium leading-6"
					>{user.value?.name.charAt(0).toUpperCase()}</button
				>
			</div>
		{/if}
	</nav>
</header>

<!--Profile Dropdown-->
{#if profileOpen}
	<div transition:slide class="absolute right-0.5 z-50 mt-0.5 min-w-48 rounded-md border">
		<div class="flex flex-col items-start space-y-1 px-2 pb-3 pt-2">
			<a class="w-full px-4 py-2 text-sm font-medium leading-6 hover:bg-slate-100" href="/settings"
				>Settings</a
			>
			<button
				class="w-full px-4 py-2 text-left text-sm font-medium leading-6 hover:bg-slate-100"
				type="button"
				onclick={() => {
					user.logout();
					profileOpen = false;
				}}>Logout</button
			>
		</div>
	</div>
{/if}

<!--Main Content-->
<main class="min-h-[calc(100vh-6.6em)]">
	{@render children()}
</main>

<footer
	class="flex flex-col justify-between gap-8 border-t bg-white p-8 sm:flex-row sm:items-center"
>
	<div class="flex flex-col items-start justify-center gap-2">
		<img src="/logo.svg" class="h-12" alt="logo" />
		<p class="pl-2 text-sm font-medium">© 2025 all rights reserved</p>
	</div>
	<div class="flex flex-col gap-4 md:flex-row md:gap-32">
		<div class="flex flex-col gap-2">
			<h1 class="text-lg font-medium">Links</h1>
			<ul>
				<li><a href="/#home">Home</a></li>
				<li><a href="/#about">About</a></li>
			</ul>
		</div>
		<div class="flex flex-col gap-2">
			<h1 class="text-lg font-medium">Legal</h1>
			<ul>
				<li><a href="/terms-of-service">Terms of Service</a></li>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
			</ul>
		</div>
	</div>
</footer>
