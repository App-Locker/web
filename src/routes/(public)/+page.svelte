<script lang="ts">
	import FaqLink from '$lib/components/FaqLink.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
</script>

<div class="flex max-w-4xl flex-col justify-start gap-4 p-8 sm:px-16 sm:py-32">
	<div class="flex flex-col gap-2">
		<h1 class="text-4xl font-bold text-slate-900 sm:text-6xl">
			Enhance your security with AppLocker
		</h1>

		<p class="font-medium text-slate-700">
			Using AppLocker, you can lock any app on your device. So no one can access your personal data
			without your permission.
		</p>
	</div>

	<div class="grid gap-2 sm:grid-cols-2">
		<a
			class="flex h-10 items-center justify-center rounded-lg bg-blue-700 px-4 text-white"
			href="/download"
		>
			Download Now
		</a>
		<a
			class="flex h-10 items-center justify-center px-4 text-blue-700 hover:underline"
			href="#info"
		>
			Learn More
		</a>
	</div>
</div>

<div
	id="info"
	class="grid grid-cols-1 gap-8 border-y px-8 py-32 md:grid-cols-2 md:px-16 lg:grid-cols-3"
>
	<FeatureCard />
</div>

<div class="flex flex-col gap-8 p-8 sm:gap-16 sm:px-16 sm:py-32">
	<div>
		<h1 class="text-4xl font-bold text-slate-900 sm:text-6xl">Do You Have Questions?</h1>
		<h2 class="text-2xl text-slate-900 sm:text-4xl">We have answers (well, most of them!)</h2>
	</div>
	<p>
		Down below you will find the most common questions you may have on Web AppLocker as well as
		AppLocker.
	</p>
	<div class="grid gap-8 sm:gap-16 lg:grid-cols-2">
		<div>
			<h1 class="text-2xl font-bold">FAQ AppLocker Desktop</h1>
			<FaqLink question="How much does it cost?">
				<p>AppLocker is an Opensource programm so everybody can use it for free!</p>
			</FaqLink>

			<FaqLink question="Can I only use it on Windows?">
				<p>
					Currently, <b>AppLocker</b> is available for Windows devices only.
				</p>
			</FaqLink>
		</div>

		<div>
			<h1 class="text-2xl font-bold">FAQ AppLocker Web</h1>
			<FaqLink question="How can I contact you?">
				<p>
					You can Conact us either on <a
						class="text-blue-700 underline"
						href="mailto: contact@applocker.xyz"
					>
						contact@applocker.xyz
					</a>
					or on our
					<a href="/team" class="text-blue-700 underline">Team</a> page to see our contact information.
				</p>
			</FaqLink>
		</div>
	</div>
</div>
