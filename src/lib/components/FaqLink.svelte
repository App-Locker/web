<script lang="ts">
	import { ChevronDownIcon } from 'lucide-svelte/icons';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	type Props = {
		question: string;
		children: Snippet;
	};

	let { question, children }: Props = $props();

	let faqOpen = $state(false);
</script>

<button
	class="flex w-full justify-between border-b-2 border-gray-200 py-4 text-left"
	onclick={() => (faqOpen = !faqOpen)}
>
	{question}
	<ChevronDownIcon />
</button>

{#if faqOpen}
	<div transition:slide class="mb-4 py-4">
		{@render children()}
	</div>
{/if}
