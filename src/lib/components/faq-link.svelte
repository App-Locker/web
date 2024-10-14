<script lang="ts">
  import { ChevronDown } from "lucide-svelte";
  import { slide } from "svelte/transition";

  export let question: string;

  let faqOpen = false;
</script>

<button
  class="flex justify-between w-full border-b py-4"
  on:click={() => (faqOpen = !faqOpen)}
>
  {question}
  <ChevronDown />
</button>

{#if faqOpen}
  <div transition:slide class="mb-4 py-4">
    <slot></slot>
  </div>
{/if}
