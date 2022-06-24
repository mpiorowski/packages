<script lang="ts">
  import { t } from 'svelte-i18n';
  import { backOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { notifications, ToastType } from './toast.helper';
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
      class={'mb-3 rounded w-fit m-auto shadow-md text-gray-100 ' +
        (notification.type === ToastType.SUCCESS ? 'bg-green-700' : '') +
        (notification.type === ToastType.ERROR ? 'bg-red-700' : '') +
        (notification.type === ToastType.INFO ? 'bg-blue-700' : '')}
    >
      <div class="px-8 py-3 block font-normal text-lg">
        {$t(notification.message)}
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
</style>
