<script lang="ts">
  import { backOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { notifications } from './toast.helper';
  export let saveMsg = 'Saved';
  export let errorMsg = 'Error';
  export let deleteMsg = 'Deleted';
</script>

<div class="notifications">
  {#each $notifications as notification (notification.id)}
    <div
      in:fly={{
        delay: 0,
        duration: 300,
        x: 0,
        y: -50,
        opacity: 0.1,
        easing: backOut,
      }}
      out:fade={{ duration: 1000 }}
      class={['toast', notification.type].join(' ')}
    >
      <div class="toast-text">
        {#if notification.message === 'common.saved'}
          {saveMsg}
        {:else if notification.message === 'common.error'}
          {errorMsg}
        {:else if notification.message === 'common.deleted'}
          {deleteMsg}
        {:else}
          {notification.message}
        {/if}
      </div>
      {#if notification.icon}<i class={notification.icon} />{/if}
    </div>
  {/each}
</div>

<style>
  .notifications {
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    pointer-events: none;
    z-index: 999;
  }
  .toast {
    width: fit-content;
    margin: auto;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: var(--shadow);
  }
  .toast-text {
    display: block;
    font-weight: bold;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    padding: 0.75rem 2rem;
  }
  .success {
    background-color: var(--toast-success);
  }
  .error {
    background-color: var(--toast-error);
  }
  .info {
    background-color: var(--toast-info);
  }
  .warning {
    background-color: var(--toast-warning);
  }
</style>
