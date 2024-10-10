<script lang="ts">
  import { page } from "$app/stores";

  let { href }: { href: string } = $props();

  let isActive = $derived($page.url.pathname == href);
</script>

<a
  {href}
  class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-600"
  class:bg-slate-900={isActive}
>
  <slot />
</a>
