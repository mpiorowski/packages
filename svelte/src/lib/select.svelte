<script lang="ts">
  import { t } from 'svelte-i18n';

  export let label: string;
  export let value: unknown;
  export let error: string = '';
  export let required = false;
  export let disabled = false;
</script>

<div class="w-full">
  <label for={label} class="block mb-1 h-5 text-sm font-medium">
    {label}
    {#if required}<span class="text-red-600">*</span>{/if}
  </label>
  <select
    id={label}
    {disabled}
    bind:value
    class={`transition shadow-sm h-9 block w-full px-3.5 py-1.5 text-sm rounded-md border focus:ring-2 focus:ring-sky-300 
      ${error ? 'border-red-800 text-red-500 bg-red-100' : 'border-gray-300 text-gray-900 bg-gray-50'}`}
  >
    <slot />
  </select>
  <p class="mt-1 h-5 text-sm text-red-400 font-bold">
    {#if error}
      {$t(error)}
    {/if}
  </p>
</div>
