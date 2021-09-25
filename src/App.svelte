<script lang="ts">
  import SideBar from "./components/SideBar/index.svelte";
  import WFSection from "./components/home/WFSection/index.svelte";
</script>

<main class="flex flex-row">
  <SideBar />
  <div class="flex-grow">
    <WFSection />
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

