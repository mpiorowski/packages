<script lang="ts">
  import { fade } from 'svelte/transition';
  export let name: string;
  let isOpen = false;

  function clickOutside(
    node: HTMLElement,
    handler: () => void
  ): { destroy: () => void } {
    const onClick = (event: MouseEvent) =>
      node &&
      !node.contains(event.target as HTMLElement) &&
      !event.defaultPrevented &&
      handler();

    document.addEventListener('click', onClick, true);

    return {
      destroy() {
        document.removeEventListener('click', onClick, true);
      },
    };
  }
</script>

<!-- Dropdown button -->
<div use:clickOutside={() => (isOpen = false)}>
  <button
    on:click={() => (isOpen = !isOpen)}
    class="btn btn-ghost hover:bg-sky-800 p-2 rounded transition-all"
    type="button"
  >
    {name}
    {#if isOpen}
      <i class="fas fa-caret-up ml-2" />
    {:else}
      <i class="fas fa-caret-down ml-2" />
    {/if}
  </button>
  <!-- Dropdown menu -->
  {#if isOpen}
    <div
      transition:fade={{ duration: 100 }}
      class="z-10 w-44 mt-2 bg-sky-800 rounded-md shadow-md absolute right-3 top-11"
    >
      <slot />
    </div>
  {/if}
</div>
