<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>About Us</h1>

{#if $page.data.user}
	<p>Welcome, {$page.data.user.email}!</p>
{:else}
	<p>You are not logged in.</p>
{/if}
