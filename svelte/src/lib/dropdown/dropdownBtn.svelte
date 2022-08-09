<script lang="ts">
  import { fade } from 'svelte/transition';
  import CaretDown from '../icon/caretDown.svelte';
  import CarpetUp from '../icon/carpetUp.svelte';
  import { useClickOutside } from '../useClickOutside';
  export let name: string;
  let isOpen = false;
</script>

<!-- Dropdown button -->
<div use:useClickOutside={() => (isOpen = false)} class="dropdown">
  <button
    on:click={() => (isOpen = !isOpen)}
    class="dropdown-btn"
    type="button"
  >
    {name}
    {#if isOpen}
      <CarpetUp />
    {:else}
      <CaretDown />
    {/if}
  </button>
  <!-- Dropdown menu -->
  {#if isOpen}
    <div transition:fade={{ duration: 100 }} class="dropdown-content">
      <slot />
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
    width: fit-content;
  }
  .dropdown-btn {
    @apply bg-slate-700 p-2 rounded transition-all flex justify-center items-center gap-4;
  }
  .dropdown-btn:hover {
    @apply bg-slate-600;
  }
  .dropdown-content {
    @apply z-10 flex mt-2 bg-slate-600 rounded-md shadow-md absolute w-full;
  }
</style>
