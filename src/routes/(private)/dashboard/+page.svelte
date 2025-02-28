<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import NavLink from '$lib/components/dashboard/NavLink.svelte';
	import {
		FileClockIcon,
		FolderOpenIcon,
		HouseIcon,
		MinusIcon,
		PlusIcon,
		SettingsIcon,
		UserIcon
	} from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	if (!page.url.hash && browser) {
		page.url.hash = '#home';
		goto(page.url);
	}
</script>

<main class="grid grid-cols-[384px_auto] overflow-x-hidden bg-gray-100">
	<aside class="z-10 min-h-screen bg-white shadow-md">
		<h1 class="px-4 py-8 text-2xl font-bold text-gray-800">AppLocker</h1>

		<nav class="flex flex-col gap-2">
			<NavLink href="#home" text="Home" Icon={HouseIcon} />
			<NavLink href="#apps" text="Manage Applications" Icon={FolderOpenIcon} />
			<NavLink href="#log" text="Activity Log" Icon={FileClockIcon} />
			<NavLink href="#settings" text="Settings" Icon={SettingsIcon} />
			<NavLink href="#account" text="Your Account" Icon={UserIcon} />
		</nav>
	</aside>

	{#key page.url.hash}
		{@const duration = 275}

		<div
			in:fly={{ duration, x: 500, opacity: 0, delay: duration }}
			out:fly={{ duration, x: -500, opacity: 0 }}
		>
			{#if page.url.hash === '#home'}
				<div class="p-8">
					<h2 class="text-2xl font-bold text-gray-800">Home</h2>
					<p class="mt-4 text-gray-800">
						Welcome to AppLocker! This is a simple application that allows you to manage the
						applications installed on your computer.
					</p>
				</div>
			{:else if page.url.hash === '#apps'}
				<div class="flex h-8 justify-end gap-2 bg-gray-200">
					<button><MinusIcon /></button>
					<button><SettingsIcon /></button>
					<button><PlusIcon /></button>
				</div>
				<div class="p-8">
					<h2 class="text-2xl font-bold text-gray-800">Manage Applications</h2>
					<p class="mt-4 text-gray-800">
						Here you can view and manage the applications installed on your computer. You can also
						add new applications to the list.
					</p>
				</div>
			{:else if page.url.hash === '#log'}
				<div class="p-8">
					<h2 class="text-2xl font-bold text-gray-800">Activity Log</h2>
					<p class="mt-4 text-gray-800">
						Here you can view the activity log of the applications installed on your computer. You
						can see when an application was installed, updated, or removed.
					</p>
				</div>
			{:else if page.url.hash === '#settings'}
				<div class="p-8">
					<h2 class="text-2xl font-bold text-gray-800">Settings</h2>
					<p class="mt-4 text-gray-800">
						Here you can change the settings of the application. You can change the theme, language,
						and other preferences.
					</p>
				</div>
			{:else if page.url.hash === '#account'}
				<div class="p-8">
					<h2 class="text-2xl font-bold text-gray-800">Your Account</h2>
					<p class="mt-4 text-gray-800">
						Here you can view and manage your account. You can change your password, email, and
						other information.
					</p>
				</div>
			{/if}
		</div>
	{/key}
</main>
