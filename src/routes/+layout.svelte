<script lang="ts">
  import { fly } from "svelte/transition";
  import "../app.css";
  import { onMount } from "svelte";

  let navOpen = false;

  let commitHash = "";

  // Function to fetch the latest commit hash from GitHub
  const fetchLatestCommit = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/App-Locker/web/commits/dev"
      );
      const data = await response.json();
      commitHash = data.sha.substring(0, 7);
    } catch (error) {
      console.error("Failed to fetch commit hash", error);
    }
  };

  onMount(() => {
    fetchLatestCommit();
  });
</script>

<!--Navbar-->
<nav class="bg-gray-800 z-10 relative">
  <div class="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button class="menu-icon p-2" on:click={() => (navOpen = !navOpen)}
          ><img class="w-8 h-8" src="menubar_white.ico" alt="menu" />
        </button>
      </div>
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a
              href="/"
              class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
              >Home
            </a>
            <a
              href="/team"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >Team</a
            >
            <a
              href="/download"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >Downloads</a
            >
            <a
              href="/changelog"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >Changelogs</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <div class="hidden sm:ml-6 sm:block">
          <a
            href="/about-us"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >About Us</a
          >
        </div>
        <img
          class="h-8 w-auto mx-3 rounded-md"
          src="lock.ico"
          alt="AppLocker"
        />
      </div>
    </div>
  </div>
</nav>

<!--Mobile Menu-->
{#if navOpen}
  <div
    transition:fly={{ y: -50, opacity: 0 }}
    id="mobile-menu"
    class="block sm:hidden bg-gray-800 -z-10"
  >
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a
        href="/"
        class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
        aria-current="page">Home</a
      >
      <a
        href="/team"
        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >Team</a
      >
      <a
        href="/download"
        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >Downloads</a
      >
      <a
        href="/changelog"
        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >Changelogs</a
      >
      <a
        href="/about-us"
        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >About Us</a
      >
    </div>
  </div>
{/if}

<slot />

<!--Footer-->
<footer class="bg-gray-800 flex p-2 gap-3 justify-between items-center">
  <div class="flex items-center gap-3">
    <h1 class="text-white hidden sm:block">Applocker</h1>
    <img class="w-8 h-8 rounded-md" src="lock.ico" alt="Lock" />
  </div>
  <a class="text-white" href="/privacy-policy">Privacy Policy</a>
  <div class="flex flex-row text-white">
    <p class="hidden sm:block">Commit:</p>
    <a
      class="underline"
      href={`https://github.com/App-Locker/web/commit/${commitHash}`}
    >
      {commitHash}
    </a>
  </div>
</footer>
