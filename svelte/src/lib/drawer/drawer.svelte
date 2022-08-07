<script lang="ts">
  import { browser } from '$app/env';
  import { fade, fly } from 'svelte/transition';

  export let onClose: () => void;
  export let isOpen: boolean;
  export let title = '';

  $: if (browser) document.body.classList.toggle('no-scroll', isOpen);
</script>

{#if isOpen}
  <div
    class="drawer-overlay"
    transition:fade={{ duration: 200 }}
    on:click={onClose}
    id="drawer-overlay"
  />

  <div class="drawer" transition:fly={{ duration: 400, x: 400 }}>
    <div class="drawer-header">
      <h2>{title}</h2>
      <button on:click={onClose} aria-label="close" class="close-btn">
        &times;
      </button>
    </div>
    <div class="drawer-content">
      <slot name="content" />
    </div>
    <div class="drawer-footer">
      <slot name="footer" />
    </div>
  </div>
{/if}

<style>
  .drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .drawer {
    display: grid;
    grid-template-rows: 60px 1fr auto;
    height: 100%; /* 100% Full-height */
    width: 100%;
    max-width: 600px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1010; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;
    @apply bg-slate-700 text-slate-50;
  }
  .drawer-header {
    @apply font-bold flex justify-between items-center p-4;
  }
  .drawer-content {
    @apply overflow-auto p-4;
  }
  .drawer-footer {
    @apply flex gap-2 items-center justify-end p-4;
  }
  .close-btn {
    @apply text-3xl;
  }
</style>
