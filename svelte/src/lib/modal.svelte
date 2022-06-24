<script lang="ts">
  import { fade } from "svelte/transition";

  export let onClose: () => void;
  export let onOverlayClose: () => void;
  export let isOpen: boolean;
  export let header = "";
</script>

{#if isOpen}
  <div
    class="modal-overlay"
    transition:fade={{ duration: 200 }}
    on:click={onOverlayClose}
    id="modal-overlay"
  />
  <div transition:fade={{ duration: 200 }} class="modal" id="modal">
    <div class="modal-header">
      <h2>{header}</h2>
      <button
        on:click={onClose}
        class="close-button"
        aria-label="close"
        id="close-button"
      >
        <i class="fas fa-times" />
      </button>
    </div>
    <div class="modal-content">
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    background-color: var(--gray-900);

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    opacity: 0.8;
  }
  .modal {
    background-color: var(--gray-700);

    /* This way it could be display flex or grid or whatever also. */
    display: grid;
    width: 600px;
    max-width: 100%;
    height: fit-content;
    max-height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    margin: auto;

    /* Use this for centering if unknown width/height */
    transform: translate(-50%, -50%);
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
    border-radius: 6px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .close-button {
    background-color: var(--gray-700);

    border: 0;
    color: white;
    padding: 5px 10px;
    font-size: 1.3rem;
  }

  .modal-content {
    padding-left: 20px;
    padding-right: 20px;
    overflow: auto;
    max-height: 100vh;
  }
</style>
