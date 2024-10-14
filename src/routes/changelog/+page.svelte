<script>
  import Changelog from "$lib/components/changelog.svelte";
</script>

<div class="p-8 sm:py-32 sm:px-16">
  <h1 class="text-4xl sm:text-6xl font-bold text-slate-900 pb-4">Changelog</h1>
  <Changelog
    title="Upcoming replacement of enterprise code security enablement UI and APIs"
    releaseDate="2021-04-18"
  >
    <div class="border-b">
      <p class="mb-4">
        In the coming months, the current interface for managing code security
        settings for an enterprise will be deprecated and replaced with new and
        improved code security configurations that will provide you a more
        consistent and scalable way to manage security settings across
        repositories within your enterprise.
      </p>
      <p class="mb-4">
        The current REST API endpoint to enable or disable a security feature
        for an enterprise is now deprecated. It will continue to work for an
        additional year in the current version of the REST API before being
        removed in September of 2025, but note that it may conflict with
        settings assigned in code security configurations if the configuration
        is unenforced, potentially resulting in a security configuration being
        unintentionally removed from a repository. To change the security
        settings for repositories at the enterprise level, you can use the
        current enterprise-level security settings UI or the upcoming code
        security configurations API.
      </p>
      <p class="mb-4">Send us your feedback!</p>
    </div>
  </Changelog>

  <Changelog title="Data Protection For Your Apps" releaseDate="2021-09-15">
    <div>
      <p class="mb-4">
        The GitHub Advisory Database now features the Exploit Prediction Scoring
        System (EPSS) from the global Forum of Incident Response and Security
        Teams (FIRST), helping you better assess vulnerability risks.
      </p>
      <p class="mb-4">
        EPSS scores predict the likelihood of a vulnerability being exploited,
        with scores ranging from 0 to 1 (0 to 100%). Higher scores mean higher
        risk. We also show the EPSS score percentile, indicating how a
        vulnerability compares to others.
      </p>
      <p class="mb-4">
        For example, a 90.534% EPSS score at the 95th percentile means:
      </p>
      <li>test</li>
      <li>test</li>
    </div>
  </Changelog>
</div>
