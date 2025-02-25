<script lang="ts">
	import { Icon as LucideIcon } from 'lucide-svelte';
	import {
		LockKeyholeIcon,
		ShieldCheckIcon,
		MonitorSmartphoneIcon,
		SmileIcon,
		GiftIcon,
		ZapIcon
	} from 'lucide-svelte/icons';

	type Feature = {
		title: string;
		description: string;
		Icon: typeof LucideIcon;
	};

	let features: Feature[] = $state([
		{
			title: 'App Locking',
			description: 'Easily lock any app on your device for added privacy.',
			Icon: LockKeyholeIcon
		},
		{
			title: 'Data Protection',
			description: 'Keep your personal information secure from prying eyes.',
			Icon: ShieldCheckIcon
		},
		{
			title: 'Cross-Device Compatibility',
			description: 'Works smoothly on all Windows devices.',
			Icon: MonitorSmartphoneIcon
		},
		{
			title: 'User-Friendly',
			description: 'Simple and intuitive interface for easy app management.',
			Icon: SmileIcon
		},
		{
			title: 'Completely Free',
			description: 'Enjoy full functionality at no cost.',
			Icon: GiftIcon
		},
		{
			title: 'Quick Setup',
			description: 'Get started in minutes and protect your apps effortlessly.',
			Icon: ZapIcon
		}
	]);
</script>

{#each features as { title, description, Icon }}
	<div
		class="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-4 shadow-lg"
	>
		<h2 class="text-lg font-bold text-gray-600">{title}</h2>
		<p class="text-gray-400">{description}</p>

		<Icon
			class="absolute right-4 top-1/2 z-10 h-20 w-20 -translate-y-1/2 text-gray-200 opacity-40 sm:h-24 sm:w-24"
		/>
	</div>
{/each}
