<script>
	import { PlusIcon } from 'lucide-svelte';
</script>

<main class="grid-cols-[384px_auto ] grid bg-gray-100">
	<div class="min-h-screen bg-white p-8 shadow-md">
		<h1 class="mb-6 text-2xl font-bold text-gray-800">AppLocker</h1>

		<nav class="flex flex-col gap-2">
			<a href="#home" class="border-gray-800 px-4 py-2 text-gray-800 hover:border-l-2">Home</a>
			<a href="#apps" class="border-gray-800 px-4 py-2 text-gray-800 hover:border-l-2"
				>Manage Applications</a
			>
			<a href="#log" class="border-gray-800 px-4 py-2 text-gray-800 hover:border-l-2"
				>Activity Log</a
			>
			<a href="#settings" class="border-gray-800 px-4 py-2 text-gray-800 hover:border-l-2"
				>Settings</a
			>
			<a href="#account" class="border-gray-800 px-4 py-2 text-gray-800 hover:border-l-2"
				>Your Account</a
			>
		</nav>
	</div>

	<div class="flex h-8 justify-end bg-gray-200">
		<button><PlusIcon /></button>
	</div>
</main>
