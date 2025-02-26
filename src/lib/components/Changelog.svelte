<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		releaseDate: string;
		children: Snippet;
	};

	let { title, releaseDate, children }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
	<div class="">
		<h2 class="text-xl font-semibold uppercase text-slate-900 sm:text-2xl">
			{title}
		</h2>
		<p>{releaseDate}</p>
	</div>

	<div class="md:col-span-2">
		{@render children()}
	</div>
</div>
