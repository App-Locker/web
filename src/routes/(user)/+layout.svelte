<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';

	let { children } = $props();
</script>

<!--Navigation Bar-->
<header class="fixed left-0 top-0 bg-background/80 p-6 lg:px-8">
	<nav class="flex items-center justify-between">
		<!--Left-->
		<div>
			<a class="flex items-center gap-2 text-sm font-semibold leading-6" href="/">
				<ArrowLeft />
				Back to Home
			</a>
		</div>
	</nav>
</header>

<!--Main Content-->
<main>
	{@render children()}
</main>
