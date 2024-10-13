<script lang="ts">
  import FaqLink from "$lib/components/faq-link.svelte";

  const features = [
    {
      title: "App Locking",
      description: "Easily lock any app on your device for added privacy.",
    },
    {
      title: "Data Protection",
      description: "Keep your personal information secure from prying eyes.",
    },
    {
      title: "Cross-Device Compatibility",
      description: "Works smoothly on all Windows devices.",
    },
    {
      title: "User-Friendly",
      description: "Simple and intuitive interface for easy app management.",
    },
    {
      title: "Completely Free",
      description: "Enjoy full functionality at no cost.",
    },
    {
      title: "Quick Setup",
      description: "Get started in minutes and protect your apps effortlessly.",
    },
  ];
</script>

<div class="grid lg:grid-cols-2 gap-8 sm:gap-16 p-8 sm:py-32 sm:px-16">
  <div class="flex flex-col gap-4 justify-start">
    <div class="flex flex-col gap-2">
      <h1 class="text-4xl sm:text-6xl font-bold text-slate-900">
        Enhance your security with AppLocker
      </h1>

      <p class="text-slate-700 font-medium">
        Using AppLocker, you can lock any app on your device. So no one can
        access your personal data without your permission.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-2">
      <a
        class="h-10 px-4 bg-blue-700 text-white flex justify-center rounded-lg items-center"
        href="/download"
      >
        Download Now
      </a>
      <a
        class="h-10 px-4 text-blue-700 hover:underline flex justify-center items-center"
        href="#info"
      >
        Learn More
      </a>
    </div>
  </div>

  <img src="lock.gif" alt="Lock" class="w-full" />
</div>

<div
  id="info"
  class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-20 border-y px-8 md:px-16"
>
  {#each features as { title, description }}
    <div class="flex flex-col gap-4 p-4 rounded-lg shadow-lg text-center">
      <h1 class="text-lg font-medium">{title}</h1>
      <p>{description}</p>
    </div>
  {/each}
</div>

<div class="flex flex-col gap-8 sm:gap-16 p-8 sm:py-32 sm:px-16">
  <div>
    <h1 class="text-4xl sm:text-6xl font-bold text-slate-900">
      Do You Have Questions?
    </h1>
    <h2 class="text-2xl sm:text-4xl text-slate-900">
      We have answers (well, most of them!)
    </h2>
  </div>
  <p>
    Down below you will find the most common questions you may have on Web
    AppLocker as well as AppLocker.
  </p>
  <div class="grid lg:grid-cols-2 gap-8 sm:gap-16">
    <div>
      <h1 class="text-2xl font-bold">FAQ AppLocker Desktop</h1>
      <FaqLink question="How much does it cost?">
        <p slot="answer">
          AppLocker is an Opensource programm so everybody can use it for free!
        </p>
      </FaqLink>

      <FaqLink question="Can I only use it on Windows?">
        <p slot="answer">
          Currently, AppLocker is available for Windows devices only.
        </p>
      </FaqLink>
    </div>

    <div>
      <h1 class="text-2xl font-bold">FAQ AppLocker Web</h1>
      <FaqLink question="How can I contact you?">
        <p slot="answer">
          You can Conact us either on <a
            class="text-blue-700 underline"
            href="mailto: contact@applocker.xyz"
          >
            contact@applocker.xyz
          </a>
          or on our
          <a href="/team" class="text-blue-700 underline">Team</a> page to see our
          contact information.
        </p>
      </FaqLink>
    </div>
  </div>
</div>
