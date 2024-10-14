<script lang="ts">
  export let src: string;
  export let alt: string;
  export let firstname: string;
  export let lastname: string;
  export let rank: string;
  export let feature1: string;
  export let feature2: string;
  export let feature3: string;
  export let mailto: string;
</script>

<div class="max-w-md w-full bg-white shadow-lg rounded-lg p-10 mx-4 md:mx-auto">
  <h2 class="text-2xl font-bold text-gray-800 text-center">
    {firstname}<br />{lastname}
  </h2>
  <p class="text-gray-400 text-center mb-4">{rank}</p>
  <div class="flex justify-center mb-4">
    <img {src} class="w-3/5" {alt} />
  </div>
  <ul class="flex flex-col justify-center items-center gap-1 mb-6">
    <li class="text-gray-600 text-sm list-disc">{feature1}</li>
    <li class="text-gray-600 text-sm list-disc">{feature2}</li>
    <li class="text-gray-600 text-sm list-disc">{feature3}</li>
  </ul>
  <div class="text-center">
    <a
      class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      href="mailto:{mailto}@htl-kaindorf.at">Contact Now</a
    >
  </div>
</div>
