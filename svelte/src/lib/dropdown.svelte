<script lang="ts">
  import { fade } from 'svelte/transition';
  import { clickOutside } from './clickOutside';
  let isOpen = false;
</script>

<!-- Dropdown button -->
<div use:clickOutside={() => (isOpen = false)} class="dropdown">
  <div class="dropdown-btn" on:click={() => (isOpen = !isOpen)}>
    <slot name="button" />
  </div>
  <!-- Dropdown content -->
  {#if isOpen}
    <div transition:fade={{ duration: 100 }} class="dropdown-content">
      <slot name="content" />
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
  }
  .dropdown-btn:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
    cursor: pointer;
  }
  .dropdown-content {
    @apply z-10 flex mt-2 bg-slate-600 rounded-md shadow-md absolute w-fit right-0;
  }
</style>
