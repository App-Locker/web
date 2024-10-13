<script>
  import Changelog from "$lib/components/changelog.svelte";
</script>

<div class="p-8 sm:py-32 sm:px-16">
  <h1 class="text-4xl sm:text-6xl font-bold text-slate-900 pb-4">Changelog</h1>
  <Changelog
    releaseDate="2021-10-01"
    newFeatureTitle="App Locking"
    featureDescription="Easily lock any app on your device for added privacy."
    reasonForUpdate="Bug Fixes"
    updateDetails="Fixed a bug that caused the app to crash when locking certain apps."
  />

  <Changelog
    releaseDate="2021-09-15"
    newFeatureTitle="Data Protection"
    featureDescription="Keep your personal information secure from prying eyes."
    reasonForUpdate="Performance Improvements"
    updateDetails="Improved app performance and reduced battery consumption."
  />
</div>
