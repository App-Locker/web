<script>
  import EmployeeCard from "$lib/components/employee-card.svelte";
</script>

<div
  class="flex justify-center items-center py-8 sm:py-32 p-10 flex-col gap-8 lg:flex-row"
>
  <EmployeeCard
    alt="Roman Foto"
    feature1="test1"
    feature2="test2"
    feature3="test3"
    mailto="fruroa21"
    firstname="Roman"
    lastname="Fruth"
    rank="CEO"
    src="mustermann.png"
  ></EmployeeCard>

  <EmployeeCard
    alt="Bastian Foto"
    feature1="test1"
    feature2="test2"
    feature3="test3"
    mailto="sriba21"
    firstname="Bastian"
    lastname="Schrittwieser"
    rank="CFO & CTO"
    src="mustermann.png"
  ></EmployeeCard>

  <EmployeeCard
    alt="Noah Foto"
    feature1="test1"
    feature2="test2"
    feature3="test3"
    mailto="winnoa21"
    firstname="Noah"
    lastname="Winkler"
    rank="Senior VP"
    src="mustermann.png"
  ></EmployeeCard>
</div>
