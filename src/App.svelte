<script lang="ts">
  import SideBar from "./components/SideBar/index.svelte";
  import HeroSection from "./components/home/HeroSection/index.svelte";
  import ColorSection from "./components/home/ColorSection/index.svelte"
  import ColorInfoSection from "./components/home/ColorInfoSection/index.svelte"
  import FounderSection from "./components/home/FounderSection/index.svelte"
  import Footer from "./components/Footer/index.svelte"
</script>

<main class="flex flex-row">
  <SideBar />
  <div class="flex-grow">
    <HeroSection/>
    <ColorSection/>
    <ColorInfoSection/>
    <FounderSection/>
    <Footer/>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
