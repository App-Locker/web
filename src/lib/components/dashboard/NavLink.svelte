<script lang="ts">
	import { page } from '$app/state';
	import { Icon as LucideIcon } from 'lucide-svelte';

	type Props = {
		text: string;
		Icon: typeof LucideIcon;
		href: string;
	};

	let { text, Icon, href }: Props = $props();

	let isActive = $derived(page.url.hash == href);
</script>

<a
	{href}
	class="flex items-center gap-2 border-gray-800 p-4 text-gray-800 hover:border-l-2 hover:bg-slate-50"
	class:border-l-2={isActive}
	class:bg-slate-50={isActive}
>
	<Icon />
	{text}
</a>
