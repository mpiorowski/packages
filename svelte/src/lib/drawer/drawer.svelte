<script lang="ts">
  import { browser } from '$app/env';
  import { writable } from 'svelte/store';
  import { fade, fly } from 'svelte/transition';
  import './drawer.style.css';

  export let onClose: () => void;
  export let isOpen: boolean;
  export let header = '';

  export const isDrawerOpen = writable(false);

  $: isDrawerOpen.set(isOpen);
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
    <div class="header">
      <h2>{header}</h2>
      <button
        on:click={onClose}
        aria-label="close"
        class="close-button"
        id="close-button"
      >
        <i class="fas fa-times" />
      </button>
    </div>
    <slot />
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

    opacity: 0.8;
    background-color: var(--gray-900);
  }
  .drawer {
    display: grid;
    grid-template-rows: 60px 1fr 60px;
    height: 100%; /* 100% Full-height */
    width: 100%;
    max-width: 600px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1010; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;

    background-color: var(--sky-800);
    color: var(--gray-50);
  }
  .header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .close-button {
    border: 0;
    color: white;
    padding: 5px 10px;
    font-size: 1.3rem;
    background-color: var(--sky-500);
  }
</style>
