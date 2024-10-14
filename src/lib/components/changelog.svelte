<script lang="ts">
  export let title: string;
  export let releaseDate: string;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
  <div class="">
    <h2 class="text-xl sm:text-2xl font-semibold text-slate-900 uppercase">
      {title}
    </h2>
    <p>{releaseDate}</p>
  </div>
  <div class="md:col-span-2">
    <slot></slot>
  </div>
</div>
