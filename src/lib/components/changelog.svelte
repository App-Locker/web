<script lang="ts">
  export let releaseDate: string;
  export let newFeatureTitle: string;
  export let featureDescription: string;
  export let reasonForUpdate: string;
  export let updateDetails: string;
</script>

<div class="flex flex-col gap-4 py-4 border-t">
  <h2 class="text-2xl sm:text-4xl font-bold text-slate-900">{releaseDate}</h2>
  <div>
    <h3 class="text-xl sm:text-2xl text-slate-900">{newFeatureTitle}</h3>
    <p>{featureDescription}</p>
  </div>

  <div>
    <h3 class="text-xl sm:text-2xl text-slate-900">{reasonForUpdate}</h3>
    <p>{updateDetails}</p>
  </div>
</div>
