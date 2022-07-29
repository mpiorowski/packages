<script lang="ts">
  import { backOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { notifications, ToastType } from './toast.helper';
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
      class={[
        'toast',
        notification.type === ToastType.SUCCESS && 'green',
        notification.type === ToastType.ERROR && 'red',
        notification.type === ToastType.INFO && 'blue',
        notification.type === ToastType.WARNING && 'orange',
      ].join(' ')}
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
    z-index: 9999;
  }
  .toast {
    @apply mb-3 rounded w-fit m-auto shadow-md text-gray-100;
  }
  .toast-text {
    @apply px-8 py-3 block font-normal text-lg;
  }
  .green {
    @apply bg-green-700;
  }
  .red {
    @apply bg-red-700;
  }
  .blue {
    @apply bg-blue-700;
  }
  .orange {
    @apply bg-orange-600;
  }
</style>
