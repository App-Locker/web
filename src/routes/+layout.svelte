<script lang="ts">
  import "../app.css";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import NavLink from "$lib/components/nav-link.svelte";

  let navOpen = false;

  let commitDate = "";
  let commitHash = "";
  let commitUrl = "";

  // Function to fetch the latest commit hash from GitHub
  const fetchLatestCommit = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/App-Locker/web/commits/dev"
      );
      const data = await response.json();
      commitDate = new Date(data.commit.author.date).toDateString().slice(4);
      commitHash = data.sha.slice(0, 7);

      commitUrl = data.url;
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
        <div class="hidden sm:block">
          <div class="flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/download">Download</NavLink>
            <NavLink href="/changelog">Changelog</NavLink>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <div class="flex items-center gap-3">
          <NavLink class="sm:block hidden" href="/about-us">About Us</NavLink>
          <NavLink
            class="flex items-center rounded-md hover:bg-slate-600 px-2 py-0.5 text-sm font-medium text-white gap-3"
            href="/login"
            >Login
            <img class="h-8 w-auto rounded-md" src="lock.ico" alt="AppLocker" />
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</nav>

<!--Mobile Menu-->
{#if navOpen}
  <div transition:slide class="block sm:hidden bg-gray-800 -z-10">
    <div class="flex flex-col space-y-1 px-2 pb-3 pt-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/team">Team</NavLink>
      <NavLink href="/download">Download</NavLink>
      <NavLink href="/changelog">Changelog</NavLink>
      <NavLink href="/about-us">About Us</NavLink>
    </div>
  </div>
{/if}

<slot />

<!--Footer-->
<footer class="bg-gray-800 flex p-2 gap-0 sm:gap-3 justify-evenly items-center">
  <div class="flex items-center gap-3">
    <h1 class="text-white hidden sm:block">Applocker</h1>
    <img class="w-8 h-8 rounded-md" src="lock.ico" alt="Lock" />
  </div>
  <NavLink href="/privacy-policy">Privacy Policy</NavLink>
  <div class="flex flex-col sm:flex-row py-2 items-center text-white">
    <p>Latest Update:</p>

    <!-- svelte-ignore a11y_mouse_events_have_key_events -->
    <a
      class="underline rounded-md px-3 text-end w-28"
      href="https://github.com/App-Locker/web"
      on:mouseover={(event) => {
        event.currentTarget.innerText = commitHash;
      }}
      on:mouseleave={(event) => {
        event.currentTarget.innerText = commitDate;
      }}
    >
      {commitDate}
    </a>
  </div>
</footer>
